//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const nuevaeps: ProjectInterface = {
  isActive: true,
  id: 'nuevaeps',
  name: 'Nueva-Eps',
  coverImage: 'assets/imgs/projects/nuevaeps/Nueva-EPS1.png',
  developmentDate: '01/09/2023 ~ 01/10/2023',
  description: 'Developed in <b>Angular (HTML, CSS, Typescript)</b> and accessing <b>azure</b>.\n\n' +
    'Site in which users of this health provider <b>can find places and specialists</b> according to their needs.\n\n' +
    'You can find specialists or health centers according to your city, your specialty and other parameters.\n',
    outcome: 'It was created from scratch until it was brought to production, meeting all the client requirements.',
  imageUrls: [
    'assets/imgs/projects/nuevaeps/Nueva-EPS1.png',
    'assets/imgs/projects/nuevaeps/Nueva-EPS2.png',
    'assets/imgs/projects/nuevaeps/Nueva-EPS3.png',
    'assets/imgs/projects/nuevaeps/Nueva-EPS4.png',
    'assets/imgs/projects/nuevaeps/Nueva-EPS5.jpg',

  ],
  links: [
    // { title: 'Site', link: '' },
    // { title: '', link: '' },
  ],
  tags: [ProjectTagsEnum.WEB, ],
  techs: [TechEnum.ANGULAR,TechEnum.NODE, TechEnum.HTML, TechEnum.CSS,],
  orientation: OrientationEnum.HORIZONTAL,
};
