import './App.css';
import { Navbar } from './components/Navbar';
import { Men } from './components/Mens';
import { Link, Route, Routes } from 'react-router-dom';
import { Women } from './components/Women';
import { Footer } from './components/Footer';
import {PrivateRoute} from './components/PrivateRouter'
import {Login} from "./components/Login"
import { About } from './components/About';
 import { UserDetails} from "./components/UserDetails"

function App() {
  return (
    <>
    <div className="App">
       <Navbar/>
      
       <div className='coupon'>
         <img  src='https://www.baapoffers.com/uploads/flipkart-big-shopping-sale-fashion-sneak-peek.jpg'/>
       </div>


          <Routes>
          <Route path ="/Men/:id" element = {
             <PrivateRoute>
             <UserDetails/>
            </PrivateRoute>
            }>
              
            </Route>



            <Route path="/Men" element={

           <PrivateRoute>
            <Men/>
            </PrivateRoute>

            }>
            </Route>

            <Route path="/women" element={  <PrivateRoute><Women/></PrivateRoute>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/about" element={ <PrivateRoute>   <About/>  </PrivateRoute> }></Route>

            
          </Routes>
   
    </div>
    <div className='f'>
      <Footer/>
      </div>
      </>
  );
}

export default App;