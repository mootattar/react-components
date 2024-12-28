import { useEffect, useRef, useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";
import { LoginData } from "../types/LoginData";
import { validateField } from "../functions/validateField";
export default function Form() {
  const { handleSendData } = useFormValidation();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<LoginData>({});
  const [errors, setErrors] = useState<LoginData>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fomrData = handleSendData(data);
    if (fomrData.error) {
      setErrors(fomrData.error);
      if (fomrData.error.confirmPassword) confirmPasswordRef.current?.focus();
      if (fomrData.error.password) passwordRef.current?.focus();
      if (fomrData.error.email) emailRef.current?.focus();
      if (fomrData.error.name) nameRef.current?.focus();
    } else {
      if (errors) setErrors({});
      setData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert("Form submitted successfully 🎉");
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.RefObject<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef?.current?.focus();
    }
  };

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  return (
    <div className="container p-4 flex flex-col gap-4 items-center justify-center bg-gray-900 h-screen w-screen">
      <h1 className="text-2xl font-bold text-gray-50">Form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border-gray-50 border-2 p-8 rounded-lg text-white"
      >
        <div className="relative">
          <input
            type="text"
            placeholder=""
            ref={nameRef}
            id="name"
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
              validateField("name", e.target.value, setErrors);
            }}
            onKeyDown={(e) => handleKeyDown(e, emailRef)}
            className="border-b border-gray-300 py-1 rounded-sm focus:border-b-2 focus:border-blue-500 transition-colors focus:outline-none peer bg-inherit"
          />
          {errors.name ? (
            <label
              className="absolute text-red-500 -top-4 text-xs left-0 cursor-text
            peer-focus:text-xs peer-focus:-top-4 peer-placeholder-shown:top-1
            peer-placeholder-shown:text-sm transition-all "
              htmlFor="name"
            >
              {errors.name}
            </label>
          ) : (
            <label
              className="absolute text-slate-200 -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-slate-400 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm"
              htmlFor="name"
            >
              Name
            </label>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder=""
            ref={emailRef}
            id="email"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
              validateField("email", e.target.value, setErrors);
            }}
            onKeyDown={(e) => handleKeyDown(e, passwordRef)}
            className="border-b border-gray-300 py-1 rounded-sm focus:border-b-2 focus:border-blue-500 transition-colors focus:outline-none peer bg-inherit"
          />
          {errors.email ? (
            <label
              className="absolute text-red-500 -top-4 text-xs left-0 cursor-text
            peer-focus:text-xs peer-focus:-top-4 peer-placeholder-shown:top-1
            peer-placeholder-shown:text-sm transition-all "
              htmlFor="email"
            >
              {errors.email}
            </label>
          ) : (
            <label
              htmlFor="email"
              className="absolute text-slate-200 -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-slate-400 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm"
            >
              Email
            </label>
          )}
        </div>

        <div className="relative">
          <input
            type="password"
            placeholder=""
            ref={passwordRef}
            id="password"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
              validateField("password", e.target.value, setErrors);
            }}
            onKeyDown={(e) => handleKeyDown(e, confirmPasswordRef)}
            className="border-b border-gray-300 py-1 rounded-sm focus:border-b-2 focus:border-blue-500 transition-colors focus:outline-none peer bg-inherit"
          />
          {errors.password ? (
            <label
              className="absolute text-red-500 -top-4 text-xs left-0 cursor-text
            peer-focus:text-xs peer-focus:-top-4 peer-placeholder-shown:top-1
            peer-placeholder-shown:text-sm transition-all "
              htmlFor="password"
            >
              {errors.password}
            </label>
          ) : (
            <label
              htmlFor="password"
              className="absolute text-slate-200 -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-slate-400 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm"
            >
              Password
            </label>
          )}
        </div>

        <div className="relative">
          <input
            type="password"
            placeholder=""
            ref={confirmPasswordRef}
            id="confirmPassword"
            value={data.confirmPassword}
            onChange={(e) => {
              setData({ ...data, confirmPassword: e.target.value });
              validateField("confirmPassword", e.target.value, setErrors);
            }}
            className="border-b border-gray-300 py-1 rounded-sm focus:border-b-2 focus:border-blue-500 transition-colors focus:outline-none peer bg-inherit"
          />
          {errors.confirmPassword ? (
            <label
              className="absolute text-red-500 -top-4 text-xs left-0 cursor-text
            peer-focus:text-xs peer-focus:-top-4 peer-placeholder-shown:top-1
            peer-placeholder-shown:text-sm transition-all "
              htmlFor="confirmPassword"
            >
              {errors.confirmPassword}
            </label>
          ) : (
            <label
              htmlFor="confirmPassword"
              className="absolute text-slate-200 -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-slate-400 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm"
            >
              Confirm Password
            </label>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 font-bold text-white w-full p-2 mt-3 rounded hover:bg-blue-600 hover:scale-x-105 transition-all ease-in  border-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}