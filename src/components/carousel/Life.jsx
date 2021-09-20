import React from 'react'

function Life(){
    return(
        <div className='life-component'> 
            <img className='life' src={`${process.env.PUBLIC_URL}/images/life.png`}/>
        </div>
    )
}

export default Life