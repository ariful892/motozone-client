import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import InventoryItems from './Pages/Home/InventoryItems/InventoryItems';

function App() {
  return (
    <div className='bg-dark'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<InventoryItems></InventoryItems>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
