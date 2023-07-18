
import AddRecruiter from './components/AddRecruiter';
import HrAdminDash from './components/HrAdminDash';
import CandidateLogin from './components/CandidateLogin';
import CandidateRegister from './components/CandidateRegister';
import HRLogin from './components/HRLogin';

import HRRegister from './components/HRRegister';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Desktop1 from './components/demo';


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
      {/* <Route path='/d1' element={<Desktop1/>}/> */}

    </Routes>
    </BrowserRouter>
 
    
    </>
  );
}

export default App;
