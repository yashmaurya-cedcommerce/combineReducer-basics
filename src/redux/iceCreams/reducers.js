import { BUY_ICECREAM } from "./types"

export const initialState = {
    numOfIcecream: 50
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: 
        return {
            ...state,
            numOfIcecream: state.numOfIcecream - action.payload
        }
        default: 
        return state
    }
}

export default iceCreamReducer