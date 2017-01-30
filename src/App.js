import React, { Component } from 'react';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            txt : 'this is the state txt',
            cat : 0
        }
    }

    update(e){
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

App.propTypes = {
    txt : React.PropTypes.string,
    cat : React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt : "Default text",
    cat : 1
}

const Widget = (props) =>
    <input type="text" onChange={props.update}/>

export default App;
