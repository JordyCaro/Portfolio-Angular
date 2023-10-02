//#region Imports

import { ProjectInterface } from '../models/interfaces/project.interface';
import { lmndtv } from './projects/lmndtv';
import { cargamasiva } from './projects/cargamasiva';
import { nuevaeps } from './projects/nuevaeps';


//#endregion

export const projects: ProjectInterface[] = [
  lmndtv,
  cargamasiva,
  nuevaeps,
];

export const listProjects: ProjectInterface[] = projects.filter(project => project.isActive);
