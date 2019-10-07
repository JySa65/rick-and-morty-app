import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'

import Loader from "../../Atoms/Loader";
import Card from '../../Molecules/Card'


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    grid-gap: 5px;
    margin: 100px 30px 20px;

    @media screen and (max-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media screen and (max-width: 1020px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 690px) {
        grid-template-columns: 1fr;
        margin: 100px 0 0 0;
        grid-gap: 0;
    }
`

const Footer = styled.div`
    grid-column: 1 / 5;
    margin-top: 30px;

    @media screen and (max-width: 1280px) {
        grid-column: 1 / 4;
    }

    @media screen and (max-width: 1020px) {
        grid-column: 1 / 3;
    }

    @media screen and (max-width: 690px) {
        grid-column: 1 / 2;
    }
`

const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 25px;
    color: #fff;
`

const ListCard = ({ characters, handlerSetCharacters }) => {
    const [page, setPage] = useState(1)
    const [loader, setLoader] = useState(true)

    const getCharacters = async () => {
        setLoader(true)
        let data = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        data = await data.json()
        const nextPage = parseInt(data.info.next.split("?page=")[1])
        handlerSetCharacters(data.results)
        setPage(nextPage)
        setLoader(false)
    }

    useEffect(() => {
        getCharacters()
    }, [])
    return (
        <Container>
            {characters.map(character => {
                return (
                    <Card character={character} key={character.id} />
                )
            })}
            <Footer>
                {!loader && (
                    <Button onClick={getCharacters}>Load More...</Button>
                )}
                {loader && (
                    <Loader loader={loader} />
                )}
            </Footer>
        </Container>
    )
}

const mapStateToProps = state => ({
    characters: state.characters
})

const mapDispathToProps = dispatch => ({
    handlerSetCharacters(characters) {
        dispatch({
            type: "GET_CHARACTERS",
            characters
        })
    }
})

export default connect(mapStateToProps, mapDispathToProps)(ListCard)