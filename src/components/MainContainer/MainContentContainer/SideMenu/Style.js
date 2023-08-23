import { css } from "@emotion/react";

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