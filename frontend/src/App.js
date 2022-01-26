import './App.css';
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import Login from './component/Login';
import Signin from './component/Signin';
import Navbar from './component/Navbar';
import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import CircularIndeterminate from "./component/Loading"

import { setUser } from './redux/action/user/userAction';
import { useDispatch ,useSelector} from 'react-redux';
function App() {
  const userState=useSelector((state)=>state.USER)
  const dispatch=useDispatch()
  useEffect(async()=>{
    if(userState.token){
    await dispatch(setUser())}
  },[dispatch])
 if(userState.loading){
   return <CircularIndeterminate/>
 }
 else{
  return (
      <BrowserRouter>
        <Routes>
           <Route path="/circular" element={<CircularProgress/>} />
            <Route path="/" exact element={<Login/>} />
            <Route path="/signup" element={<Signin/>}  />
            <Route path='/navbar'  element={<Navbar/>} />
        </Routes>
      </BrowserRouter>
      
  );}
}

export default App;
