import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    width: 100%;
    height: 50px;
    background-color: #383d40;
`;

export const SHeaderBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 82.5px;
    padding: 0px 15px;
    width: 1140px;
    height: 50px;
`;

export const SLogo = css`
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    text-decoration: none;
`;

export const SmalLogo = css`
    display: inline-block;
    position: absolute;
    font-size: 8px;
    color: #aaa;
`;

export const SProfile = (isProfileMenuShow) => 
    css`
       z-index: 1;
       display: flex;
       justify-content: center;
       align-items: center;
       width: 125px;
       height: 50px;
       font-size: 14px;
       font-weight: 400;
       color: #ddd;
       text-decoration: none;
       cursor: pointer;
       background-color: ${isProfileMenuShow ? "#555" : "#383d40"};
       &:hover {
           color: #fff;
           font-weight: 500;
       }
`;
    

export const SProfileImg = css`
    margin-right: 5px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #fff;
    overflow: hidden;
`;

export const SIcon = css`
    z-index: 5;
    margin-left: 4px;
    font-size: 8px;
`;

export const SProfileLayout = css`
    z-index: 10;
    position: absolute;
    transform: translateX(-57%);
    top: 50px;
    right: 0px;
    border: 1px solid #dbdbdb;
    width: 165px;
    height: 159px;
    background-color: #fff;
    box-shadow: 2px 2px 5px #dbdbdb;
`

export const SMenuList = css`
    display: flex;
    align-items: center;
    margin-top: 5px;
    padding: 8px 20px;
    font-size: 14px;
    color: #262626;
    cursor: pointer;
    &:hover {
        background-color: #dbdbdb;
    }
    &:last-child {
        margin-top: 8px;
        /* border-top: 1px solid #dbdbdb; */
    }
`;

export const SDivider = css`
    padding-top: 8px;
    border-bottom: 1px solid #dbdbdb;
`;



