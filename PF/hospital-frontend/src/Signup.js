import './SignupDesign.css';

function Signup() {
  const handleSignupSubmit = (e) => {
    e.preventDefault(); // stop page reload

    const data = {
      id: e.target.id.value,
      pass: e.target.pass.value,
      name: e.target.name.value,
      email: e.target.email.value,
    };

    console.log("Signup data:", data);

    // Send data to Spring Boot
    fetch('http://localhost:8080/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        alert(res.message); // show success or error message
      })
      .catch((err) => {
        console.error(err);
        alert("Signup failed");
      });
  };

  return (
    <div>
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
