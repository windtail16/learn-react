import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

export default function Signin() {
  const [loginEmail, setLoginEmail] = useState(""); // 코드 추가
  const [loginPassword, setLoginPassword] = useState(""); // 코드 추가

  const login = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      alert(user.user.displayName + '님 환영합니다.');
      window.location.href = "/Blog";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <h5 className="card-title">Sign in</h5>
          <h6 className="card-subtitle mb-2 text-muted">가입한 이메일과 패스워드를 입력해 주세요.</h6>
          <form onSubmit={login}>
            <div className="form-group mb-2">
            <label htmlFor="email1">Email address</label>
              <input type="email" className="form-control"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setLoginEmail(e.target.value);
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
                  setLoginPassword(e.target.value);
                }}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Signin</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}