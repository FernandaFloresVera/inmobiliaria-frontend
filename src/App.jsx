import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import CreateAnnoun from './screens/CreateAnnoun'
import Cards from './screens/Cards'
import Sidebar from './components/Sidebar';
import { LoginPage } from './screens/LoginPage';
import { RegisterPage } from './screens/RegisterPage';
import { DashboardPage } from './screens/DashboardPage';
import {HomePage} from './screens/HomePage'
import { Navbar } from "./Navbar";

function App() { 
  //ESTADO MANDANDO PARA COMPONENTES HERMANOS (POR ESO ESTA EN COMPONENTE PADRE)
  const [searchText, setSearchText] = useState('');

  return (
    <Router>
     
        <Routes>
          <Route exact path="/cards" 
            element={
              <Cards 
                searchText={searchText} 
                setSearchText={setSearchText} 
              />
            } 
          />
        <Route path='/' element={<Navbar />} />
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route exact path="/create" element={<CreateAnnoun />} />

       
        </Routes>
    </Router>
  )
}
export default App