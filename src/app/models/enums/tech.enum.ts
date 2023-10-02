export enum TechEnum {
  ANGULAR = 1,
  NODE = 2,
  JAVASCRIPT = 3,
  REACT = 5,
  HTML = 4,
  CSS = 6,
  // UNITY = 7,
}

export const formattedTechEnum: Record<TechEnum, string> = {
  [TechEnum.ANGULAR]: 'Angular',
  [TechEnum.NODE]: 'Node',
  [TechEnum.JAVASCRIPT]: 'Javascript',
  [TechEnum.REACT]: 'React',
  [TechEnum.HTML]: 'Html',
  [TechEnum.CSS]: 'CSS',
  // [TechEnum.UNITY]: 'Unity',
}
