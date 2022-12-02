import { Routes, Route } from 'react-router-dom';
import Landingpage from './features/landingpage/Landingpage';

import './App.css';
import Home from './features/home/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

