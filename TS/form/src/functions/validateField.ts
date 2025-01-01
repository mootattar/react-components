import { Errors, LoginData } from "../types/LoginTypes";
import { isEmailValid } from "./isEmailValid";
export const validateField = (
  name: string,
  value: string,
  data: LoginData,
  setErrors: React.Dispatch<React.SetStateAction<Errors>>
) => {
  let errorMessage = "";

  switch (name) {
    case "name":
      if (value.trim()) errorMessage = "";
      break;
    case "email":
      if ((value && !isEmailValid(value)) || !value)
        errorMessage = "ex@mail.com";
      break;
    case "password":
      if (value.trim().length < 4) errorMessage = "at least 4 characters";
      break;
    case "confirmPassword":
      if (value !== data.password) errorMessage = "Passwords do not match";
      break;
    default:
      break;
  }

  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: errorMessage,
  }));
};
