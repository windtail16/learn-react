import { BrowserRouter, Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

import Main from './component/Main';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Blog from './component/Blog';
import Crud from './component/Crud';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Signin" element={<Signin/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Crud" element={<Crud/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
