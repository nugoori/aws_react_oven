import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import MainHeader from '../../components/MainContainer/MainHeader/MainHeader';
import MainContentContainer from '../../components/MainContainer/MainContentContainer/MainContentContainer';

function Account(props) {
    return (
        <>
            <MainContainer >
                <MainHeader title={"계정 설계하기"}>
                    
                </MainHeader>
                <MainContentContainer />
            </MainContainer>
        </>
    );
}

export default Account;