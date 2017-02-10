export interface Article {
  id:number;
  title:string;
  categories?: Array<string>;
  img?:string;
  description?:string;
  body?:string;
  date?: Date;
  active?: boolean;
}
