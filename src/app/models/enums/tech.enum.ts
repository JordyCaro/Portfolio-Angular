export enum TechEnum {
  ANGULAR = 4,
  NODE = 5,
  JAVASCRIPT = 3,
  REACT = 6,
  HTML = 1,
  CSS = 2,
  Astro = 7,
}

export const formattedTechEnum: Record<TechEnum, string> = {
  [TechEnum.ANGULAR]: 'Angular',
  [TechEnum.NODE]: 'Node',
  [TechEnum.JAVASCRIPT]: 'Javascript',
  [TechEnum.REACT]: 'React',
  [TechEnum.HTML]: 'Html',
  [TechEnum.CSS]: 'CSS',
  [TechEnum.Astro]: 'Astro',

}
