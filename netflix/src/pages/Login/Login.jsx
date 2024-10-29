import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/logo.png";
import { login, signUp } from "../../firebase";
import { useNavigate } from "react-router-dom";
import netflix_spinner from "../../assets/netflix_spinner.gif";

function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
      setEmail("");
      setPassword("");
      navigate("/");
    } else {
      await signUp(name, email, password);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    }
    setLoading(false);
  };

  return loading ? (
    <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} alt="" className="login-logo"></img>
      <div className="login-form">
        <h1>{signState}</h1>
        <div>
          {signState === "Sign In" ? (
            <></>
          ) : (
            <>
              <label htmlFor="user-name">Name</label>
              <input
                id="user-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />
            </>
          )}
          <label htmlFor="user-email">Email</label>
          <input
            id="user-email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <label htmlFor="user-password">Password</label>
          <input
            id="user-password"
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
        </div>
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
