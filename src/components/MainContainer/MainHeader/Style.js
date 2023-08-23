import { css } from "@emotion/react";

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
    z-index: 1;
    position: relative;
    top: 1px;
    left: -3px;
    font-size: 15px;
`;
