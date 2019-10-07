import { createStore } from 'redux'

const initialState = {
    characters: []
}


const reducer = (state=initialState, action) => {
    if (action.type === "GET_CHARACTERS") {
        return {
            ...state,
            characters: state.characters.concat(action.characters)
        }
    }
    return state
}


export default createStore(reducer)