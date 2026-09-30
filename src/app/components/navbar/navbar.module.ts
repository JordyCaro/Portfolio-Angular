//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nModule } from '../../i18n/i18n.module';
import { NavbarComponent } from './navbar.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    I18nModule,
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule {}

