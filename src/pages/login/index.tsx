import "./style.css";
import BackgroundImg from "../../components/background";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { users } = useContext(Context);
  console.log("users log", users);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Email or username cannot be blank");
      return;
    }

    if (!password.trim()) {
      alert("Password cannot be blank");
      return;
    }

    const isMatch = users.find(
      (user) => user.email === email.trim() && user.password === password.trim()
    );

    if (!isMatch) {
      alert("Email or password is wrong");
      return;
    }

    alert("Login succesfully");
    navigate("/");
  };
  return (
    <>
      <BackgroundImg />
      <div className="container">
        <div className="form-group">
          <label>Email/Username</label> <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter Email/Username...."
          />
        </div>
        <div className="form-group">
          <label>Password</label> <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter Password..."
          />
        </div>
        <a href="#">Forgot Password?</a> <br />
        <button type="submit" onClick={handleLogin}>
          Log In
        </button>
        <button onClick={() => navigate("/register")}>Create Account</button>
      </div>
    </>
  );
}
