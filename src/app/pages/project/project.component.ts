import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { projects } from '../../data/projects';
import { LanguageService } from '../../i18n/language.service';
import { OrientationEnum } from '../../models/enums/orientation.enum';
import { formattedTechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';


@Component({
  standalone: false,
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit, OnDestroy {

  private langSubscription?: Subscription;

  constructor(
    @Inject(DOCUMENT)
    private readonly doc: Document,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly language: LanguageService,
  ) {
    this.projectId = this.route.snapshot.params['id'] || '';
  }

  public projectId: string = '';

  public listProjects: ProjectInterface[] = projects;

  public project: ProjectInterface = {
    isActive: true,
    id: '',
    name: '',
    developmentDate: '',
    coverImage: '',
    description: '',
    outcome: '',
    imageUrls: [],
    techs: [],
    orientation: OrientationEnum.HORIZONTAL,
    tags: [],
    links: [],
  };

  public tags: string = '';
  public techs: string = '';

  public ngOnInit(): void {
    const project = this.listProjects.find(i => i.id === this.projectId);

    if (!project) {
      this.router.navigateByUrl('/home');
      return;
    }

    this.langSubscription = this.language.lang$.subscribe(() => {
      this.project = this.language.project(project);
    });

    this.formatTags();
    this.formatTechs();
  }

  public ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  public async openZoom(image: string): Promise<void> {
    await this.router.navigate([], { queryParams: { modal: 'img|' + image } });
  }

  public topFunction(): void {
    this.doc.body.scrollTop = 0;
    this.doc.documentElement.scrollTop = 0;
  }

  public openContactModal(): void {
    void this.router.navigate([], { queryParams: { modal: 'contact' } });
  }


  private formatTags(): void {
    this.tags = this.project.tags.join(', ');
  }

  private formatTechs(): void {
    this.project.techs.forEach((tech, i) => {
      this.techs += (i !== 0 ? ', ' : '') + formattedTechEnum[tech];
    });
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


}
