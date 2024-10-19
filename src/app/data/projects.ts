import { ProjectInterface } from '../models/interfaces/project.interface';
import { lmndtv } from './projects/lmndtv';
import { cargamasiva } from './projects/cargamasiva';
import { honesolutions } from './projects/honesolutions';
import { nuevaeps } from './projects/nuevaeps';
import { firtsportfolio } from './projects/firtsportfolio';
import { blogdecafe } from './projects/blogdecafe';
import { frontendstore } from './projects/frontendstore';
import { compracursos } from './projects/compracursos';
import { filmpedia } from './projects/filmpedia';
import { thisportfolio } from './projects/thisportfolio';
import { nemogallery } from './projects/nemogallery';


export const projects: ProjectInterface[] = [
  nemogallery,
  thisportfolio,
  lmndtv,
  cargamasiva,
  nuevaeps,
  honesolutions,
  firtsportfolio,
  filmpedia,
  blogdecafe,
  frontendstore,
  compracursos,
];

export const listProjects: ProjectInterface[] = projects.filter(project => project.isActive);
