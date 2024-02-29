import logo from './logo.svg';
import './App.css';
import Salad from './components/Salad';
import Hen from './components/Hen';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Barnyard from './components/Barnyard';
import Sea from './components/Sea';
import Biriyani from './components/Biriyani';
import Fastfood from './components/Fastfood';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Salad/>}/>
        <Route path='/bar' element={<Barnyard/>}/>
        <Route path='/hen' element={<Hen/>}/>
        <Route path='/sea' element={<Sea/>}/>
        <Route path='/biri' element={<Biriyani/>}/>
        <Route path='/fast' element={<Fastfood/>}/>
        

        
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
