import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyIcecream } from '../redux/iceCreams/actions';

export default function IcecreamComponent() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [numIce, setNumIce] = useState();
    const [errorMsg, setErrorMsg] = useState('');

    var buyIceHandler = (event) => {
        event.preventDefault();
        if (numIce <= state.icecream.numOfIcecream) {
            setErrorMsg('')
            dispatch(buyIcecream(numIce))
            setNumIce(0);
        }
        else {
            setErrorMsg('Not enough ice creams in stock!')
            setNumIce(0);
        }

    }

    var iceOnChange = (event) => {
        setNumIce(parseInt(event.currentTarget.value))
    }

    return (
        <div className='homeContainer'>

            <p>Total Amount of Cakes: 50</p>
            <p>Remaining Amount of Cakes: {state.icecream.numOfIcecream}</p>
            <form className='buyDiv' onSubmit={(event) => buyIceHandler(event)}>
                <input type="number" id='buyCakeInput' onChange={(event) => iceOnChange(event)} value={numIce} required />
                <button className='buyCakeBtn' type='submit'>Purchase</button>
            </form>
            {(errorMsg!=='')?<p className='errorMsg'>{errorMsg}</p>:''}
        
        </div>
    )
}
