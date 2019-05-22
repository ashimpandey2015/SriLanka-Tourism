import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import kandy from './img/kandy.jpg';

export class kandyacco extends Component{
   
   back = e => {
    e.preventDefault();
    this.props.history.push(`/`);
}

   
    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Accomodation"/>
             
            <br/>
             <div>
             <img src={kandy}   />
             <br/>
             <h4>Address: Srimath Kudarathwatta Mawatha, Kandy 20000</h4>
             <h4> Phone : 0812 234 365</h4>
             <h4>Website </h4> https://www.cinnamonhotels.com/cinnamoncitadelkandy
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



export default kandyacco