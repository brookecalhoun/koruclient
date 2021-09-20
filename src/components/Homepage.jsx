import { Component } from 'react'

class Homepage extends Component {
    render(){
        return(
            <div className = 'homepage'
            style={{
                backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}>
            </div>
        )
    }
}

export default Homepage