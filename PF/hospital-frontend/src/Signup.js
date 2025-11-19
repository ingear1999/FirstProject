import { useNavigate } from "react-router-dom";
import "./Style/SignupDesign.css";

function Signup() {
  const navigate = useNavigate();
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    navigate("/MainPage");

    const data = {
      id: e.target.id.value,
      pass: e.target.pass.value,
      name: e.target.name.value,
      email: e.target.email.value,
      
    };

    console.log("Signup data:", data);

    fetch("http://localhost:8080/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result.message || "Signup successful!");
      })
      .catch((err) => {
        console.error(err);
        alert("Signup failed");
      });
  };

  return (
    <div className="signup-card">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignupSubmit}>
        <ul>
          <li>
            <label htmlFor="id">ID</label>
            <input type="text" name="id" id="id" required />
          </li>
          <li>
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" required />
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </li>
          <li className="button-group">
            <button type="submit">Sign Up</button>
            <button type="reset">Cancel</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Signup;
