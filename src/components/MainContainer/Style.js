import { css } from "@emotion/react";

export const SMainContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 810px;
    background-color: #fff;
`

export const SMainHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    width: 1100px;
    height: 70px;
`;

export const SMainTitle = css`
    margin-bottom: 10px;
    font-size: 36px;
    font-weight: 500;
`;

export const SMainInputBox = css`
    display: flex;
    justify-content: space-between;
    width: 324px;
`;

export const SMainInput = css`
    border: 1px solid #dbdbdb;
    padding: 6px 42px 6px 12px;
    width: 170px;
    height: 20px;
    &:focus {
        outline: 1px solid skyblue;
        box-shadow: 0px 0px 2px 2px skyblue;
    }
`;

export const SMainSearchIcon = css`
    position: relative;
    top: 9px;
    left: -40px;
    cursor: text;
`;

export const SMainButton = css`
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    padding: 6px 12px;
    width: 35px;
    height: 32px;
    background-color: #fff;
    cursor: pointer;
    &:focus {
        background-color: #ddd;
        box-shadow: 1px 1px 3px 0px inset;
    }
    &:first-child {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    &:last-child {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
`;

export const SMainButtonIcon = css`
    z-index: -1;
    position: relative;
    top: 1px;
    left: -3px;
    font-size: 15px;
`;

export const SMainContent = css`
    display: flex;
    margin-top: 20px;
    width: 1100px;
    height: 710px;
`;

export const SMainContentSelectBox = css`
    padding: 0px 15px 0px 0px;
    width: 260px;
    height: 100px;
`;

export const SMainContentSelectList = css`
    & li{
        padding: 10px 15px;
        width: 232px;
        height: 20px;
    }

`;

export const SMainContentSelectListFirst = css`
    border-radius: 2px;
    background-color: #3498db;
    & a {
        font-size: 14px;
        color: #fff;
        text-decoration: none;
    }
`;
export const SMainContentSelectListSec = css`
    margin-top: 3px;
    border-radius: 2px;
    & a {
        font-size: 14px;
        color: #000000;
        text-decoration: none;
    }
    &:hover {
        background-color: #eee;
    }
`;

export const SMainContentBox = css`
    padding: 0px 0px 0px 15px;
    width: 840px;
    height: 100%;
`;

export const SMainContentBoxButtonBox = css`
    display: flex;
    justify-content: space-between;
`;

export const SMainContentBoxButtonLeft = css`
    border: 1px solid #adadad;
    border-radius: 2px;
    width: 85px;
    height: 34px;
    background-color: #fff;
    cursor: pointer;
    &:hover {
        
        background-color: #eee;
    }
`;

export const SMainContentBoxButtonRight = css`
    border: 1px solid #285e8e;
    border-left: none;
    border-radius: 3px;
    width: 190px;
    height: 34px;
    color: #fff;
    background-color: #3071a9;
    cursor: pointer;
    & * {
        color: #fff;
    }
    & span{
        margin-left: 5px;
    }
    &:hover {
        background-color: #285e8e;
    }
`;