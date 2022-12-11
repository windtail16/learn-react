import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase-config";


export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const postsCollectionRef = collection(db, "Post");
  	// 비동기로 데이터 받을준비
    const getPosts = async () => {
     // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(postsCollectionRef);

      setPosts(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
    }

    getPosts();
  },[]);

  const showPosts = posts.map((value)=> (<div key={value.id}>
    <h3>Title: {value.title}</h3> 
    <p>category: {value.category}</p>
  </div>))


  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center col-md-3 mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fs-4">Windtail`s Blog</span>
        </a>
        <div className="col-md-5 text-end">
          test
        </div>
      </header>
      <h1>Blog</h1>
      {showPosts}
      <div>
        <button className="btn btn-primary">Write</button>
      </div>
    </div>
  );
}