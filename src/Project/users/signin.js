import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Project/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <input class="form-control w-25" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input  class="form-control w-25" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button onClick={signin} className="btn btn-primary">
        Sign In
      </button>
    </div>
  );
}
export default Signin;