//#region Imports

import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

export const compracursos: ProjectInterface = {
  isActive: true,
  id: 'compracursos',
  name: 'Shopping Cart',
  coverImage: 'assets/imgs/projects/compracursos/Carrito1.png',
  developmentDate: '12/09/2021 ~ 17/05/2022',
  description: 'Developed in <b>Angular (HTML, BOOTSTRAP, Typescript)</b> and accessing <b>azure</b>.\n\n' +
    ' Site to buy tickets with which to participate in <b>raffles and win tickets</b> to different events or specific places.\n\n' +
    'It is possible to purchase multiple tickets safely and view previous draws and previous winners..\n',
    outcome: 'It was created from scratch until it was brought to production, meeting all the client requirements.',
  imageUrls: [
    'assets/imgs/projects/compracursos/Carrito0.jpg',
    'assets/imgs/projects/compracursos/Carrito1.png',
    'assets/imgs/projects/compracursos/Carrito2.jpg',
    'assets/imgs/projects/compracursos/Carrito3.png',
    'assets/imgs/projects/compracursos/Carrito4.jpg',
    'assets/imgs/projects/compracursos/Carrito5.png',
    'assets/imgs/projects/compracursos/Carrito6.jpg',
    'assets/imgs/projects/compracursos/Carrito7.png',
    'assets/imgs/projects/compracursos/Carrito8.jpg',
    'assets/imgs/projects/compracursos/Carrito9.png',

  ],
  links: [
    { title: 'Site', link: 'https://lamejornochedetuvida.com/#/inicio' },
    // { title: '', link: '' },
  ],
  tags: [ProjectTagsEnum.WEB, ],
  techs: [TechEnum.JAVASCRIPT, TechEnum.HTML, TechEnum.CSS,],
  orientation: OrientationEnum.HORIZONTAL,
};
