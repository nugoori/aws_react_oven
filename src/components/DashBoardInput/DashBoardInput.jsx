import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { TfiMenuAlt } from 'react-icons/tfi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { HiMiniSquares2X2 } from 'react-icons/hi2';

function DashBoardInput(props) {
    return (
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
    );
}

export default DashBoardInput;