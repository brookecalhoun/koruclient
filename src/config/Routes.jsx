import React from 'react';
import Homepage from '../components/Homepage';
import { Switch, Route } from 'react-router-dom';
import JournalModel from '../models/JournalModel'
import About from '../components/About'
import Journal from '../components/Journal'
import AddictionResources from '../components/Resources/AddictionResources';
import MentalHealthResources from '../components/Resources/MentalHealthResources';
import ProgressTracker from '../components/Progress';
import Activity from '../components/Activity';
import Encouragement from '../components/Encouragement';
// import SignupPage from '../pages/SignupPage';
// import LoginPage from '../pages/LoginPage'


function Routes(){
  
    return(
        <Switch>

        <Route exact path='/' component={Homepage}/>
        
        <Route path='/about' component={About} />

        <Route path='/journal' component={Journal} />
        
        <Route path='/addiction-resources' component={AddictionResources} />
        
        <Route path='/mental-health-resources' component={MentalHealthResources} />

        <Route path='/progress-tracker' component={ProgressTracker} />
        
        <Route path='/things-to-do' component={Activity} />

        <Route path='/encouragement' component={Encouragement} />

        {/* <Route path='/signup' render={(props) => <SignupPage {...props} /> } />

        <Route path ='/login' render={(props) => <LoginPage {...props} /> } /> */} */

      </Switch>
        
    )
}

export default Routes;