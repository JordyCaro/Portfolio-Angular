import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { ContactModalComponent } from '../../modals/contact-modal/contact-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor(
    private readonly router: Router,
  ) {}


  public isMobileNavbarOpen: boolean = false;

  public toggleMobileNavbar(): void {
    this.isMobileNavbarOpen = !this.isMobileNavbarOpen;
  }

  public openContactModal(): void {
    this.router.navigate([], { queryParams: { modal: 'contact' } });
  }


}
