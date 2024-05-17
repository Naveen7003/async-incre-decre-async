import { incrementby2 } from "../reducer/counterSlice";
export {incrementby2, increment, decrement} from '../reducer/counterSlice'

export const asyncincrementby2 = (value) => (dispatch, getState) =>{
    try {
        setTimeout(() =>{
            dispatch(incrementby2(value))
        },1000)
    } catch (error) {
        console.log(error)
    }
}