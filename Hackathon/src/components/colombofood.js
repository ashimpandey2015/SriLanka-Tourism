import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import susiko from './img/susiko.jpg';

export class colombofood extends Component{
   
   back = e => {
    e.preventDefault();
    this.props.history.push(`/`);
}

next = e => {
    e.preventDefault();
    this.props.history.push(`colombofood2`);
}
   
    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Food"/>
             
            <h1>Resturants in Colombo</h1>

            <br/>
             <div>
             <img src={susiko}   />
             <br/>
             <h4>Address: Avissawella Rd, Pannipitiya 10230</h4>
             <h4> Phone : 0112 516 038</h4>
             <h4>Website </h4> http://www.sweets.lk/supplier/susiko-bakers
            </div>
            <br/>
             <br/>
             
             <RaisedButton
            label="Next"
            primary={true}
            styles = {styles.button}
            onClick ={this.next}
            />
             
             <RaisedButton
            label="Back"
            primary={false}
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



export default colombofood