import React from 'react'
import styled from 'styled-components'

export const CardS = styled.div`
    position: relative;
    border-radius: 10px;
    background: #333;
    color: #fff;
    transition: box-shadow .25s;
    margin: .5rem 0 1rem;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
`

const Card = ({ children }) => {
    return (
        <CardS>
            {children}
        </CardS>
    )
}

export default Card