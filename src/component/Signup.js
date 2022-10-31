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

      console.log(user);
      alert('가입을 환영합니다.');

      window.location.href = "/Blog";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <h5 className="card-title">Sign up</h5>
          <h6 className="card-subtitle mb-2 text-muted">이메일과 패스워드를 입력해 주세요.</h6>
          <form onSubmit={register}>
            <div className="form-group mb-2">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group mb-3">
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
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Signup</button>
            </div>
          </form>
        </div>
        
      </div>
      

      
    </div>
  );
}