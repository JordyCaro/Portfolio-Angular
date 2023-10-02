import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { listPositions } from '../../data/positions';
import { listProjects } from '../../data/projects';
import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { PositionInterface } from '../../models/interfaces/position.interface';
import { ProjectInterface } from '../../models/interfaces/project.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  @ViewChild('textContent')
  textContent!: ElementRef;

  constructor(
    @Inject(DOCUMENT)
    private readonly doc: Document,
    private renderer: Renderer2
  ) {}

  public listPositions: PositionInterface[] = listPositions;

  public listTags: ProjectTagsEnum[] = Object.values(ProjectTagsEnum);

  public currentTag: ProjectTagsEnum = ProjectTagsEnum.ALL;

  public projectOrientation: typeof OrientationEnum = OrientationEnum;

  public listProjects: ProjectInterface[] = listProjects;
  public listProjectsAux: ProjectInterface[] = listProjects;

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


  @HostListener('window:scroll', ['$event'])
  private onScroll(): void {
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



  ngAfterViewInit(): void {
    this.animateText();
    this.scrollToBottom();
  }


  async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async typeWriter(textElement: HTMLElement, text: string): Promise<void> {
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) === '\n') {
        textElement.innerHTML += '<br>';
      } else {
        textElement.innerHTML += text.charAt(i);
      }
      await this.sleep(30);
    }
  }

  async animateText(): Promise<void> {
    const textElement = this.textContent.nativeElement;
    const originalText = textElement.innerText.trim();
    textElement.innerText = '';

    await this.typeWriter(textElement, 'Welcome:');
    textElement.innerHTML += '<br><br>';

    await this.typeWriter(textElement, originalText);
  }

    scrollTextToBottom(): void {
    const textElement = this.textContent.nativeElement;
    textElement.scrollTop = textElement.scrollHeight;
  }

  scrollToBottom(): void {
    const textContentElement = this.textContent.nativeElement;
    textContentElement.scrollTop = textContentElement.scrollHeight;
  }
}
