import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const {
    user,
    loginWithRedirect,
    logout,
    loginWithPopup,
    isAuthenticated,
    isLoading,
  } = useAuth0();
  console.log("currentUser", user);

  return (
    <div className="container">
        {isAuthenticated && <h3 className="text-white">{user.name}</h3>}
      {isAuthenticated ? (
        <button className="text-white" onClick={() => logout()}>
          Logout
        </button>
      ) : (
        <button className="text-white" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      )}
    </div>
  );
};

export default LoginButton;
