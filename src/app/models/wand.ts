export interface Wand {
	wood: string;
	core: string;
	length: number;
}

export class Wand implements Wand {
	constructor(
		public wood: string,
		public core: string,
		public length: number
	) { }
}
