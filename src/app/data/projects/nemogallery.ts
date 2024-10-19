import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectTagsEnum } from '../../models/enums/project-tags.enum';
import { TechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

export const nemogallery: ProjectInterface = {
  isActive: true,
  id: 'nemogallery',
  name: 'Nemo Gallery',
  coverImage: 'assets/imgs/projects/nemogallery/nemogallery01.png',
  developmentDate: '15/10/2024 ~ 19/10/2024',
  description: "<b>A gallery designed to showcase photos of Nemo and serve as a sample project.</b>\n\n" +
  'Developed in <b>Astro, HTML, Css and Javascript)</b></b>.\n\n',
    outcome: 'An interactive and responsive gallery was created, complete with a contact form.',
  imageUrls: [
    'assets/imgs/projects/nemogallery/nemogallery01.png',
    'assets/imgs/projects/nemogallery/nemogallery02.png',
  ],
  links: [
    { title: 'Site', link: 'https://nemo-gallery.vercel.app/' },
    // { title: '', link: 'https://nemo-gallery.vercel.app/' },
  ],
  tags: [ProjectTagsEnum.WEB, ],
  techs: [TechEnum.Astro,TechEnum.NODE, TechEnum.HTML, TechEnum.CSS, TechEnum.JAVASCRIPT,],
  orientation: OrientationEnum.HORIZONTAL,
};
