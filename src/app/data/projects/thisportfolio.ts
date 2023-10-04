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
  description: 'Developed in <b>Angular (HTML, BOOTSTRAP, Typescript)</b> and accessing <b>azure</b>.\n\n' +
    'Private software in which drivers and their vehicles can <b>upload their documents</b> to connect and get loads, other drivers or jobs.\n\n',
    outcome: 'Fixed some forms to send and receive documents correctly.',
  imageUrls: [
    'assets/imgs/projects/thisportfolio/Portfolio-Jordy1.png',
    'assets/imgs/projects/thisportfolio/Portfolio-Jordy2.png',
    'assets/imgs/projects/thisportfolio/Portfolio-Jordy3.png',
    'assets/imgs/projects/thisportfolio/Portfolio-Jordy4.png',
    'assets/imgs/projects/thisportfolio/Portfolio-Jordy5.png',


  ],
  links: [
    { title: 'Site', link: 'https://portafolio-jhordan-caro.netlify.app/#sobre-mi' },
    // { title: '', link: '' },
  ],
  tags: [ProjectTagsEnum.WEB, ],
  techs: [TechEnum.ANGULAR,TechEnum.NODE, TechEnum.HTML, TechEnum.CSS,],
  orientation: OrientationEnum.HORIZONTAL,
};
