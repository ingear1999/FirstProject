import './SignupDesign.css'

function Signup() {
  const handleSignupSubmit = (e) => {
    e.preventDefault(); // fixed typo

    const data = {
      id: e.target.id.value,
      pass: e.target.pass.value, // fixed value
      name: e.target.name.value,
      email: e.target.email.value,
    };

    console.log(data);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignupSubmit}>
        <ul>
          <li>
            <label htmlFor="id">ID</label>
            <input type="text" name="id" id="id" required placeholder="Enter your ID" />
          </li>

          <li>
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" required placeholder="Enter your password" />
          </li>

          <li>
            <label htmlFor="repass">Re Enter Password</label>
            <input type="password" name="repass" id="repass" required placeholder="Enter your password" />
          </li>

          <li>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required placeholder="Enter your name" />
          </li>

          <li>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required placeholder="Enter your email" />
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
