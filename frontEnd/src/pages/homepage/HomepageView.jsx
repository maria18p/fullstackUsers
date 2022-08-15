import React from 'react';
import FormController from '../../components/RegistrationForm/FormController';
import { MainContainer } from './HomepageStyle.style';

function HomepageView() {
    return (
        <MainContainer>
            <FormController />
        </MainContainer>
    );
}

export default HomepageView;