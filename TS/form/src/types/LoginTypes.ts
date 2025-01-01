export interface LoginData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}
