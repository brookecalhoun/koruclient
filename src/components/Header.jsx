import React from 'react';
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

function Header(){
    return(
        <div className='header'>
           <span className='inlineheader'> 
                <span className='headerlinks'>
                <Link to='/login'> login </Link> &nbsp;
                <Link to='/signup'> sign-up </Link> &nbsp;
                <Link to='/'> home </Link> &nbsp;
                <Link to='/about'> about </Link> &nbsp;
                <Link to='/progress-tracker'> progress tracker </Link> &nbsp;
                <Link to='/things-to-do'> things to do </Link> &nbsp;
                <Link to='/encouragement'> encouragement </Link> &nbsp;
                <Link to='/journal'> journal </Link> &nbsp;
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        resources
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/mental-health-resources">mental health resources</Dropdown.Item>
                        <Dropdown.Item href="/addiction-resources">addiction resources</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                </span>
            </span>
        </div>
    )
}

export default Header
