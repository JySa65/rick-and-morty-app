import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import imageDefault from '../../../image/default.jpeg'

const CardImageS = styled.div`
`

const Img = styled.img`
    display: block;
    border-radius: 10px 10px 0 0;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
`

const CardContainerTitle = styled.div`
    width: 100%; 
    background: rgba(27, 18, 18, 0.55); 
    padding: 10px 0;
    color: #fff;
    position: absolute;
    bottom: 141px;
    left: 0;
    font-size: 24px;
    font-weight: 300;
    max-width: 100%;
    display: flex;
    justify-content: start;
` 

const CardTitle = styled.span`
    padding: 0 20px;
`

const Circle = styled.div`
    width: 26px;
    height: 26px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: ${props => props.alive === "alive" ? "#98ca3f" : "#a62626"};
    bottom: 11px;
    left: 8.5rem;
`

const CardImage = ({src, title, alive}) => {
    return (
        <CardImageS>
            <Img height={300} src={src} alt={title} />
            <CardContainerTitle>
                <CardTitle>
                    {title}
                </CardTitle>
                <Circle alive={alive} />
            </CardContainerTitle>
        </CardImageS>
    )
}

CardImage.defaultProps = {
    src: imageDefault,
    title: 'Rick'
  };

CardImage.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    alive: PropTypes.string
}


export default CardImage
