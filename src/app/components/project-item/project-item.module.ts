//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nModule } from '../../i18n/i18n.module';
import { ProjectItemComponent } from './project-item.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    I18nModule,
  ],
  declarations: [
    ProjectItemComponent,
  ],
  exports: [
    ProjectItemComponent,
  ],
})
export class ProjectItemModule {}

