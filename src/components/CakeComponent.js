import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/actions';

export default function Home() {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [numCakes, setNumCakes] = useState();
    const [errorMsg, setErrorMsg] = useState('');

    var buyCakeHandler = (event) => {
        event.preventDefault();
        if (numCakes <= state.cake.numOfCakes) {
            setErrorMsg('')
            dispatch(buyCake(numCakes))
            setNumCakes(0);
        }
        else {
            setErrorMsg('Not enough cakes in stock!')
            setNumCakes(0);
        }

    }

    var cakeOnChange = (event) => {
        setNumCakes(parseInt(event.currentTarget.value))
    }

    return (
        <div className='homeContainer'>

            <p>Total Amount of Cakes: 50</p>
            <p>Remaining Amount of Cakes: {state.cake.numOfCakes}</p>
            <form className='buyDiv' onSubmit={(event) => buyCakeHandler(event)}>
                <input type="number" id='buyCakeInput' onChange={(event) => cakeOnChange(event)} value={numCakes} required />
                <button className='buyCakeBtn' type='submit'>Purchase</button>
            </form>
            {(errorMsg!=='')?<p className='errorMsg'>{errorMsg}</p>:''}
        
        </div>
    )
}
