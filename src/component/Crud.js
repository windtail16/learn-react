import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";

import {auth, db} from '../firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { async } from '@firebase/util';

export default function Crud() {

  // 상태관리
  const [user, setUser] = useState({}); // 코드 추가
  const [newName, setNewName] = useState("");
  const [newSdate, setNewSdate] = useState(0);
  const [changed, setChanged] = useState(false);
  const [checkStatus, setChecked] = useState(false);
  const [memos, setmemos] = useState([]);
  
  // db의 memos 컬렉션 불러옴
  const memosCollectionRef = collection(db, "memos");
  
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async () => {
    await signOut(auth);
    alert('로그아웃 되었습니다.');
    window.location.href = "/";
  };


  //Create
  const createMemos = async () =>{
    // addDoc을 이용해서 내가 원하는 collection에 내가 원하는 key로 값을 추가한다.
    await addDoc(memosCollectionRef, {name: newName, sdate: newSdate, checked: checkStatus});
    // 화면 업데이트를 위한 state 변경
    setChanged(true)
  }

  //Read
  useEffect(()=>{
  	// 비동기로 데이터 받을준비
    const getmemos = async () => {
     // getDocs로 컬렉션의 데이터 가져오기
      const data = await getDocs(memosCollectionRef);
      // memos 객체에 가져온 data를 추가
      setmemos(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
    }

    getmemos();
    // 뭐든 동작할때마다 changed가 true값으로 변경되니까 화면을 그리고 다시 false로 돌려줘야지 다시 써먹는다.
    setChanged(false)
  },[changed]) // 처음에 한번 그리고, changed가 불릴때마다 화면을 다시 그릴거다

  

  //Update
  const updateMemo = async(id, checked) =>{
    //id로 데이터 검색
    const memoDoc = doc(db, "memos", id)

    //업데이트 할 데이터 지정
    const newField = {checked: true};
    
    // updateDoc()을 이용해서 업데이트
    await updateDoc(memoDoc, newField);
    setChanged(true)
  }


  //Delete
  const deleteMemo = async(id) =>{
    const memoDoc = doc(db, "memos", id);

    // deleteDoc을 이용해서 삭제
    await deleteDoc(memoDoc);
    setChanged(true)
  }

  // 띄워줄 데이터 key값에 고유ID를 넣어준다.
  const showmemos = memos.map((value)=> (<li className="list-group-item" key={value.id}>
    <h5>{value.name}</h5>
    <p>{value.sdate}</p>
    <button className='btn btn-danger' onClick={()=>{deleteMemo(value.id)}}>Delete</button>
  </li>))

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

      {/* onchange로 입력 값을 state로 관리 */}
      <h3>일정 입력</h3>
      <div className='row g-3 mb-3'>
        <div className="col-12 mb-1">
          <input type="text" placeholder='title' className='form-control' onChange={(event)=> {setNewName(event.target.value)}}/>
        </div>
        <div className="col-12 mb-1">
          <input type="date" placeholder='date' className='form-control' onChange={(event)=> {setNewSdate(event.target.value)}}/>
        </div>
        <div className="d-grid">
          <button className='btn-block btn btn-primary ' onClick={createMemos}>ADD</button>
        </div>
      </div>
      <hr></hr>
      <h3>일정 목록</h3>
      {/* 리스트 출력 */}
      <ul className="list-group">
        {showmemos}
      </ul>
      
    </div>
  );
}