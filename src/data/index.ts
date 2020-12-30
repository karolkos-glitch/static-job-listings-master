export interface JOB {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: Role,
  level: Level,
  contract: string,
  postedAt: string,
  location: string,
  languages: Languages[],
  tools: Tools[],
}

export enum Role {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  FULLSTACK = "Fullstack"
}

export enum Level {
  JUNIOR = "Junior",
  MID = "Midweight",
  SENIOR = "Senior"
}

export enum Languages {
  PYTHON = "Python",
  RUBY = "Ruby",
  JS = "JavaScript",
  HTML = "HTML",
  CSS = "css"
}

export enum Tools {
  REACT = "React",
  SASS = "Sass",
  VUE = "Vue",
  DJANGO = "Django",
  RoR = "Ror"
}