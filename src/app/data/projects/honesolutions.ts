//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const honesolutions: ProjectInterface = {
  isActive: true,
  id: 'honesolutions',
  name: 'Hone Solutions',
  coverImage: 'assets/imgs/projects/honesolutions/Hone-Solutions1.png',
  developmentDate: '12/03/2023 ~ 17/06/2023',
  description: 'Developed in <b>Angular (HTML, BOOTSTRAP, Typescript)</b> and accessing <b>azure</b>.\n\n' +
    'Private software in which different health providers have control over their specialists and their users\n\n' +
    'There are forms to create, edit, delete different content from various databases so that administrators can have more control\n',
    outcome: 'It was created from scratch until it was brought to production, meeting all the client requirements.',
  imageUrls: [
    'assets/imgs/projects/honesolutions/Hone-Solutions1.png',
    'assets/imgs/projects/honesolutions/Hone-Solutions2.jpg',

  ],
  links: [
    // { title: 'Site', link: '' },
    // { title: '', link: '' },
  ],
  tags: [ProjectTagsEnum.WEB, ],
  techs: [TechEnum.ANGULAR,TechEnum.NODE, TechEnum.HTML, TechEnum.CSS,],
  orientation: OrientationEnum.HORIZONTAL,
};
