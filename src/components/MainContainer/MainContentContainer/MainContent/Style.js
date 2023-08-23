import { css } from "@emotion/react";

export const SMainContentBox = css`
    flex-wrap: wrap;
    padding: 0px 0px 0px 15px;
    width: 840px;
    height: 100%;
`;

export const SMainContentBoxButtonBox = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
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
    background-color: #3498db;
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

export const SMainContentThumbnailBox = css`
    display: inline-block;
    margin: 0px 10px;
    width: 252px;
    height: 326px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
`;

export const SMainContent = css`
    
    width: 100%;
    height: 100%;
`;
