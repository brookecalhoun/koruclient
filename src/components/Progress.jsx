// import React from 'react'
// import CounterButton from './CounterButton'

// class ProgressTracker extends React.Component{
//     constructor(){
//     super()
//         this.state = {
//             count: 0
//         }
//     } 

//     increment = () => {
//         this.setState({
//           count:this.state.count+1
//         })
//       }
      
//     decrement = () => {
//         if(this.state.count === 0){
//             return
//         }
//         else{
//             this.setState({
//             count:this.state.count-1
//             })
//         }
//       }

//       render() {

//         let { count } =this.state
//         return (
//           <div>
//             <h1> Progress Tracker: </h1>
//             <h2>Count: { count } </h2>
//             <CounterButton
//               title = { "+" }
//               task = { () => this.increment() }
//             />
//             <CounterButton
//               title = { "-" }
//               task = { () => this.decrement() }
//             />
//            </div>
//         )
//       }
// }
   


import DatePicker, { DateObject, getAllDatesInRange } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import React from 'react'
import { useState } from 'react'


function ProgressTracker() {
  const [dates, setDates] = useState([])
  const [allDates, setAllDates] = useState([])
  return(
    <div>
  <DatePicker
    range
    calendarPosition="top-left"
    fixMainPosition
    value={dates}
    minDate={new DateObject().toFirstOfMonth()}
    maxDate={new DateObject().toLastOfMonth()}
    onChange={dateObjects => {
      setDates(dateObjects)
      setAllDates(getAllDatesInRange(dateObjects))
    }}
    plugins={[
      <DatePanel eachDaysInRange />
    ]}
  />
  {dates.length > 1 &&
    <div>
      <h5>
        All Dates between {dates[0].format()} and {dates[1].format()}:
      </h5>
      <ul>
        {allDates.map((date, index) => <li key={index}>{date.format()}</li>)}
      </ul>
    </div>
  }
</div> 
  )
}



export default ProgressTracker