import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">
            Social helps you connect and share with the people in your life.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              className="loginInput"
              placeholder="Email adress or phone number"
            />
            <input className="loginInput" placeholder="Password" />
            <button className="loginButton" type="submit">
              Login
            </button>
            <span className="loginForgot">Forgotten Password?</span>
            <hr />
            <button className="loginRegisterButton">Create new account</button>
          </div>
          <span className="page_msg">
            <span className="boldText">Create a Page</span> for a celebrity,
            brand or business.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
