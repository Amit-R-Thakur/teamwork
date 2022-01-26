import './App.css';
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import Login from './component/Login';
import Signin from './component/Signin';
import Navbar from './component/Navbar';
import CircularIndeterminate from './component/Loading';

function App() {
  return (
  
      <BrowserRouter>
        <Routes>

            <Route path="/" exact element={<Login/>} />
            <Route path="/signup" element={<Signin/>}  />
            <Route path='/navbar'  element={<Navbar/>} />
            <Route path='/loading'  element={<CircularIndeterminate/>} />

        </Routes>

      
      </BrowserRouter>
      
  );
}

export default App;
