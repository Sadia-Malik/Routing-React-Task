import React from 'react';
import { Routes, Route } from 'react-router-dom';

//  import GithubUser from './Component/GithubUser';
//  import Navbar from './Component/Navbar';
 import Contactus from './Component/Contactus';
// import virtualDom from './Component/virtualDom';
import Aboutus from './Component/Aboutus';
import Home from './Component/Home';

function App(){
  return(
    <div>
      
     <Routes>
        <Route exact path="/" element={<Home/>} /> 
        <Route  path="/Aboutus" element={<Aboutus/>} /> 
        <Route  path="/Contactus" element={<Contactus/>} /> 
     </Routes>
      {/* <GithubUser/> */}
     
      {/* <Navbar/> */}
      {/* <Home/>
      <Contactus/> */}
      {/* <virtualDom/> */}
      {/* <Aboutus/> */}


      
    </div>
  );
}
export default App;

