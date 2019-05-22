import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import bg1 from '../components/img/bg1.jfif';
import { green100, green200 } from 'material-ui/styles/colors';
import { EditorBorderRight } from 'material-ui/svg-icons';
import './class.css';
import borderAll from 'material-ui/svg-icons/editor/border-all';
import { green300 } from 'material-ui/styles/colors';

export class activities extends Component{
   continuefood = e => {
       e.preventDefault();
       this.props.history.push(`/colomboActivity`);
   }

   back = e => {
    e.preventDefault();
    this.props.history.push(`/`);
}

   
    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Activities"/>
             
             {/* <br/>
             
             <img src={bg1}   />
             <br/> */}

             <h1>Pick Your Location</h1>
             <br/>
            <RaisedButton 
            label=" Colombo   "
            primary={true}
            styles = {styles.button}
            onClick={this.continuefood}
            />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <RaisedButton 
            label="Matara"
            primary={true}
            styles = {styles.button}
            />
            <br/>
             <br/>
            <RaisedButton 
            label="Trincomalee"
            primary={true}
            styles = {styles.button}
            />

            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <RaisedButton 
            label="Bandarawela"
            primary={true}
            styles = {styles.button}
            />
            <br/>
             <br/>
            <RaisedButton 
            label="Kandy"
            primary={true}
            styles = {styles.button}
            />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <RaisedButton 
            label="Jaffna"
            primary={true}
            styles = {styles.button}
            />
            <br/>   
            <br/>
            <RaisedButton 
            label="Hikkaduwa"
            primary={true}
            styles = {styles.button}
            />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <RaisedButton 
            label="Anuradhapura"
            primary={true}
            />
            
            <br/>
            <br/>
            <br/>
            <br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            
            <RaisedButton
            label="Back"
            primary={false}
            styles = {styles.button}
            backgroundColor ={green300}
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



export default activities