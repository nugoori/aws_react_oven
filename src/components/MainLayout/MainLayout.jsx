import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style.js';
import HeaderLayout from '../HeaderLayout/HeaderLayout';
import MainContainer from '../MainContainer/MainContainer';

function MainLayout() {
    
    return (
        <div css={S.SLayout}>
            <HeaderLayout />
            <MainContainer />
        </div>
        
    );
}

export default MainLayout;