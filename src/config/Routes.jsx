import React from 'react';
import Homepage from '../components/Homepage';
import { Switch, Route } from 'react-router-dom';
import JournalModel from '../models/JournalModel'
import About from '../components/About'
import Journal from '../components/Journal'
import AddictionResources from '../components/resources/AddictionResources';
import MentalHealthResources from '../components/resources/MentalHealthResources'
import ProgressTracker from '../components/Progress';
import Activity from '../components/Activity';
import Encouragement from '../components/Encouragement';
import Signup from '../components/authentication/Signup'
import Login from '../components/authentication/Login'
import JournalIndex from '../components/JournalIndex';


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

        <Route path='/encouragement' component={Encouragement} />

        <Route path='/signup' render={(props) => <Signup {...props} /> } />

        <Route path ='/login' render={(props) => <Login {...props} /> } />

        <Route path ='/journal' render={(props) => <JournalIndex {...props} /> } />

      </Switch>
        
    )
}

export default Routes;