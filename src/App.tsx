
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
