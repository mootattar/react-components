import { isEmailValid } from "./isEmailValid";
import { Errors } from "../types/LoginTypes";
export const handleError: (data: Errors) => Errors = ({
  name,
  email,
  password,
  confirmPassword,
}) => {
  const error: Errors = {};

  if (!name?.trim()) {
    error.name = "Name is required";
  }
  if (!email?.trim()) {
    error.email = "Email is required";
  }
  if (!password?.trim()) {
    error.password = "Password is required";
  }
  if (password !== confirmPassword) {
    error.confirmPassword = "Passwords do not match";
  }
  if (!confirmPassword?.trim()) {
    error.confirmPassword = "Confirm Password is required";
  }
  if (email && !isEmailValid(email)) {
    error.email = "Email is not valid";
  }

  return error;
};
