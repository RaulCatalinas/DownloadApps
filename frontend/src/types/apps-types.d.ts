export interface Apps {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  name: string;
  description: string;
  locale: string;
  logo: Logo;
  executable: Executable;
  categories: Categories;
}

export interface Categories {
  data: CategoriesDatum[];
}

export interface CategoriesDatum {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
}

export interface Executable {
  data: ExecutableDatum[];
}

export interface ExecutableDatum {
  id: number;
  attributes: TentacledAttributes;
}
export interface TentacledAttributes {
  url: string;
}

export interface Logo {
  data: Data;
}

export interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  url: string;
  alternativeText: string;
}
