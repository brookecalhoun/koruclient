import React from 'react'
import CounterButton from './CounterButton'

class ProgressTracker extends React.Component{
    constructor(){
    super()
        this.state = {
            count: 0
        }
    } 

    increment = () => {
        this.setState({
          count:this.state.count+1
        })
      }
      
    decrement = () => {
        if(this.state.count === 0){
            return
        }
        else{
            this.setState({
            count:this.state.count-1
            })
        }
      }

      render() {

        let { count } =this.state
        return (
          <div>
            <h1> Progress Tracker: </h1>
            <h2>Count: { count } </h2>
            <CounterButton
              title = { "+" }
              task = { () => this.increment() }
            />
            <CounterButton
              title = { "-" }
              task = { () => this.decrement() }
            />
           </div>
        )
      }
}
   
  

export default ProgressTracker