import React from 'react'
import styled from 'styled-components'

import CardA, { CardS } from '../../Atoms/Card'
import CardImage from '../../Atoms/CardImage'
import CardContent from '../../Atoms/CardContent'


const Card = ({ character }) => {
    return (
        <CardA>
            <CardImage 
                src={character.image}
                title={character.name}
                alive={character.status.toLowerCase()}
            />
            <CardContent 
                species={character.species}
                gender={character.gender}
            />
        </CardA>
    )
}

export default Card