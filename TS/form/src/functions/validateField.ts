import { LoginData } from "../types/LoginData";
export const validateField = (
  name: string,
  value: string,
  setErrors: React.Dispatch<React.SetStateAction<LoginData>>
) => {
  let errorMessage = "";

  switch (name) {
    case "name":
      if (value) errorMessage = "";
      break;
    case "email":
      if (value) errorMessage = "";
      break;
    case "password":
      if (value) errorMessage = "";
      break;
    case "confirmPassword":
      if (value) errorMessage = "";
      break;
    default:
      break;
  }

  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: errorMessage,
  }));
};
