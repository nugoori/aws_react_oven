import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import MainHeader from '../../components/MainContainer/MainHeader/MainHeader';
import MainContentContainer from '../../components/MainContainer/MainContentContainer/MainContentContainer';
import DashBoardInput from '../../components/DashBoardInput/DashBoardInput';

function DashBoard(props) {

    return (
        <>
            <MainContainer >
                <MainHeader title={"프로젝트 대쉬보드"}>
                    <DashBoardInput />
                </MainHeader>
                <MainContentContainer />
            </MainContainer>
        </>
    );
    
}

export default DashBoard;