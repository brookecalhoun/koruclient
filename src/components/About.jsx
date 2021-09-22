// import { Component } from 'react'

// class About extends Component {
//     render(){
//         return(
//             <div className='about-page'>
//                   <div className='about-bg'>
//                   </div>
//                     <h1 className='about'>what is the Koru? </h1>
//                 <div className='about-div'>
//                     <p className='about-description'>
//                     In Maori culture, the Koru is a spiral resembling an unfurling Silver Fern sprout. The Silver Fern is extremely present in New Zealand forests and are often noticed for their abilities of growth and regeneration.
//                     </p>
//                 </div>
//                 <div className='about-carousel'>
//                     <Carousel />
//                     <br />
//                     <br />
//                     <br />
//                 </div>
//             </div>
//         )
//     }
// }

// export default About

// You can live edit this code below the import statements
import React from "react";
import Fade from "react-reveal/Fade";
import Carousel from "./carousel/Carousel";

class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <div className="about-bg"></div>
        <Fade left>
          <h1 className="about">what is the Koru? </h1>
        </Fade>
        <Fade right>
          <div className="about-div">
            <p className="about-description">
              In Maori culture, the Koru is a spiral resembling an unfurling
              Silver Fern sprout. The Silver Fern is extremely present in New
              Zealand forests and are often noticed for their abilities of
              growth and regeneration.
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className="about-carousel">
            <Carousel />
            <br />
            <br />
            <br />
          </div>
        </Fade>
      </div>
    );
  }
}

export default About;
