//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const blogdecafe: ProjectInterface = {
  isActive: true,
  id: 'blogdecafe',
  name: 'BlogDeCafe',
  coverImage: 'assets/imgs/projects/blogdecafe/BlogDeCafe1.png',
  developmentDate: '12/09/2021 ~ 17/05/2022',
  description: 'Developed in <b>Angular (HTML, CSS, javascript)</b>.\n\n' +
  'Blog type page in which you can find different articles and have access to some courses, its main theme is coffee.\n\n',
   outcome: 'A sample of my first steps as a frontend developer.',
  imageUrls: [
    'assets/imgs/projects/blogdecafe/BlogDeCafe5.jpg',
    'assets/imgs/projects/blogdecafe/BlogDeCafe1.png',
    'assets/imgs/projects/blogdecafe/BlogDeCafe6.jpg',
    'assets/imgs/projects/blogdecafe/BlogDeCafe2.png',
    'assets/imgs/projects/blogdecafe/BlogDeCafe7.jpg',
    'assets/imgs/projects/blogdecafe/BlogDeCafe3.png',
    'assets/imgs/projects/blogdecafe/BlogDeCafe8.jpg',
    'assets/imgs/projects/blogdecafe/BlogDeCafe4.png',
    'assets/imgs/projects/blogdecafe/BlogDeCafe9.jpg',

  ],
  links: [
    { title: 'Site', link: 'https://blogdecafe-jc.netlify.app/' },
    // { title: '', link: '' },
  ],
  tags: [ProjectTagsEnum.WEB, ],
  techs: [TechEnum.JAVASCRIPT, TechEnum.HTML, TechEnum.CSS,],
  orientation: OrientationEnum.HORIZONTAL,
};
