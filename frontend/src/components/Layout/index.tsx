import React from 'react';

import Main from '../Main';
import { Container, Wrapper } from './styles';
import MenuBar from '../MenuBar';
import SideBar from '../SideBar';

const Layout: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <MenuBar />
                <Main />
                <SideBar />
            </Wrapper>
        </Container>
    );
};

export default Layout;