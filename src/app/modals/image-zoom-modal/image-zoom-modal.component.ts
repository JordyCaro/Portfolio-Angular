//#region Imports

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

//#endregion

@Component({
  standalone: false,
  selector: 'app-image-zoom-modal',
  templateUrl: './image-zoom-modal.component.html',
  styleUrls: ['./image-zoom-modal.component.scss'],
})
export class ImageZoomModalComponent {

  //#region Constructor

  constructor(
    private readonly router: Router,
  ) {}

  //#endregion

  //#region Public Properties

  @Input()
  public src!: string;

  //#endregion

  //#region Public Functions

  public closeModal(): void {
    void this.router.navigate([], { queryParams: {} });
  }

  //#endregion

}
