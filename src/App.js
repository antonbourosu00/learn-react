import React, { Component } from 'react';


class App extends React.Component{
    // If component need to have a constructor, in constructor net to call super(); method to have access to this
    // If you want to use props in constructor you would call super(props); Otherwise you cant call props in super method
    constructor(){
        super();
        this.state = {
            txt : 'this is the state txt',
            cat : 0
        }
    }

    update(e){
        // This is the primary method you use to trigger UI updates from event handlers and server request callbacks.
        this.setState({txt: e.target.value})
    }

    render(){
        let txt = this.props.txt;
        return(
            <div>
                <h1>{txt}</h1>
                <bold>{this.props.cat}</bold>
                <h1>{this.state.txt} - {this.props.cat}</h1>
                <Widget update={this.update.bind(this)} ></Widget>
                <Widget update={this.update.bind(this)} ></Widget>
            </div>
        )
    }
}

// As your app grows, you can catch a lot of bugs with typeChecking.
App.propTypes = {
    txt : React.PropTypes.string,
    cat : React.PropTypes.number.isRequired
}

// defaultProps can be defined as a property on the component class itself, to set the default props for the class.
App.defaultProps = {
    txt : "Default text",
    cat : 1
}

// A widget component used in App component.
const Widget = (props) =>
    <input type="text" onChange={props.update}/>


export default App;
