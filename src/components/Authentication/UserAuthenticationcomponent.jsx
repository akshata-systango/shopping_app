import { useState } from "react";
import "./style/userAuthForm.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const UserAuthentication = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [loginDetail, setLoginDetail] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    event.persist();
    const {name, value} = event.target;
    setLoginDetail({...loginDetail, [name]: value});
  }
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
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
        email: loginDetail.email,
        password: loginDetail.password,
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
        <p className="h5 text-center mb-4" role="paragraph">
          {isLogin ? "Login" : "Sign Up"}
        </p>

        <form onSubmit={submitHandler}>
          <div className="grey-text">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
              <FormControl
                type="email"
                name="email"
                value={loginDetail.email || ''}
                placeholder="enter email"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
            </InputGroup>

            <div>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                <FormControl
                  type="password"
                  name="password"
                  placeholder="enter password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={loginDetail.password || ''}
                  onChange={handleChange}
                />
              </InputGroup>
            </div>
          </div>
          <div className="text-center">
            {!isLoading && (
              <Button variant="outline-danger" className="buttonss">
                {isLogin ? "Login" : "Create Account"}
              </Button>
            )}
            {isLoading && <p>Sending request...</p>}
            <Button
              variant="outline-danger"
              className="buttonss"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserAuthentication;
