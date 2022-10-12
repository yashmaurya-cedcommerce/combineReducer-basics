import { BUY_CAKE } from "./types"

export const buyCake=(value)=> {
    return {
        type: BUY_CAKE,
        payload: value
    }
}