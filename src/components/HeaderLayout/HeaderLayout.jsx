import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { BiSolidDownArrow } from 'react-icons/bi';
import { useRecoilState } from 'recoil';
import { isProfileMenuState } from '../../stores/profileMenuStore';

function HeaderLayout({ target, setTarget }) {

    const [ isProfileMenuShow, setIsProfileMenuShow ] = useRecoilState(isProfileMenuState);
   

    const handleProfileMenuOnclick = (e) => {
        console.log(e.target);
        if(e.target !== null) {
            setIsProfileMenuShow(!isProfileMenuShow)
        }else {
            setIsProfileMenuShow(false);
        };
        
    }

    return (
            <div css={S.SLayout}>
                <div css={S.SHeaderBox}>
                    <div >
                        <a href="" css={S.SLogo}>
                            Oven
                            <span css={S.SmalLogo}>BETA</span>
                        </a>
                    </div>
                    <div onClick={handleProfileMenuOnclick}>
                        <div css={S.SProfile(isProfileMenuShow)} href="">
                            <img css={S.SProfileImg} src="https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000" />
                            username
                            <BiSolidDownArrow css={S.SIcon}/>
                        </div>
                        <div>
                            {isProfileMenuShow && (<ul css={S.SProfileLayout}>
                                <li css={S.SMenuList}>프로젝트 대쉬보드</li>
                                <li css={S.SMenuList}>계정 설정하기</li>
                                <li css={S.SMenuList}>헬프데스크</li>
                                <li css={S.SDivider}/>
                                <li css={S.SMenuList}>로그아웃</li>
                            </ul>)}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default HeaderLayout;