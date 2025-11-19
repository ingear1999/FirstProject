import { useNavigate } from "react-router-dom";
import "./Style/LoginDesign.css";

function Login() {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const id = e.target.id.value;
    const pass = e.target.pass.value;

    console.log("Login data:", { id, pass });

    navigate("/MainPage");
  };

  return (
    <div className="login-card">
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <input type="text" name="id" id="id" placeholder="Enter your ID" required />
        <input type="password" name="pass" id="pass" placeholder="Enter your password" required />
        <div className="button-group">
          <button type="submit">Login</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
