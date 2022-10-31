
import React, { useState } from "react";
import {
    onAuthStateChanged, // 코드 추가
    signOut, // 코드추가
} from "firebase/auth";
import { auth } from "../firebase-config";


export default function Blog() {

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async () => {
    await signOut(auth);
    alert('로그아웃 되었습니다.');
    window.location.href = "/";
  };

  const [user, setUser] = useState({}); // 코드 추가

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center col-md-3 mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fs-4">Windtail`s Blog</span>
        </a>
        <div className="col-md-5 text-end">
          <span className="me-2">{user?.email}</span>
          <button type="button" className="btn btn-outline-primary" onClick={logout}>Sign out</button>
        </div>
      </header>
      <h1>Blog</h1>
      
      
    </div>
  );
}