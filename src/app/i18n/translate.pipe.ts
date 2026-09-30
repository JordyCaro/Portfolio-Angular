import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service';

@Pipe({
  standalone: false,
  name: 't',
  pure: false,
})
export class TranslatePipe implements PipeTransform {

  constructor(private readonly language: LanguageService) {}

  public transform(key: string): string {
    return this.language.t(key);
  }

}
