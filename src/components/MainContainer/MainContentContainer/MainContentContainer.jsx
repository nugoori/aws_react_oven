import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import SideMenu from './SideMenu/SideMenu';
import MainContent from './MainContent/MainContent';

function MainContentContainer(props) {
    return (
        <div css={S.SMainContentContiner}>
            {/* SideMenu로 따로 component 관리 */}
            <SideMenu />
            <MainContent />
        </div>
    );
}

export default MainContentContainer;