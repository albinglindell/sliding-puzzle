import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Ingame from './pages/Ingame';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/ingame' element={<Ingame />}/>
        </Routes>
    </div>
  );
}

export default App;
