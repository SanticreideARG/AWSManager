import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import NewOrder from './components/NewOrder/NewOrder';
import OrderList from './components/OrderList/OrderList';
import OrderDetail from './components/OrderDetail/OrderDetail';
import SetTime from  './components/SetTime/SetTime';
import InputData from './components/InputData/InputData';
import RouterData from './components/RouterData/RouterData';
import OrderBuild from './components/OrderBuild/OrderBuild';
import Settings from './components/Settings/Settings';
import SuppliesList from './components/SuppliesList/SuppliesList';
import EquipmentsList from './components/EquipmentsList/EquipmentsList';
import Help from './components/Help/Help';


import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
       < Navbar />
         < Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/new-order' element={<NewOrder/>}/>
           <Route path='/order-detail' element={<OrderDetail/>}/>
           <Route path='/order-list' element={<OrderList/>}/>
           <Route path='/set-time' element={<SetTime/>}/>
           <Route path='/input-data' element={<InputData/>}/>
           <Route path='/router-data' element={<RouterData/>}/>
           <Route path='/settings' element={<Settings/>}/>
           <Route path='/order-build' element={<OrderBuild/>}/>
           <Route path='/supplies-list' element={<SuppliesList/>}/>
           <Route path='/equipment-list' element={<EquipmentsList/>}/>
           <Route path='/help' element={<Help/>}/>
         </ Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
