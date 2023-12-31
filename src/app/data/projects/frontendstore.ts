//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const frontendstore: ProjectInterface = {
  isActive: true,
  id: 'frontendstore',
  name: 'Frontend-Store',
  coverImage: 'assets/imgs/projects/frontendstore/FrontEnd-Store1.png',
  developmentDate: '12/09/2021 ~ 17/05/2022',
  description: 'Developed in <b>Angular (HTML, CSS, javascript)</b>.\n\n' +
    'Store to buy different programming language themed shirts.\n\n'+
    'DEVELOPERS ARE GOING TO LOVE IT\n',
    outcome: 'A sample of my first steps as a frontend developer.',
  imageUrls: [
    'assets/imgs/projects/frontendstore/FrontEnd-Store0.jpg',
    'assets/imgs/projects/frontendstore/FrontEnd-Store1.png',
    'assets/imgs/projects/frontendstore/FrontEnd-Store2.jpg',
    'assets/imgs/projects/frontendstore/FrontEnd-Store3.png',
    'assets/imgs/projects/frontendstore/FrontEnd-Store4.jpg',
    'assets/imgs/projects/frontendstore/FrontEnd-Store5.png',
    'assets/imgs/projects/frontendstore/FrontEnd-Store6.jpg',
    'assets/imgs/projects/frontendstore/FrontEnd-Store7.png',
    'assets/imgs/projects/frontendstore/FrontEnd-Store8.jpg',
    'assets/imgs/projects/frontendstore/FrontEnd-Store9.png',
    'assets/imgs/projects/frontendstore/FrontEnd-Store10.jpg',
    'assets/imgs/projects/frontendstore/FrontEnd-Store11.png',

  ],
  links: [
    { title: 'Site', link: 'https://frontend-store-jc.netlify.app/' },
    // { title: '', link: '' },
  ],
  tags: [ProjectTagsEnum.WEB, ],
  techs: [TechEnum.JAVASCRIPT, TechEnum.HTML, TechEnum.CSS,],
  orientation: OrientationEnum.HORIZONTAL,
};
