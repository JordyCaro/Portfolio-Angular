export interface EducationInterface {
  title: string;
  institution: string;
  year: string;
}

export const education: EducationInterface[] = [
  {
    title: 'Systems Engineering',
    institution: 'Corporación Unificada Nacional CUN',
    year: '2024 – Currently',
  },
  {
    title: 'Systems Engineering',
    institution: 'Universidad Nacional',
    year: '2016 – 2018',
  },
];

export const certifications: EducationInterface[] = [
  {
    title: 'Programación web',
    institution: 'Universidad de Antioquia',
    year: '2023',
  },
  {
    title: 'Fundamentos profesionales del desarrollo de software',
    institution: 'Microsoft',
    year: '2023',
  },
  {
    title: 'Desarrollador Front-end',
    institution: 'Fundación Carlos Slim',
    year: '2023',
  },
  {
    title: 'Visualización de datos',
    institution: 'Universidad de Antioquia',
    year: '2023',
  },
];
