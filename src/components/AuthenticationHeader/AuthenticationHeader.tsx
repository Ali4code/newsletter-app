import { useState } from "react";
import Classes from "./AuthenticationHeader.module.css";

export const AuthenticationHeader = () => {
  const [apiKeys, setApiKeys] = useState({
    newsApiOrg: "",
    guardianNews: "",
  });
  return (
    <div>
      <h2>Api Keys</h2>
      <div>Please paste in Auth keys in below field</div>
      <div className={Classes.keys_container}>
        <div>
          <div>
            <label>Newapi.org</label>
            <input name="newsApiOrg" id="newsApiOrg" type="text"></input>
          </div>
          <div>
            <label>Gaurdian</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Newalabeli.org</label>
            <input type="text"></input>
          </div>
        </div>
      </div>
    </div>
  );
};
