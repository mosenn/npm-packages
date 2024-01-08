import { useState } from "react";

const Toggel = () => {
  const [active, setActive] = useState(false);
  const activeDarkMode = () => {
    setActive(!active);
  };
  const styleOption = {
    backgroundColor: "rgb(55, 55, 55)",
    color: "rgb(217, 222, 226)",
  };
  const darkMode = {
    isDark: active,
    activeDarkMode: activeDarkMode,
    styleOption: styleOption,
  };
  return darkMode;
};

export default Toggel;
