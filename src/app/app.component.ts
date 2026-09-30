import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.paramSubscription = this.route.queryParams.subscribe(param => {
      const query = param?.['modal'] as string | undefined;
      this.contactOpen = query === 'contact';
      this.imageSrc = query?.startsWith('img|') ? query.split('|')[1] : '';
    });
  }

  public contactOpen = false;
  public imageSrc = '';
  public paramSubscription: Subscription;

  public year = new Date().getFullYear();

  public openContact(): void {
    void this.router.navigate([], { queryParams: { modal: 'contact' } });
  }

  public closeModal(): void {
    void this.router.navigate([], { queryParams: {} });
  }

  public ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
  }
}
