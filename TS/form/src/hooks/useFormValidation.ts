import { handleError } from "../functions/handleError";
import { LoginData } from "../types/LoginData";
export const useFormValidation = () => {
  const handleSendData = (data: LoginData) => {
    const error = handleError(data);
    if (Object.keys(error).length > 0) {
      return { error };
    }
    return { data };
  };

  return { handleSendData };
};
