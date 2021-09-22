import { Wand } from './wand';

export interface Student {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: Date;
  yearOfBirth?: number;
  ancestry: string;
  hairColour?: string;
  eyeColour?: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff?: boolean;
  actor?: string;
  alive?: boolean;
  image: string;
}

export class Student implements Student {
  constructor(
    public name: string,
    public dateOfBirth: Date,
    public patronus: string,
    public hogwartsStudent: boolean,
    public image: string,
    public species: string,
    public gender: string,
    public house: string,
    public ancestry: string,
    public wand: Wand
  ) {}
}
