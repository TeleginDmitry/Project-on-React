import './App.scss';
import Header from './Components/Header/header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AppRouter from './Components/AppRouter'
import Modal from './Components/Modal/Modal';
import { useEffect, useMemo, useState } from 'react';
import { loginContext } from './Components/Context';


function App() {
  const [modal, setModal] = useState(false)
  const [login, setLogin] = useState()



  return (
      <loginContext.Provider value={{
        login,
        setLogin
      }}>

        <Modal modal={modal} setModal={setModal}></Modal>
        <BrowserRouter>
          <Header setModal={setModal}></Header>
          <AppRouter></AppRouter>
        </BrowserRouter>

      </loginContext.Provider>
    
  );
}

export default App;
