import './App.css';
import { Reset } from 'styled-reset';
import MainLayout from './components/MainLayout/MainLayout';
import { Global } from '@emotion/react';
import * as S from './styles/common';
import { Children } from 'react';

function App() {
  return (
    <>
      <Reset />
      <Global css={S.GSCommon}/>
        <MainLayout >
          {Children}
        </MainLayout>
    </>
  );
}

export default App;
