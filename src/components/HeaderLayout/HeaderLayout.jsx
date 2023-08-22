import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { BiSolidDownArrow } from 'react-icons/bi';
import ProfileToggleBar from '../ProfileToggleBar/ProfileToggleBar';
import { useRecoilState } from 'recoil';
import { isProfileMenuState } from '../../stores/profileMenuStore';

function HeaderLayout(props) {

    const [ isProfileMenuShow, setIsProfileMenuShow ] = useRecoilState(isProfileMenuState);
    console.log(isProfileMenuShow);

    const handleProfileMenuOnclick = () => {
        setIsProfileMenuShow(!isProfileMenuShow);
    }

    return (
            <div css={S.SLayout}>
                <div css={S.SHeaderBox}>
                    <div >
                        <a href="" css={S.SLogo}>
                            Oven
                            <span css={S.SSmalLogo}>BETA</span>
                        </a>
                    </div>
                    <div onClick={handleProfileMenuOnclick}>
                        <a css={S.SProfile} href=""  >
                            <img css={S.SProfileImg} src="https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000" />
                            username
                            <BiSolidDownArrow css={S.SIcon}/>
                            <ProfileToggleBar />
                        </a>
                    </div>
                </div>
            </div>
    );
}

export default HeaderLayout;