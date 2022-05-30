import { Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Home from './components/Home';

function App() {
  
  return (
    <Routes >
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/login' element={<Login/>}/>


</Routes>
  );
}

export default App;

