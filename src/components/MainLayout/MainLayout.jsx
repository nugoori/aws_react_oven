import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style.js';

function MainLayout({ children }) {
    
    return (
        <div css={S.SLayout}>
            {children}
        </div>
        
    );
}

export default MainLayout;