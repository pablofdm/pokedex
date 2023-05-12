import { ComentaryModel } from "./cometary.mode";

export class Pokemon {
    public name: string;
    public id: number;
    public types = [];
    public stats = [];
    public isFavorite!: boolean ;
    public coments?: Array<ComentaryModel>;
  
    constructor() {}
  } 