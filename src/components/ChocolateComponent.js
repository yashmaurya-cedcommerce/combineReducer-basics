import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyChocolate } from '../redux/chocolate/actions';

export default function ChocolateComponent() {

    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState('');

    const [numChocolates, setNumChocolates] = useState();

    var chocolateOnChange=(event)=> {
        setNumChocolates(parseInt(event.currentTarget.value))
    }

    var buyChocolateHandler=(event)=> {
        event.preventDefault();

        if(numChocolates<=state.chocolate.numOfChocolates)
        {
            setErrorMsg('')
            dispatch(buyChocolate(numChocolates))
            setNumChocolates(0);
        }
        else
        {
            setErrorMsg('Not enough chocolates in stock!')
            setNumChocolates(0);
        }
    }

    return (
        <div className='homeContainer'>

            <p>Total Amount of Cakes: 50</p>
            <p>Remaining Amount of Cakes: {state.chocolate.numOfChocolates}</p>
            <form className='buyDiv' onSubmit={(event) => buyChocolateHandler(event)}>
                <input type="number" id='buyCakeInput' onChange={(event) => chocolateOnChange(event)} value={numChocolates} required />
                <button className='buyCakeBtn' type='submit'>Purchase</button>
            </form>
            {(errorMsg !== '') ? <p className='errorMsg'>{errorMsg}</p> : ''}

        </div>
    )
}
