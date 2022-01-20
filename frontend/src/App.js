import './App.css';
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import Login from './component/Login';
import Signin from './component/Signin';
import Navbar from './component/Navbar';

function App() {
  return (
  
      <BrowserRouter>
        <Routes>

            <Route path="/" exact element={<Login/>} />
            <Route path="/signup" element={<Signin/>}  />
            <Route path='/navbar'  element={<Navbar/>} />
        </Routes>

      
      </BrowserRouter>
      
  );
}

export default App;
