import { BUY_ICECREAM } from "./types"

export const buyIcecream = (value) => {
    return {
        type: BUY_ICECREAM,
        payload: value
    }
}