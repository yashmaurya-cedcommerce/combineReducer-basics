import { BUY_CHOCOLATES } from "./types"


export const initialState = {
    numOfChocolates : 50   
}

const chocolateReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CHOCOLATES: 
        return {
            ...state,
            numOfChocolates: state.numOfChocolates - action.payload
        }
        default: 
        return state
    }
}

export default chocolateReducer