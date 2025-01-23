import { useState } from "react";
import Classes from "./AuthenticationHeader.module.css";
import { API_KEYS_LOCAL_STORAGE_KEY, TApiKeys } from "../../utils/useGetApiKeys";

export const AuthenticationHeader = ({
  setStoredApiKeys,
  storedApiKeys
}: {
  setStoredApiKeys: React.Dispatch<React.SetStateAction<TApiKeys | undefined>>;
  storedApiKeys: TApiKeys;
}) => {
  const [apiKeys, setApiKeys] = useState<TApiKeys>(
    storedApiKeys || {
      newsApiOrg: "",
      guardianNews: "",
    }
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKeys((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    localStorage.setItem(API_KEYS_LOCAL_STORAGE_KEY, JSON.stringify(apiKeys));
    setStoredApiKeys(apiKeys);
  };

  return (
    <div className={Classes.authentication_header}>
      <div>Please paste in Auth keys in below field</div>
      <form className={Classes.keys_container}>
        <div>
          <div className={Classes.keys_repeater}>
            <div className={Classes.keys}>
              <label>Newapi.org</label>
              <input
                onChange={onChange}
                name="newsApiOrg"
                id="newsApiOrg"
                type="text"
                value={apiKeys.newsApiOrg}
              ></input>
            </div>
            <div className={Classes.keys}>
              <label>The Gaurdian</label>
              <input
                onChange={onChange}
                name="guardianNews"
                id="guardianNews"
                type="text"
                value={apiKeys.guardianNews}
              ></input>
            </div>
            <div className={Classes.keys}>
              <label>3rd one</label>
              <input type="text"></input>
            </div>
          </div>
        </div>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};
