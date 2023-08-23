import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { BsPlusCircle } from 'react-icons/bs';

function MainContent(props) {
    return (
        <div css={S.SMainContentBox}>
            <div css={S.SMainContentBoxButtonBox}>
                <button css={S.SMainContentBoxButtonLeft}>모두 선택</button>
                <button css={S.SMainContentBoxButtonRight}>
                    <BsPlusCircle />
                    <span>
                        새로운 프로젝트 만들기
                    </span>
                </button>
            </div>
            <div css={S.SMainContentThumbnailBox}>
                <div css={S.SMainContent}>
                    <div >

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;