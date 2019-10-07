import React from 'react'
import styled from 'styled-components'


const NavWrapper = styled.nav`
    position: fixed;
    width: 100%;
    background-color: #212121!important;
    top: 0;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
    z-index: 2;
`

const NavContainer = styled.div`
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    justify-items: center;

    @media screen and (max-width: 610px) {
        grid-template-columns: 1fr;
      }
`

const NavLogo = styled.div`
    color: #fff;
    display: inline-block;
    font-size: 2.1rem;
    padding: 0;
    font-family: Arial;
`


const Header = () => {
    return(
        <NavWrapper>
            <NavContainer>
                <NavLogo>
                    RICK AND MORTY
                </NavLogo>
            </NavContainer>
        </NavWrapper>
    )
}

export default Header