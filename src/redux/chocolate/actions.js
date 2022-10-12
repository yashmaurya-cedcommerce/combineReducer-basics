import { BUY_CHOCOLATES } from "./types"

export const buyChocolate = (value) => {
    return {
        type: BUY_CHOCOLATES,
        payload: value
    }
}