import { useState } from "react";
import Classes from "./AuthenticationHeader.module.css";
import { TApiKeys } from "../../utils/useGetApiKeys";
import { API_KEYS_LOCAL_STORAGE_KEY } from "../../constants";

export const AuthenticationHeader = ({
  setStoredApiKeys,
  storedApiKeys,
}: {
  setStoredApiKeys: React.Dispatch<React.SetStateAction<TApiKeys | undefined>>;
  storedApiKeys: TApiKeys;
}) => {
  const [apiKeys, setApiKeys] = useState<TApiKeys>(
    storedApiKeys || {
      newsApiOrg: "",
      guardianNews: "",
      nyTimes: "",
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
              <label htmlFor="newsApiOrg">Newapi.org</label>
              <input
                onChange={onChange}
                name="newsApiOrg"
                id="newsApiOrg"
                type="text"
                value={apiKeys.newsApiOrg ?? ""}
              ></input>
            </div>
            <div className={Classes.keys}>
              <label htmlFor="guardianNews">The Guardian</label>
              <input
                onChange={onChange}
                name="guardianNews"
                id="guardianNews"
                type="text"
                value={apiKeys.guardianNews ?? ""}
              ></input>
            </div>
            <div className={Classes.keys}>
              <label htmlFor="nyTimes">New York Times</label>
              <input
                onChange={onChange}
                name="nyTimes"
                id="nyTimes"
                type="text"
                value={apiKeys.nyTimes ?? ""}
              ></input>
            </div>
          </div>
        </div>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};
