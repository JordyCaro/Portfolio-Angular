//#region Imports

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { I18nModule } from '../../i18n/i18n.module';
import { ContactModalComponent } from './contact-modal.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    I18nModule,
  ],
  declarations: [
    ContactModalComponent,
  ],
  exports: [
    ContactModalComponent,
  ],
})
export class ContactModalModule {}
