

export interface PostBook {
  title: string;
  id: string;
  description: string;
}


export interface GetBook {
  title: string;
  id: string;
  description: string;
  created_at: string; // Assuming created_at is a string representing the timestamp
}


export interface PostAuthor {
  first_name: string;
  last_name: string;
  about: string;
  email: string;
}


export interface GetAuthor {
  id: string;
  first_name: string;
  last_name: string;
  about: string;
  email: string;
}


export interface TabsInterface {
   tabName:string;
   tabIndex:number;
   tabClass:string;
   activate:boolean;
}
