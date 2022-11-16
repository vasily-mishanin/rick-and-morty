export interface ICard {
  id: string;
  name: string;
  description: string;
  image: string;
  aphelion: string;
  perihelion: string;
  equatorialRadius: string;
  circumference: string;
  surfaceArea: string;
}

export interface ITaskCard {
  id: string;
  taskName: string;
  assignee: string;
  assignDate: string;
  deadlineDate: string;
  description: string;
  taskState: string;
  optionDevelopment?: string;
  optionManagement?: string;
  optionCollaborative?: string;
  taskSyncronization: string;
  taskImage?: string;
}

export interface RickAndMortyCharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface GeneralInfo {
  count: string;
  next: string;
  pages: number;
  prev: string | null;
}

export interface RickAndMortyCharacters {
  info: GeneralInfo;
  results: Array<RickAndMortyCharacter>;
  error?: string;
}
