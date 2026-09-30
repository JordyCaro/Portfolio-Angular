import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../i18n/language.service';

@Component({
  standalone: false,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor(
    private readonly router: Router,
    public readonly language: LanguageService,
  ) {}


  public isMobileNavbarOpen: boolean = false;

  public isScrolled: boolean = false;

  public isHidden: boolean = false;

  private lastScrollY: number = 0;

  public toggleMobileNavbar(): void {
    this.isMobileNavbarOpen = !this.isMobileNavbarOpen;
  }

  public openContactModal(): void {
    this.router.navigate([], { queryParams: { modal: 'contact' } });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const currentY = window.scrollY;
    const delta = currentY - this.lastScrollY;

    this.isScrolled = currentY > 20;

    if (this.isMobileNavbarOpen || currentY < 120) {
      this.isHidden = false;
    }
    else if (Math.abs(delta) > 6) {
      this.isHidden = delta > 0;
    }

    this.lastScrollY = currentY;
  }

}
