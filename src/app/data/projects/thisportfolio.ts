import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const thisportfolio: ProjectInterface = {
  isActive: true,
  id: 'thisportfolio',
  name: 'This Portfolio',
  coverImage: 'assets/imgs/projects/thisportfolio/Portfolio-Jordy1.png',
  developmentDate: '12/03/2023 ~ 17/06/2023',
  description: "<b>If it's not a dejavu it's a loop...</b>\n\n" +
  'Developed in <b>Angular (HTML, BOOTSTRAP, Typescript)</b></b>.\n\n',
    outcome: 'Everything you can see.',
  imageUrls: [
    'assets/imgs/projects/thisportfolio/Portfolio-Jordy1.png',
    'assets/imgs/projects/thisportfolio/Portfolio-Jordy2.png',
    'assets/imgs/projects/thisportfolio/Portfolio-Jordy3.png',
    'assets/imgs/projects/thisportfolio/Portfolio-Jordy4.png',
    'assets/imgs/projects/thisportfolio/Portfolio-Jordy5.png',


  ],
  links: [
    { title: 'Site', link: '/home' },
    // { title: '', link: '' },
  ],
  tags: [ProjectTagsEnum.WEB, ],
  techs: [TechEnum.ANGULAR,TechEnum.NODE, TechEnum.HTML, TechEnum.CSS,],
  orientation: OrientationEnum.HORIZONTAL,
};
