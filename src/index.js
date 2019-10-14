import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay'; 
import Spinner from './Spinner';

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     // this is the only time we do direct assignment with this.state
    //     this.state = {lat:null,errorMessage:''}; // initial state
        
    // 
    state = {lat:null,errorMessage:''}; // another way of initailaize state without constructor

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            // in order to get response from this or get some info about where that user is located we have to pass in two separate  function callbacks.
            position => {
                // to update our state object we call setState
                this.setState({lat:position.coords.latitude})
            }, // get called when successfully get user location
            err => {
                this.setState({errorMessage: err.message});
            },
            
        );
    }


    renderContent(){
        if(this.state.errorMessage && !this.state.lat)
        {
           return <div> Error: {this.state.errorMessage}</div>

        }
        if(!this.state.errorMessage && this.state.lat)
        {
            // showing state lat as props lat   
           return <SeasonDisplay lat={this.state.lat}/>;
           // return <Child component propname = {this.state.state_object_property}>
        }
        return <Spinner message="Please accept location request"/>;
    }

    render(){
        return (
            <div> {this.renderContent()}</div>
           )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'))