import "./style.css";
import BackgroundImg from "../../components/background";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { users, setUsers } = useContext(Context);
  console.log("users >>>", users);

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Email or username cannot be blank");
      return;
    }

    const isExist = users.find((user) => user.email == email.trim());
    if (isExist) {
      alert("Email or username already exists");
      return;
    }

    if (!password.trim()) {
      alert("Password cannot be blank");
      return;
    }

    if (!confirmPassword.trim()) {
      alert("Confirm password cannot be blank");
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      alert("Confirm password doesn't match password");
      return;
    }

    // Once validated, create new account
    let newUsers = [
      ...users,
      { email: email.trim(), password: password.trim() }
    ];
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
    alert("New account has been created");
  };

  return (
    <>
      <BackgroundImg />
      <div className="container">
        <form action="/action_page.php">
          <h1>Register Here</h1>

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
            <br />
            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />
          </div>

          <button type="submit" onClick={handleCreateAccount}>
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}
