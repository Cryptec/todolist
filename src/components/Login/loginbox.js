import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import LoginForm from './loginform'
import RegisterForm from './registerform'

import '../../css/loginbox.css';
import '../../css/colors.css';


class Loginbox extends Component {


    render () {

       
        return(
          <div className="loginbox">
                
                    <Tabs>
                        <TabList>
                        <div>
                            <Tab className="loginButton" type="submit"> Login </Tab>
                            <Tab className="registerButton">Register</Tab>
                        </div>
                        </TabList>
                        
                        <TabPanel>
                            <LoginForm/>
                        </TabPanel>
                        <TabPanel>
                            <RegisterForm/>
                        </TabPanel>

                    
                      
           </Tabs>
                
              

          </div>
          
        )
    }

    
}

export default Loginbox