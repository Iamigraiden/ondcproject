import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './components/common/Header.jsx';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';
import Userdata from './pages/Userdata.jsx';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/userdata' element={<Userdata/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App
