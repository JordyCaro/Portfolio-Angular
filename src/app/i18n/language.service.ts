import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EducationInterface } from '../data/education';
import { PositionInterface } from '../models/interfaces/position.interface';
import { ProjectInterface } from '../models/interfaces/project.interface';
import { esEducation, esPositions, esProjects, esSkillGroups, esYearWords } from './content-es';
import { Language, translations } from './translations';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private readonly langSubject: BehaviorSubject<Language>;

  public readonly lang$;

  constructor(
    @Inject(DOCUMENT)
    private readonly doc: Document,
  ) {
    this.langSubject = new BehaviorSubject<Language>(this.initialLanguage());
    this.lang$ = this.langSubject.asObservable();
    this.doc.documentElement.lang = this.lang;
  }

  public get lang(): Language {
    return this.langSubject.value;
  }

  public setLanguage(lang: Language): void {
    if (lang === this.lang)
      return;

    localStorage.setItem(STORAGE_KEY, lang);
    this.doc.documentElement.lang = lang;
    this.langSubject.next(lang);
  }

  public toggle(): void {
    this.setLanguage(this.lang === 'en' ? 'es' : 'en');
  }

  public t(key: string): string {
    return translations[this.lang][key] ?? translations.en[key] ?? key;
  }

  public year(value: string): string {
    if (this.lang === 'en')
      return value;

    return value.replace(/[A-Za-z]+/g, word => esYearWords[word] ?? word);
  }

  public position(position: PositionInterface): PositionInterface {
    const es = this.lang === 'es' ? esPositions[position.name] : undefined;

    return {
      ...position,
      name: es?.name ?? position.name,
      description: es?.description ?? position.description,
      year: this.year(position.year),
    };
  }

  public project(project: ProjectInterface): ProjectInterface {
    const es = this.lang === 'es' ? esProjects[project.id] : undefined;

    return {
      ...project,
      name: es?.name ?? project.name,
      description: es?.description ?? project.description,
      outcome: es?.outcome ?? project.outcome,
      links: project.links.map(link => ({ ...link, title: this.t('project.link.' + link.title) })),
    };
  }

  public education(item: EducationInterface): EducationInterface {
    if (this.lang === 'en')
      return item;

    return {
      ...item,
      title: esEducation[item.title] ?? item.title,
      year: this.year(item.year),
    };
  }

  public skillGroupTitle(title: string): string {
    return this.lang === 'es' ? esSkillGroups[title] ?? title : title;
  }

  private initialLanguage(): Language {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'es' ? 'es' : 'en';
  }

}
