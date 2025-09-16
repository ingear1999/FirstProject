import './SignupDesign.css'
function Login(){

    const handleSubmit = (e)=>{  //(e) → This represents the event that happens. In this case, it’s the form submission event.
        e.preventDefualt(); // stop page from reloading
        const data ={
            id: e.target.id.value, // get value from input with id="id"
            pass: e.target.pass,   // get value from input with id="pass"
        };

        console.log(data); // just check what we got

    };
    return(
    <div>
            <h1>Login</h1>
        <form onSubmit={handleSubmit}>

            <ul>
                <li>
                    <label>ID</label>
                    <input type="text" name="id"/>
                </li>
                <li>
                    <label>Pass</label>
                    <input type="password" name="pass"/>
                </li>
                <li>
                    <button type="submit">Login</button>
                    <button type="reset">Cancel</button>
                </li>
            </ul>
        </form>
    </div>
    )
   
}
export default Login;