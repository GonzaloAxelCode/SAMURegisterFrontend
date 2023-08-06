import { useState } from "react";
import LoginBox from "./LoginBox";
import RegisterBox from "./RegisterBox";

const AuthPage = () => {
  const [boxShow, setBoxShow] = useState("login");
  const changeBox = (boxname: string) => {
    setBoxShow(boxname);
  };
  return (
    <div>
      <LoginBox show={boxShow === "login"} changeBox={changeBox} />
      <RegisterBox show={boxShow === "register"} changeBox={changeBox} />
    </div>
  );
};

export default AuthPage;
