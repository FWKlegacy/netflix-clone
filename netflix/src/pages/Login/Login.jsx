import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/logo.png";
import { login, signUp } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const user_auth = async (e) => {
    e.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
      setEmail("");
      setPassword("");
      navigate("/");
    } else {
      await signUp(name, email, password);
      setEmail("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo"></img>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign In" ? (
            <></>
          ) : (
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
          <button type="submit" onClick={user_auth}>
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an Account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
