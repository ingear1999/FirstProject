import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const pass = e.target.pass.value;

    // For now, allow any login
    console.log({ id, pass });

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <input type="text" name="id" placeholder="ID" required />
        <input type="password" name="pass" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
