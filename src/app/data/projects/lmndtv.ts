import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const lmndtv: ProjectInterface = {
  isActive: true,
  id: 'lmndtv',
  name: 'La mejor noche de tu vida',
  coverImage: 'assets/imgs/projects/lamejornochedetuvida/LMNDTV1.png',
  developmentDate: '12/09/2022 ~ 17/05/2023',
  description: 'Developed in <b>Angular (HTML, BOOTSTRAP, Typescript)</b> and accessing <b>azure</b>.\n\n' +
    'Site to buy tickets with which to participate in <b>raffles and win tickets</b> to different events or specific places.\n\n' +
    'It is possible to purchase multiple tickets safely and view previous draws and previous winners.\n',
    outcome: 'It was created from scratch until it was brought to production, meeting all the client requirements.',
  imageUrls: [
    'assets/imgs/projects/lamejornochedetuvida/LMNDTV1.png',
    'assets/imgs/projects/lamejornochedetuvida/LMNDTV2.png',
    'assets/imgs/projects/lamejornochedetuvida/LMNDTV3.png',
    'assets/imgs/projects/lamejornochedetuvida/LMNDTV4.png',
    'assets/imgs/projects/lamejornochedetuvida/LMNDTV5.png',

  ],
  links: [
    { title: 'Site', link: 'https://lamejornochedetuvida.com/#/inicio' },
    // { title: 'LMNDTV', link: 'https://lamejornochedetuvida.com/#/inicio' },
  ],
  tags: [ProjectTagsEnum.WEB, ],
  techs: [TechEnum.ANGULAR,TechEnum.NODE, TechEnum.HTML, TechEnum.CSS,],
  orientation: OrientationEnum.HORIZONTAL,
};
