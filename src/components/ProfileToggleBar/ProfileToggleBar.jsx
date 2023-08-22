import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useRecoilState } from 'recoil';
import { isProfileMenuState } from '../../stores/profileMenuStore';

function ProfileToggleBar() {

    const [ isProfileMenuShow, setIsProfileMenuShow ] = useRecoilState(isProfileMenuState);
    console.log(isProfileMenuShow);

    return (
        <div >
            <ul css={S.SLayout}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

export default ProfileToggleBar;