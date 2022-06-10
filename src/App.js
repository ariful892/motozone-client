import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddInventory from './Pages/AddInventory/AddInventory';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Loading from './Pages/Shared/Loading/Loading';

function App() {
  return (
    <div className='bg-dark'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:itemId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/add' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
