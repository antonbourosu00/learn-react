// import React, { Component } from 'react';
//
//
// class App extends React.Component{
//     // If component need to have a constructor, in constructor net to call super(); method to have access to this
//     // If you want to use props in constructor you would call super(props); Otherwise you cant call props in super method
//     constructor(){
//         super();
//         this.state = {
//             txt : 'this is the state txt',
//             cat : 0,
//             currentState: '-----'
//         }
//         this.updateState = this.updateState.bind(this)
//     }
//
//     update(e){
//         // This is the primary method you use to trigger UI updates from event handlers and server request callbacks.
//         this.setState({txt: e.target.value})
//     }
//
//     updateState(e){
//         this.setState({currentState: e.type})
//     }
//
//     render(){
//         let txt = this.props.txt;
//         return(
//             <div>
//                 <h1>{txt}</h1>
//                 <bold>{this.props.cat}</bold>
//                 <h1>{this.state.txt} - {this.props.cat}</h1>
//                 <Widget update={this.update.bind(this)} ></Widget>
//                 <Widget update={this.update.bind(this)} ></Widget>
//
//                 <div>
//                     <h4>Component in another component</h4>
//                     <Button>I <Heart/> React</Button>
//                 </div>
//
//                 <div>
//                     <h4>Validation</h4>
//                     <Title text="asasddasd" />
//                 </div>
//                 <div>
//                     <h4>Get state</h4>
//                     <textarea
//                         onKeyPress={this.updateState}
//                         onKeyDown={this.updateState}
//                         onMouseOver={this.updateState}
//                         onFocus={this.updateState}
//                         cols="30"
//                         rows="10"/>
//                     <p>{this.state.currentState}</p>
//                 </div>
//             </div>
//
//         )
//     }
// }
//
// // As your app grows, you can catch a lot of bugs with typeChecking.
// App.propTypes = {
//     txt : React.PropTypes.string,
//     cat : React.PropTypes.number.isRequired
// }
//
// // defaultProps can be defined as a property on the component class itself, to set the default props for the class.
// App.defaultProps = {
//     txt : "Default text",
//     cat : 1
// }
//
// const Title = (props) => <h1>Text: {props.text}</h1>
//
// Title.propTypes = {
//     text(props, propName){
//         if(!(propName in props)){
//             return new Error('missing ${propName}')
//         }
//         if(props[propName].length < 6){
//             return new Error('Length must be bigger six')
//         }
//     }
// }
//
//
//
// // A widget component used in App component.
// const Widget = (props) =>
//     <input type="text" onChange={props.update}/>
//
// // button component
// const Button = (props) => <button>{props.children}</button>
//
// // Heart uses in app component
// class Heart extends React.Component {
//     render(){
//         return <span>&hearts;</span>
//     }
// }
//
//
// export default App;

////////////////////////////////////////////////////////////////////////////////////////
////   Lesson 9 Normalize Events with Reacts Synthetic Event System
////////////////////////////////////////////////////////////////////////////////////////

// import React, {Component } from 'react';
//
// class App9Event extends React.Component{
//
//     //Constructor
//     constructor(){
//         super();
//         this.state = {
//             currentState: 'null'
//         }
//         this.updateState = this.updateState.bind(this)
//     }
//
//     // Method
//     updateState(e){
//         this.setState({currentState: e.type});
//     }
//
//     render(){
//         return(
//             <div>
//                 <textarea
//                     onKeyPress={this.updateState}
//                     onCopy={this.updateState}
//                     onPaste={this.updateState}
//                     onCut={this.updateState}
//                     cols="30"
//                     rows="10" />
//                 <p>{this.state.currentState}</p>
//             </div>
//         )
//     }
//
// }
//
// export default App9Event;




////////////////////////////////////////////////////////////////////////////////////////
////   Lesson 10 Use React ref to Get a Reference to Specific Components
////////////////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';

import ReactDOM from 'react-dom';


class App10 extends React.Component{
    constructor(){
        super();
        this.state = {a : '', b: ''}
    }

    updateInput(){
        this.setState({
                // a: e.target.value,
                // b: e.target.value
            // a: this.a.value,
            // a: ReactDOM.findDOMNode(this.a).value,
            a: this.a.refs.input.value,
            b: this.refs.b.value
            })
    }

    render(){
        return(
            <div>
                <Input
                    ref={component => this.a = component}
                    updateInput={this.updateInput.bind(this)}
                /> {this.state.a}
                <br/>
                <input
                    ref="b"
                    type="text"
                    onChange={this.updateInput.bind(this)}
                />{this.state.b}
            </div>
        )
    }


}

class Input extends React.Component{
    render(){
        return(
            <div>
                <input ref="input" type="text" onChange={this.props.updateInput}/>
            </div>
        )
    }
}

export default  App10