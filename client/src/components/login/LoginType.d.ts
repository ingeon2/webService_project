export interface LoginTypes {
   username: string;
   password: string;
}

interface SocialNum {
   RRNConfirm: string;
}

export interface FindPasswordType {
   [key: string]: string;
   email: string;
   question: string;
   answer: string;
}
