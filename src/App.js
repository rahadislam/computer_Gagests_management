import './App.css';
import Header from './shaerd/Header/Header';
import  Home  from "./pages/Home/Home";
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Myprofile from './pages/Myprofile/Myprofile';
import RequireAuth from './pages/Login/RequireAuth';
import Dashbord from './pages/Dashbord/Dashbord';
import Additems from './pages/Dashbord/Additems';
import Allitem from './pages/Dashbord/Allitem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/myprofile' element={
          <RequireAuth>
            <Myprofile></Myprofile>
          </RequireAuth>
        }></Route>
        <Route path='/dashbord' element={
          <RequireAuth>
            <Dashbord></Dashbord>
          </RequireAuth>
        }>
         <Route index element={<Additems></Additems>}></Route>
         <Route path='allitem' element={<Allitem></Allitem>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
