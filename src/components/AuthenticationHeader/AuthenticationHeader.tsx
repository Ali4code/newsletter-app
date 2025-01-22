import Classes from "./AuthenticationHeader.module.css";

export const AuthenticationHeader = () => {
  return (
    <div>
      <h2>Api Keys</h2>
      <div>Please paste in Auth keys in below field</div>
      <div className={Classes.keys_container}>
        <div>
          <p>Newapi.org</p>
          <input type="text"></input>
          <p>Newapi.org</p>
          <input type="text"></input>
          <p>Newapi.org</p>
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
};
