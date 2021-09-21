import React from 'react'

function Life(){
    return(
        <div className='life-component'> 
            <img className='life' src={`${process.env.PUBLIC_URL}/images/life.png`}/>
            <p class ='life-description'>the spiral design represents the sprouting silver fern. the fern represents survival and existence.</p>
        </div>
    )
}

export default Life