import './App.css';
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import Login from './component/Login';
import Signin from './component/Signin';
import Navbar from './component/Navbar';

function App() {
  return (
  
      <BrowserRouter>
        <Routes>
            {/* <Route path="/" exact element={<Login/>} /> */}
            <Route path="/signin" element={<Signin/>}  />
            <Route path='/' exact element={<Navbar/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
