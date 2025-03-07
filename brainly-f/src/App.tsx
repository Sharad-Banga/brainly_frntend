
import './App.css'

import {BrowserRouter, Routes , Route} from "react-router-dom";
import { Signup } from './pages/Signup';
import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';

 function App() {
  return (
    
    <BrowserRouter>
      <Routes>

        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
