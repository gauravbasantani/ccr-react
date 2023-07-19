
import AddRecruiter from './components/AddRecruiter';
import HrAdminDash from './components/HrAdminDash';
import CandidateLogin from './components/CandidateLogin';
import CandidateRegister from './components/CandidateRegister';
import HRLogin from './components/HRLogin';

import HRRegister from './components/HRRegister';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Desktop1 from './components/demo';
import RatingForm from './components/RatingForm';
import Home from './components/Home';
import Rating from './components/Rating';
import ForgotPasswordCand from './components/ForgotPasswordCand';
import EnterOTP from './components/EnterOTP';
import EnterPassword from './components/EnterPassword';


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
      {/* <Route path='/d1' element={<Desktop1/>}/> */}
      {/* <Route path='/ratingform' element={<RatingForm/>}/> */}

      <Route path='/rating' element={<Rating/>}/>
       <Route path='/enteremail' element={<ForgotPasswordCand/>}/> 
   <Route path='/enterotp' element={<EnterOTP/>}/>
   <Route path='/enterpassword' element={<EnterPassword/>}/>
   

    </Routes>
    </BrowserRouter>
 

    </>
  );
}

export default App;
