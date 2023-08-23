import './App.css';
import { Reset } from 'styled-reset';
import MainLayout from './components/MainLayout/MainLayout';
import { Global } from '@emotion/react';
import * as S from './styles/common';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './pages/DashBoard/DashBoard';
import Account from './pages/Account/Account';
import HeaderLayout from './components/HeaderLayout/HeaderLayout';
import MainContainer from './components/MainContainer/MainContainer';
import HelpDesk from './pages/HelpDesk/HelpDesk';

function App() {
  return (
    <>
      <Reset />
      <Global css={S.GSCommon}/>
        <MainLayout >
          <HeaderLayout />
          <MainContainer >
            <Routes >
              <Route path='/dashboard' element={<DashBoard />}/>
              <Route path='account' element={<Account />}/>
              <Route path='helpdesk' element={<HelpDesk />}/>
            </Routes>
          </MainContainer>
        </MainLayout>
    </>
  );
}

export default App;
