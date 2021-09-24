import React from 'react'

function Life(){
    return(
        <div className='life-component'>
            <div className='life-description'>
                <h2 className='life-words'> LIFE </h2>
                <p> the spiral design represents the sprouting silver fern. the fern represents survival and existence. </p>
            </div> 
            <img className='life' src={`${process.env.PUBLIC_URL}/images/life.png`} alt='life'/>
        </div>
    )
}

export default Life