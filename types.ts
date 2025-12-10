export interface UserData {
  fullName: string;
  cpf: string;
  phone: string;
  email: string;
}

export enum Step {
  LANDING = 'LANDING',
  EDUCATION = 'EDUCATION',
  FLYER = 'FLYER',
}