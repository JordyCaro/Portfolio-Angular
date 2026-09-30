export interface SkillInterface {
  name: string;
  level: number;
}

export interface SkillGroupInterface {
  title: string;
  skills: SkillInterface[];
}

export const skillGroups: SkillGroupInterface[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Angular', level: 95 },
      { name: 'Typescript', level: 90 },
      { name: 'Javascript', level: 90 },
      { name: 'React', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'NodeJs', level: 80 },
      { name: 'PHP', level: 70 },
      { name: 'Java', level: 65 },
      { name: 'Spring Boot', level: 60 },
      { name: '.Net', level: 55 },
    ],
  },
  {
    title: 'Data & Cloud',
    skills: [
      { name: 'Mysql', level: 75 },
      { name: 'Postgress', level: 70 },
      { name: 'Azure', level: 55 },
      { name: 'Aws', level: 50 },
    ],
  },
  {
    title: 'Automation & AI',
    skills: [
      { name: 'N8N', level: 80 },
      { name: 'Python', level: 65 },
    ],
  },
];
