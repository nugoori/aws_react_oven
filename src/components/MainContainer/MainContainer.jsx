import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { TfiMenuAlt } from 'react-icons/tfi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { HiMiniSquares2X2 } from 'react-icons/hi2';
import { BsPlusCircle } from 'react-icons/bs';

function MainContainer(props) {


    
    return (
        <div css={S.SMainContainer}>
            <div css={S.SMainHeader}>
                <h1 css={S.SMainTitle}>프로젝트 대쉬보드</h1>
                <div css={S.SMainInputBox}>
                    <input type="text" css={S.SMainInput} placeholder='프로젝트 검색'/>
                    <BiSearchAlt2 css={S.SMainSearchIcon}/>
                    <div>
                        <button css={S.SMainButton}>
                            <div>
                                <TfiMenuAlt css={S.SMainButtonIcon}/>
                            </div>
                        </button>
                        <button css={S.SMainButton}>
                            <HiMiniSquares2X2 css={S.SMainButtonIcon}/>
                        </button>
                    </div>
                </div>
            </div>
            <div css={S.SMainContent}>
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
                    <div></div>
                </div>
            </div>
        </div>
    );
}
 
export default MainContainer;
