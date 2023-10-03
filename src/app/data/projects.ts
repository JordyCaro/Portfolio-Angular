//#region Imports

import { ProjectInterface } from '../models/interfaces/project.interface';
import { lmndtv } from './projects/lmndtv';
import { cargamasiva } from './projects/cargamasiva';
import { honesolutions } from './projects/honesolutions';
import { nuevaeps } from './projects/nuevaeps';
import { blogdecafe } from './projects/blogdecafe';
import { frontendstore } from './projects/frontendstore';
import { compracursos } from './projects/compracursos';


//#endregion

export const projects: ProjectInterface[] = [
  lmndtv,
  cargamasiva,
  nuevaeps,
  honesolutions,
  blogdecafe,
  frontendstore,
  compracursos,
];

export const listProjects: ProjectInterface[] = projects.filter(project => project.isActive);
