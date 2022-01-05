import React from 'react'
import { StyledHeader, Nav, Logo  } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { StyledButton } from './Button.styled';


export default function Header() {
    return (
        <StyledHeader>
            <Container>
            <Nav>
                <Logo src='./images/logo.svg' alt='huddle' />
                <StyledButton>Try It Free</StyledButton>
            </Nav>
            </Container>
            

        </StyledHeader>
    )
}
