import React from 'react'

function Movement(){
    return(
        <div className='movement-component'>
            <div className='movement-description'>
                <h2 className='movement-words'> MOVEMENT </h2>
                <p> the constant looping of the Koru symbolizes the Maori belief that energy was always in movement,  and it could never be destroyed. </p>
            </div> 
            <img className='movement' src={`${process.env.PUBLIC_URL}/images/movement.png`}/>
        </div>
    )
}

export default Movement