import { useState } from "react";
import Classes from "./AuthenticationHeader.module.css";
import { API_KEYS_LOCAL_STORAGE_KEY } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { selectApiKeys, setActionApiKeys, TApiKeys } from "../../store/authSlice";

export const AuthenticationHeader = () => {
  const storedApiKeys = useSelector(selectApiKeys);

  const [apiKeys, setApiKeys] = useState<TApiKeys>(
    storedApiKeys || {
      newsApiOrg: "",
      guardianNews: "",
      nyTimes: "",
    }
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKeys((prev: TApiKeys) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const dispatch = useDispatch();
  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    localStorage.setItem(API_KEYS_LOCAL_STORAGE_KEY, JSON.stringify(apiKeys));
    dispatch(setActionApiKeys({ apiKeys }));
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
