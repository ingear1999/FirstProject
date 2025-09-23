import { useNavigate } from "react-router-dom";
import './LoginDesign.css';

function Login() {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const id = e.target.id.value;
    const pass = e.target.pass.value;

    // For now, just log values (later connect with Spring Boot backend)
    console.log("Login data:", { id, pass });

    // Redirect to dashboard after login
    navigate("/dashboard");
  };

  return (
    <div>
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
