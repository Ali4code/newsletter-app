import { useState } from "react";
import { TPreferences } from "./Preferences.types";
import Classes from "./Preferences.module.css";

export const Preferences = () => {
  const [preferences, setPreferences] = useState<TPreferences>({});

  return <div className={Classes.preferences}></div>;
};
