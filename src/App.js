import {Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
   
  );
}

export default App;
