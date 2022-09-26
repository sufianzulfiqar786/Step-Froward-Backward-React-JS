import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllSteps from './Pages/AllSteps';
import Extra from './Pages/Extra'
import SuccessMessage from './Pages/SuccessMessage'


function App() {
  return (
    <>
    

    
    {/* */}


    <BrowserRouter>

        <Routes>

          <Route path="/" element={<AllSteps/>} />
          <Route path="/Extra" element={<SuccessMessage/> } />
          
        </Routes>
        
      </BrowserRouter>



    </>
  );
}

export default App;
