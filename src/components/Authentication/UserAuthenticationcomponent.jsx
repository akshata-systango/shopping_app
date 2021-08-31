import { useState, useRef } from "react";
import "./style/userAuthForm.css";



const UserAuthentication = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div className="authform">
        <p className="h5 text-center mb-4">{isLogin ? "Login" : "Sign Up"}</p>

        <form onSubmit={submitHandler}>
          <div className="grey-text">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                ref={emailInputRef}

              />
            </div>
            <div>
            <label htmlFor="password">Password</label>
              <input
                type="password"
                ref={passwordInputRef}
              
              />
            </div>
          </div>
          <div className="text-center">
            {!isLoading && (
              <button variant="outline-danger" className="buttonss">
                {isLogin ? "Login" : "Create Account"}
              </button>
            )}
            {isLoading && <p>Sending request...</p>}
            <button
              variant="outline-danger"
              className="buttonss"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};



export default UserAuthentication;
