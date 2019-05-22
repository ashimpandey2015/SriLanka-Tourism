import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import colombo from './img/activity.jpg';

export class colomboActivity extends Component{
   
   back = e => {
    e.preventDefault();
    this.props.history.push(`/`);
}

   
    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Activities"/>
             
            <br/>
             <div>
             <img src={colombo}   />
             <br/>
             <h4>Address: No. 405 old kottawa road,udahamulla,nugegoda</h4>
             <h4> Phone : 0112834450</h4>
             <h4>Activities: Hiking, Surfing, Diving, Snorkling</h4>
             
             <h4>Website </h4> http://www.srilanka.travel/travel-agents
            </div>
            <br/>
             <br/>
             
             <RaisedButton
            label="Back"
            primary={true}
            styles = {styles.button}
            onClick ={this.back}
            />
             
            </React.Fragment>
        </MuiThemeProvider>
      )  
    }
}


const styles = {
    button: {
        margin: 15
    }   
}



export default colomboActivity