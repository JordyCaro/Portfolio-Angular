//#region Imports

import { Component, Input } from '@angular/core';
import { formattedTechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

@Component({
  standalone: false,
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent {

  //#region Public Properties

  @Input()
  public project!: ProjectInterface;

  @Input()
  public index: number | null = null;

  public get techs(): string[] {
    return this.project.techs.map(tech => formattedTechEnum[tech]);
  }

  //#endregion

  //#region Public Functions

  public onMove(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

  //#endregion

}
