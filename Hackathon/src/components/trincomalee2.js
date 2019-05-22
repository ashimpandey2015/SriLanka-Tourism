import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import PS from './img/trinco2.jpg';

export class trincomalee2 extends Component{
   
   back = e => {
    e.preventDefault();
    this.props.history.push(`/`);
}

   
    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="trinco2"/>
             <div>
             <img src={PS}   />
             <br/>
             <h4>Address: 374 Thiruganansampanthar Street, Trincomalee 31000</h4>
             <h4> Phone : 077 454 1392</h4>
             <h4>Website : https://avrotravels.com/ </h4>
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



export default trincomalee2