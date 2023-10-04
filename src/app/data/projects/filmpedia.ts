import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const filmpedia: ProjectInterface = {
  isActive: true,
  id: 'filmpedia',
  name: 'FilmPedia',
  coverImage: 'assets/imgs/projects/filmpedia/FilmPedia1.png',
  developmentDate: '12/03/2023 ~ 17/06/2023',
  description: 'Developed in <b>Angular (HTML, BOOTSTRAP, Typescript)</b> and accessing <b>azure</b>.\n\n' +
    '<b>Movie page</b> which through an <b>API</b> brings a catalog of movies with all their information.\n\n'+
    'You can see basic information about their production and a synopsis, in addition to their cast.\n',
    outcome: 'Interesting design and functionality.',
  imageUrls: [
    'assets/imgs/projects/filmpedia/FilmPedia1.png',
    'assets/imgs/projects/filmpedia/FilmPedia2.png',
    'assets/imgs/projects/filmpedia/FilmPedia3.png',
    'assets/imgs/projects/filmpedia/FilmPedia4.png',
    'assets/imgs/projects/filmpedia/FilmPedia5.png',
    'assets/imgs/projects/filmpedia/FilmPedia6.png',

  ],
  links: [
    { title: 'Site', link: 'https://filmpedia.netlify.app/home' },
    // { title: '', link: '' },
  ],
  tags: [ProjectTagsEnum.WEB, ],
  techs: [TechEnum.ANGULAR,TechEnum.NODE, TechEnum.HTML, TechEnum.CSS,],
  orientation: OrientationEnum.HORIZONTAL,
};
