import React from 'react'

function Growth(){
    return(
        <div className='growth-component'>
            <div className='growth-description'>
                <h2 className='growth-words'> Growth </h2>
                <p> the Silver Fern is revered for it’s regrowth properties, which is why it represents growth and enlightenment.</p>
            </div> 
            <img className='growth' src={`${process.env.PUBLIC_URL}/images/growth.png`} alt='growth'/>
        </div>
    )
}

export default Growth