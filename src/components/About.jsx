import { Component } from 'react'
import Carousel from './carousel/Carousel'

class About extends Component {
    render(){
        return(
            <div className='about-page'>
                  <div className='about'>
                    <h1>what is the Koru?</h1>
                  </div>
                <div className='about-div'>
                    <p className='about-description'>
                    In Maori culture, the Koru is a spiral resembling an unfurling Silver Fern sprout. The Silver Fern is extremely present in New Zealand forests and are often noticed for their abilities of growth and regeneration. This is what the Koru represents. 
                    </p>
                </div>
                <div className='about-carousel'>
                    <Carousel />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default About