import React from 'react';
import Homepage from '../components/Homepage';
import { Switch, Route } from 'react-router-dom';
import About from '../components/About'
import Journal from '../components/Journal'
import AddictionResources from '../components/AddictionResources';
import MentalHealthResources from '../components/MentalHealthResources';
import ProgressTracker from '../components/Progress';
import Activity from '../components/Activity';
import Encouragement from '../components/Encouragement';
import JournalIndex from '../components/JournalIndex';
import Profile from '../components/Profile';
import ProtectedRoute from '../components/authentication/ProtectedRoute'


function Routes(){
  
    return(
        <Switch>

        <Route exact path='/' component={Homepage}/>

        <Route path='/create' render={(props) => <Journal {...props} />} />
        
        <Route path='/about' component={About} />

        <Route path='/addiction-resources' component={AddictionResources} />
        
        <Route path='/mental-health-resources' component={MentalHealthResources} />

        <Route path='/progress-tracker' component={ProgressTracker} />
        
        <Route path='/things-to-do' component={Activity} />

        <ProtectedRoute path='/profile' component={Profile} />

        <Route path='/encouragement' component={Encouragement} />

        <Route path ='/journal' render={(props) => <JournalIndex {...props} /> } />

      </Switch>
        
    )
}

export default Routes;