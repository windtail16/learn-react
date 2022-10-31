import { BrowserRouter, Route , Routes } from 'react-router-dom';

import Main from './component/Main';
import Signup from './component/Signup';

import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Signup" element={<Signup/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
