import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

export default function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user.user.email);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={register}>
        <h1>SIgn up</h1>
        <div className="form-group">
          <label htmlFor="email1">Email address</label>
          <input className="form-control"
            id="email1"
            placeholder="Email"
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control"
            id="password"
            placeholder="Password"
            autoComplete="on"
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      
    </div>
  );
}