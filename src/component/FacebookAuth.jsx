import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";

const FacebookAuth = () => {
  const responseFacebook = async (response) => {
    console.log("Facebook response:", response);

    if (!response.accessToken) {
      alert("Facebook login failed");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/facebook-login",
        {
          accessToken: response.accessToken,
        }
      );

      console.log("Backend response:", res.data);

      // Save tokens
      localStorage.setItem("accessToken", res.data.data.accessToken);
      localStorage.setItem("refreshToken", res.data.data.refreshToken);

      alert("Login successful 🎉");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Backend login failed");
    }
  };

  return (
    <FacebookLogin
      appId="YOUR_FACEBOOK_APP_ID"
      fields="name,email"
      callback={responseFacebook}
      render={(renderProps) => (
        <button onClick={renderProps.onClick}>
          Login with Facebook
        </button>
      )}
    />
  );
};

export default FacebookAuth;
