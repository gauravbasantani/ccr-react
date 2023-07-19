
import AddRecruiter from './components/AddRecruiter';
import HrAdminDash from './components/HrAdminDash';
import CandidateLogin from './components/CandidateLogin';
import CandidateRegister from './components/CandidateRegister';
import HRLogin from './components/HRLogin';

import HRRegister from './components/HRRegister';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RForm from './components/RForm';

import AdminLogin from './components/CCRAdminLogin';
import Home from './components/Home';
import Rating from './components/Rating';
import ForgotPasswordCand from './components/ForgotPasswordCand';
import EnterOTP from './components/EnterOTP';
import EnterPassword from './components/EnterPassword';
import CCRAdminDash from './components/CCRAdminDash';
import SuperAdminDash from './components/SuperAdminDash';
import AddCcrAdmin from './components/AddCcrAdmin';
import CCRAdminLogin from './components/CCRAdminLogin';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hradminDash' element={<HrAdminDash/>}/>
      <Route path='/addRecruiter' element={<AddRecruiter/>}/>
      <Route path='/loginhr' element={<HRLogin/>}/>
      <Route path='/registerhr' element={<HRRegister/>}/>
      <Route path='/registercandidate' element={<CandidateRegister/>}/>
      <Route path='/logincandidate' element={<CandidateLogin/>}/>

      
      <Route path='/rform' element={<RForm/>}/>

      <Route path='/rating' element={<Rating/>}/>
       <Route path='/enteremail' element={<ForgotPasswordCand/>}/> 
   <Route path='/enterotp' element={<EnterOTP/>}/>
   <Route path='/enterpassword' element={<EnterPassword/>}/>

   <Route path='/ccradminlogin' element={<CCRAdminLogin/>}/>
   <Route path='/ccradmindash' element={<CCRAdminDash/>}/>
   <Route path='/superadmindash' element={<SuperAdminDash/>}/>
   <Route path='/addccradmin' element={<AddCcrAdmin/>}/>

    </Routes>
    </BrowserRouter>
 

    </>
  );
}

export default App;
