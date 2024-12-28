import { isEmailValid } from "./isEmailValid";
import { LoginData } from "../types/LoginData";

export const handleError: (data: LoginData) => LoginData = ({
  name,
  email,
  password,
  confirmPassword,
}) => {
  const error: LoginData = {};

  if (!name?.trim()) {
    error.name = "Name is required";
  }
  if (!email?.trim()) {
    error.email = "Email is required";
  }
  if (!password?.trim()) {
    error.password = "Password is required";
  }
  if (!confirmPassword?.trim()) {
    error.confirmPassword = "Confirm Password is required";
  }
  if (password !== confirmPassword) {
    error.confirmPassword = "Password and Confirm Password do not match";
  }
  if (email && !isEmailValid(email)) {
    error.email = "Email is not valid";
  }

  return error;
};
