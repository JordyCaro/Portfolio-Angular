import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { certifications, education, EducationInterface } from '../../data/education';
import { listPositions } from '../../data/positions';
import { listProjects } from '../../data/projects';
import { skillGroups, SkillGroupInterface } from '../../data/skills';
import { LanguageService } from '../../i18n/language.service';
import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { PositionInterface } from '../../models/interfaces/position.interface';
import { ProjectInterface } from '../../models/interfaces/project.interface';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('textContent')
  textContent!: ElementRef;

  private revealObserver?: IntersectionObserver;

  private langSubscription?: Subscription;

  private typingRun = 0;

  constructor(
    @Inject(DOCUMENT)
    private readonly doc: Document,
    private readonly host: ElementRef<HTMLElement>,
    private cdRef: ChangeDetectorRef,
    private readonly language: LanguageService,
  ) {
    this.applyLanguage();
  }

  public listPositions: PositionInterface[] = [];

  @ViewChild('wheel')
  wheel!: ElementRef<HTMLElement>;

  public activePosition: number = 0;

  public activeHeight: number = 320;

  private wheelDelta = 0;

  private wheelLockedUntil = 0;

  private touchStartY = 0;

  private readonly onWheelScroll = (event: WheelEvent): void => {
    const direction = Math.sign(event.deltaY);
    const atEdge = (direction < 0 && this.activePosition === 0)
      || (direction > 0 && this.activePosition === this.listPositions.length - 1);

    if (direction === 0 || atEdge) {
      this.wheelDelta = 0;
      return;
    }

    event.preventDefault();

    if (Date.now() < this.wheelLockedUntil)
      return;

    this.wheelDelta += event.deltaY;

    if (Math.abs(this.wheelDelta) >= 40) {
      this.setActivePosition(this.activePosition + direction);
      this.wheelDelta = 0;
      this.wheelLockedUntil = Date.now() + 380;
    }
  };

  public readonly contactItems = [
    { label: 'contact.card.email', value: 'jhordancaroh@\u200Bgmail.com', href: 'mailto:jhordancaroh@gmail.com', icon: 'assets/imgs/mail.svg', external: false },
    { label: 'contact.card.whatsapp', value: '+57 322 429 4287', href: 'https://wa.me/573224294287', icon: 'assets/imgs/whatsapp-mask.svg', external: true },
    { label: 'contact.card.linkedin', value: 'in/jhordan-caro', href: 'https://www.linkedin.com/in/jhordan-caro-b016b811a/', icon: 'assets/imgs/linkedin.svg', external: true },
    { label: 'contact.card.github', value: '@JordyCaro', href: 'https://github.com/JordyCaro', icon: 'assets/imgs/github.svg', external: true },
  ];

  public skillGroups: SkillGroupInterface[] = skillGroups;

  public education: EducationInterface[] = [];

  public certifications: EducationInterface[] = [];

  public listTags: ProjectTagsEnum[] = Object.values(ProjectTagsEnum);

  public currentTag: ProjectTagsEnum = ProjectTagsEnum.ALL;

  public projectOrientation: typeof OrientationEnum = OrientationEnum;

  public listProjects: ProjectInterface[] = [];
  public listProjectsAux: ProjectInterface[] = [];

  private applyLanguage(): void {
    this.listPositions = listPositions.map(position => this.language.position(position));
    this.education = education.map(item => this.language.education(item));
    this.certifications = certifications.map(item => this.language.education(item));
    this.listProjects = listProjects.map(project => this.language.project(project));
    this.filterProjectByTag(this.currentTag);
  }

  public skillGroupTitle(title: string): string {
    return this.language.skillGroupTitle(title);
  }

  public trackByIndex(index: number): number {
    return index;
  }

  public setActivePosition(index: number): void {
    const next = Math.min(Math.max(index, 0), this.listPositions.length - 1);
    if (next === this.activePosition)
      return;

    this.activePosition = next;
    this.cdRef.detectChanges();
    this.measureActiveCard();
  }

  public onWheelKey(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.setActivePosition(this.activePosition + 1);
    }
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.setActivePosition(this.activePosition - 1);
    }
  }

  private readonly onTouchMove = (event: TouchEvent): void => {
    const direction = Math.sign(this.touchStartY - event.touches[0].clientY);
    const atEdge = (direction < 0 && this.activePosition === 0)
      || (direction > 0 && this.activePosition === this.listPositions.length - 1);

    if (direction !== 0 && !atEdge)
      event.preventDefault();
  };

  public onTouchStart(event: TouchEvent): void {
    this.touchStartY = event.touches[0].clientY;
  }

  public onTouchEnd(event: TouchEvent): void {
    const deltaY = this.touchStartY - event.changedTouches[0].clientY;
    if (Math.abs(deltaY) > 40)
      this.setActivePosition(this.activePosition + Math.sign(deltaY));
  }

  public abs(value: number): number {
    return Math.abs(value);
  }

  public sign(value: number): number {
    return Math.sign(value);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.measureActiveCard();
  }

  private measureActiveCard(): void {
    const active = this.wheel?.nativeElement.querySelector<HTMLElement>('.wheel__item.is-active');
    if (!active)
      return;

    this.activeHeight = active.offsetHeight;
    this.cdRef.detectChanges();
  }

  public splitRole(name: string): { role: string; company: string } {
    const [role, ...company] = name.split(' at ');
    return { role, company: company.join(' at ') };
  }

  public shortYear(year: string): string {
    return year.replace(/[A-Za-z]{3}\s+(\d{4})/g, '$1');
  }

  public bullets(description: string): string[] {
    return description
      .split(/\n+/)
      .map(line => line.replace(/^•\s*/, '').trim())
      .filter(line => line.length > 0);
  }

  public onCardMove(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

  public topFunction(): void {
    this.doc.body.scrollTop = 0;
    this.doc.documentElement.scrollTop = 0;
  }

  public filterProjectByTag(tag: ProjectTagsEnum): void {
    this.currentTag = tag;

    if (tag === ProjectTagsEnum.ALL) {
      this.listProjectsAux = this.listProjects;
    }
    else {
      this.listProjectsAux = this.listProjects.filter(project => project.tags.includes(tag));
    }
  }

  public navigateTo(anchor: string): void {
    this.doc.getElementById(anchor)?.scrollIntoView();
  }


  @HostListener('window:scroll')
  onScroll(): void {
    this.toggleOnTop();
  }

  private toggleOnTop(): void {
    const toTopButton = this.doc.getElementById('toTopBtn');

    if (!toTopButton)
      return;

    toTopButton.style.display = 'none';

    if (this.doc.body.scrollTop > 100 || this.doc.documentElement.scrollTop > 100)
      toTopButton.style.display = 'block';
  }

  private observeReveals(): void {
    const elements = this.host.nativeElement.querySelectorAll<HTMLElement>('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }

    this.revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.revealObserver?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    elements.forEach(element => this.revealObserver?.observe(element));
  }


  ngAfterViewInit(): void {
    this.wheel.nativeElement.addEventListener('wheel', this.onWheelScroll, { passive: false });
    this.wheel.nativeElement.addEventListener('touchmove', this.onTouchMove, { passive: false });
    this.measureActiveCard();
    this.observeReveals();
    this.animateText();
    this.scrollTextToBottom();

    this.langSubscription = this.language.lang$.pipe(skip(1)).subscribe(() => {
      this.applyLanguage();
      this.cdRef.detectChanges();
      this.measureActiveCard();
      this.animateText();
    });
  }

  ngOnDestroy(): void {
    this.wheel?.nativeElement.removeEventListener('wheel', this.onWheelScroll);
    this.wheel?.nativeElement.removeEventListener('touchmove', this.onTouchMove);
    this.revealObserver?.disconnect();
    this.langSubscription?.unsubscribe();
    this.typingRun++;
  }


  async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async typeWriter(textElement: HTMLElement, text: string, run: number): Promise<boolean> {
    for (let i = 0; i < text.length; i++) {
      if (run !== this.typingRun)
        return false;

      if (text.charAt(i) === '\n') {
        textElement.innerHTML += '<br>';
      } else {
        textElement.innerHTML += text.charAt(i);
      }
      this.scrollTextToBottom();
      await this.sleep(30);
    }
    return run === this.typingRun;
  }

  async animateText(): Promise<void> {
    const run = ++this.typingRun;
    const textElement = this.textContent.nativeElement;
    const originalText = this.language.t('terminal.text');
    textElement.innerText = '';

    if (!await this.typeWriter(textElement, this.language.t('terminal.welcome'), run))
      return;
    textElement.innerHTML += '<br><br>';

    if (!await this.typeWriter(textElement, originalText, run))
      return;

    this.scrollTextToBottom();
    this.cdRef.detectChanges();
  }

  scrollTextToBottom(): void {
    const textElement = this.textContent.nativeElement;
    // La consola tiene overflow y height fijos en la clase .text
    const container = textElement.closest('.text');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }
}
