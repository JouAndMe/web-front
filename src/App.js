import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Fund from './components/Fund'
import Trust from './components/Trust'
import Deposit from './components/Deposit'
import Loan from './components/Loan'
import Main from './pages/Main';
const App = () =>{
    return(
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/fund' element={<Fund />}></Route>
        <Route path='/trust' element={<Trust />}></Route>
        <Route path='/deposit' element={<Deposit />}></Route>
        <Route path='/loan' element={<Loan />}></Route>
      </Routes>
      </BrowserRouter>
    )
}
export default App