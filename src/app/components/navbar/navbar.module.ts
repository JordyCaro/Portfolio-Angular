//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from './navbar.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule {}

