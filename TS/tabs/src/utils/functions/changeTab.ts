import React from "react";

export const handleChange = (
  setTab: React.Dispatch<
    React.SetStateAction<"home" | "about" | "login" | "register">
  >,
  tab: "home" | "about" | "login" | "register"
) => {
  return setTab(tab);
};
