import { handleError } from "../functions/handleError";
export const useFormValidation = () => {
  const handleSendData = (data) => {
    const error = handleError(data);
    if (Object.keys(error).length > 0) {
      return { error };
    }
    return { data };
  };

  return { handleSendData };
};
