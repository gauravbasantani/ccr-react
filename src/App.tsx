
import AddRecruiter from './components/AddRecruiter';
import HrAdminDash from './components/HrAdminDash';
import CandidateLogin from './components/CandidateLogin';
import CandidateRegister from './components/CandidateRegister';
import HRLogin from './components/HRLogin';

import HRRegister from './components/HRRegister';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RatingForm from './components/RatingForm';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/hradminDash' element={<HrAdminDash/>}/>
      <Route path='/addRecruiter' element={<AddRecruiter/>}/>
      <Route path='/' element={<HRLogin/>}/>
      <Route path='/registerhr' element={<HRRegister/>}/>
      <Route path='/registercandidate' element={<CandidateRegister/>}/>
      <Route path='/logincandidate' element={<CandidateLogin/>}/>
      <Route path='/ratingform' element={<RatingForm/>}/>

    </Routes>
    </BrowserRouter>
 
    
    </>
  );
}

export default App;
