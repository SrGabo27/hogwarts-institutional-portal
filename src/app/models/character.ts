import { Wand } from './wand';

export interface Character {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  ancestry: string;
  hairColour: string;
  eyeColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alive: boolean;
  image: string;
}
