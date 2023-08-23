import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import DashBoardInput from '../../DashBoardInput/DashBoardInput';


function MainHeader({ title, children }) {

    return (
        <div css={S.SMainHeader}>
            <h1 css={S.SMainTitle}>{title}</h1>
            {/* 여기도 컴포넌트로 빼야할듯? */}
            {children}
        </div> 
    );
}

export default MainHeader;