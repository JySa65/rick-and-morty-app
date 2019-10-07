import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { Object } from 'core-js';

const CardContentS = styled.div`
    padding: 24px;

    :hover{
        background-color: #9e9e9e;
    }
`

const BoxBorder = styled.div`
    border-bottom: 1px solid;
    padding: 1px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
`

const CardContent = (props) => {
    return (
        <CardContentS>
            {
                Object.keys(props).map((data, index) => {
                    return (
                        <BoxBorder key={index}>
                            <span>
                                <b>{data.charAt(0).toUpperCase() + data.slice(1)}</b>
                            </span>
                            <span>
                                <b>{props[data]}</b>
                            </span>
                        </BoxBorder>
                    )
                })
            }
        </CardContentS>
    )
}

CardContent.defaultProps = {
    gender: 'gender',
    species: 'species'
};

CardContent.propTypes = {
    gender: PropTypes.string,
    species: PropTypes.string
}


export default CardContent