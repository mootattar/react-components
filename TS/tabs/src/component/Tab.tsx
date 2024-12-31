import { useState } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { handleChange } from "../utils/functions/changeTab";
import Home from "../pages/Home";
import About from "../pages/About";
export default function Tab() {
  const [tab, setTab] = useState<"home" | "about" | "login" | "register">(
    "login"
  );
  const registerButtonsClasses =
    "border-none p-1 text-white w-1/2 transition-all ease-in duration-100 ";
  return (
    <div className="flex flex-col items-center w-screen h-screen p-8 ">
      <div className="flex flex-col items-center w-1/2 h-auto p-8 border-2 border-black rounded-xl ">
        <div className="flex w-full">
          <button
            onClick={() => handleChange(setTab, "home")}
            className={`rounded-tl-xl rounded-bl-xl ${registerButtonsClasses}${
              tab === "home" ? "bg-blue-500" : "bg-slate-500"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleChange(setTab, "about")}
            className={`${registerButtonsClasses}${
              tab === "about" ? "bg-blue-500" : "bg-slate-500"
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleChange(setTab, "login")}
            className={`${registerButtonsClasses}${
              tab === "login" ? "bg-blue-500" : "bg-slate-500"
            }`}
          >
            Login
          </button>
          <button
            className={`rounded-tr-xl rounded-br-xl ${registerButtonsClasses}${
              tab === "register" ? "bg-blue-500" : "bg-slate-500"
            }`}
            onClick={() => handleChange(setTab, "register")}
          >
            Register
          </button>
        </div>
        {tab === "login" && <Login />}
        {tab === "register" && <Register />}
        {tab === "home" && <Home />}
        {tab === "about" && <About />}
      </div>
    </div>
  );
}
