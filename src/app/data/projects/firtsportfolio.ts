import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const firtsportfolio: ProjectInterface = {
  isActive: true,
  id: 'firtsportfolio',
  name: 'Firts Portfolio',
  coverImage: 'assets/imgs/projects/firtsportfolio/firtsportfolio1.png',
  developmentDate: '12/03/2023 ~ 17/06/2023',
  description: 'Developed in <b>Angular (HTML, CSS, javascript)</b>.\n\n' +
    "It's just my first portfolio, what are you waiting for to go see it....\n\n",
    outcome: 'A sample of my first steps as a frontend developer.',
  imageUrls: [
    'assets/imgs/projects/firtsportfolio/firtsportfolio1.png',
    'assets/imgs/projects/firtsportfolio/firtsportfolio2.png',
    'assets/imgs/projects/firtsportfolio/firtsportfolio3.png',
    'assets/imgs/projects/firtsportfolio/firtsportfolio4.png',
    'assets/imgs/projects/firtsportfolio/firtsportfolio5.png',
    'assets/imgs/projects/firtsportfolio/firtsportfolio6.png',

  ],
  links: [
    { title: 'Site', link: 'https://portafolio-jhordan-caro.netlify.app/#sobre-mi' },
    // { title: '', link: '' },
  ],
  tags: [ProjectTagsEnum.WEB, ],
  techs: [TechEnum.ANGULAR,TechEnum.NODE, TechEnum.HTML, TechEnum.CSS,],
  orientation: OrientationEnum.HORIZONTAL,
};
