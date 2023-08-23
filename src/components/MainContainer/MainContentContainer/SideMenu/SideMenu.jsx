import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function SideMenu(props) {
    return (
            <div css={S.SMainContentSelectBox}>
                <ul css={S.SMainContentSelectList}>
                    <li css={S.SMainContentSelectListFirst}>
                        <a href="">나의 프로젝트</a>
                    </li>
                    <li css={S.SMainContentSelectListSec}>
                        <a href="">나에게 공유된 프로젝트</a>
                    </li>
                </ul>
            </div>
    );
}

export default SideMenu;