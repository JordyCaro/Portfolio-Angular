//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectItemModule } from '../../components/project-item/project-item.module';
import { I18nModule } from '../../i18n/i18n.module';
import { HomeComponent } from './home.component';

//#endregion

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProjectItemModule,
    I18nModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule {}
