import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { I18nModule } from './i18n/i18n.module';
import { ContactModalModule } from './modals/contact-modal/contact-modal.module';
import { ImageZoomModalModule } from './modals/image-zoom-modal/image-zoom-modal.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    I18nModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    ContactModalModule,
    ImageZoomModalModule,
  ],
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
