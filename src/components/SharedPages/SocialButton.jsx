import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialButton = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/signIn";

  const GoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setSuccess("Logged in with google");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        const error = e.message;
        console.log(error);
        setError(error);
      });
  };

  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="divider">OR</div>
      <p className="text-red-700 text-lg text-center mb-2">{error}</p>
      <p className="text-green-500 text-lg text-center mb-2">{success}</p>
      <div className="grid h-14 card rounded-box place-items-center bg-orange-100 hover:bg-orange-300 duration-500">
        <img
          onClick={GoogleSignIn}
          src="/google (1).png"
          className="w-8 h-8  cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialButton;
