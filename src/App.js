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

// import React, { Component } from 'react';
//
// import ReactDOM from 'react-dom';


// class App10 extends React.Component{
//     constructor(){
//         super();
//         this.state = {a : '', b: ''}
//     }
//
//     updateInput(){
//         this.setState({
//                 // a: e.target.value,
//                 // b: e.target.value
//             // a: this.a.value,
//             // a: ReactDOM.findDOMNode(this.a).value,
//             a: this.a.refs.input.value,
//             b: this.refs.b.value
//             })
//     }
//
//     render(){
//         return(
//             <div>
//                 <Input
//                     ref={component => this.a = component}
//                     updateInput={this.updateInput.bind(this)}
//                 /> {this.state.a}
//                 <br/>
//                 <input
//                     ref="b"
//                     type="text"
//                     onChange={this.updateInput.bind(this)}
//                 />{this.state.b}
//             </div>
//         )
//     }
//
//
// }
//
// class Input extends React.Component{
//     render(){
//         return(
//             <div>
//                 <input ref="input" type="text" onChange={this.props.updateInput}/>
//             </div>
//         )
//     }
// }
//
// export default  App10

////////////////////////////////////////////////////////////////////////////////////////
////   Lesson 12 Manage React Component State with Lifecycle Methods ([componentWillMound][componentDidMound][componentWillUnmount])
////////////////////////////////////////////////////////////////////////////////////////

// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
//
//
// class App12 extends React.Component{
//   constructor(){
//       super();
//       this.state = {val: 0}
//       this.update = this.update.bind(this);
//   }
//
//   update(){
//       this.setState({val : this.state.val + 1 })
//   }
//
//   componentWillMount(){
//       console.log("componentWillMount");
//       this.setState({m: 2});
//   }
//
//   render(){
//       console.log("render")
//       return(
//           <div>
//                 <button onClick={this.update}>{this.state.val + this.state.m}</button>
//           </div>
//       )
//   }
//
//   componentDidMount(){
//       console.log("componentDidMount");
//
//       this.inc = setInterval(this.update, 500);
//
//   }
//
//   componentWillUnmount(){
//     console.log("componentWillUnmount");
//     // clearInterval(this.inc);
//   }
//
// }
//
// class Wrapper extends React.Component{
//     mount(){
//         ReactDOM.render(<App12 />, document.getElementById('test')) //Mount a react component to the dom
//     }
//     unMount(){
//         ReactDOM.unmountComponentAtNode(document.getElementById('test')) // UnMount a component to the dom
//     }
//
//     render(){
//         return(
//             <div>
//                 <button onClick={this.mount.bind(this)}>Mount</button>
//                 <button onClick={this.unMount.bind(this)}>UnMount</button>
//                 <div id="test"></div>
//             </div>
//         )
//     }
// }
//
// export default Wrapper;




////////////////////////////////////////////////////////////////////////////////////////
////   Lesson 13 Control React Component Updates When New Props Are Received
////////////////////////////////////////////////////////////////////////////////////////
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
//
// class App13 extends React.Component{
//     constructor(){
//         super();
//         this.state = {increasing: false};
//     }
//
//     update(){
//          ReactDOM.render(
//              <App13 val={this.props.val + 1} />, document.getElementById('root')
//          );
//     }
//
//     componentWillReceiveProps(nextProps){
//         this.setState({increasing: nextProps.val > this.props.val})
//     }
//
//     shouldComponentUpdate(nextProps, nextState){
//         return nextProps.val % 2; // prevent re render
//     }
//
//     render(){
//         console.log(this.state.increasing)
//         return(
//             <div>
//                 <button onClick={this.update.bind(this)}>{this.props.val}</button>
//                 <p>{this.state.increasing}</p>
//             </div>
//         )
//     }
//     componentDidUpdate(prevProps, prevState){
//         console.log(`prevProsp: ${prevProps.val}`)
//     }
// }
//
// App13.defaultProps = {val : 0}
//
// export default App13;




////////////////////////////////////////////////////////////////////////////////////////
////   Lesson 14 Use map to Create React Components from Arrays of Data
////////////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react';
//
// class App14 extends React.Component{
//     constructor(){
//         super();
//         this.state = {items: []}
//     }
//     componentWillMount(){
//         fetch('http://swapi.co/api/people/?format=json')
//             .then( response => response.json())
//             .then( ({results: items}) => this.setState({items}))
//     }
//
//
//     // Method to get input value to apply to filter
//     filter(e){
//         this.setState({filter: e.target.value})
//     }
//
//     render(){
//         let items = this.state.items;
//
//         if(this.state.filter){
//             items = items.filter( item =>
//             item.name.toLowerCase()
//                 .includes(this.state.filter.toLowerCase()))
//         }
//         return(
//             <div>
//                 <input type="text"
//                 onChange={this.filter.bind(this)}/>
//                 {items.map(item =>
//                     <Person key={item.name} person={item} />
//                 )}
//             </div>
//         )
//     }
// }
//
// const Person = (props) => <h4>{props.person.name}</h4>
//
// export default App14;






////////////////////////////////////////////////////////////////////////////////////////
////   Lesson 15 Compose React Component Behavior with Higher Order Components
////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
//
// const HOC = (InnerComponent) => class extends React.Component {
//     constructor(){
//         super();
//         this.state = {count: 0}
//     }
//
//     update(){
//         this.setState({count: this.state.count + 1})
//     }
//
//     componentWillMount(){
//         console.warn("Is mount")
//     }
//     render(){
//         return(
//             <InnerComponent
//                 {...this.props} // to get prosp for child component [displayed btn and label text]
//                 {...this.state} // get state for child component to increment
//                 update={this.update.bind(this)}
//             />
//         )
//     }
// }
//
//
//
// class App15 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Button>Button</Button>
//                 <hr/>
//                 <LabelHOC>label</LabelHOC>
//             </div>
//         )
//     }
// }
//
// const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>) // Here is used reference without this
//
//
// class Label extends React.Component{
//     componentWillMount(){
//         console.warn("Label will mount")
//     }
//     render(){
//         return(
//             <label onMouseOver={this.props.update}>{this.props.children} - {this.props.count}</label> // Here is using reference with this
//         )
//     }
// }
//
// const LabelHOC = HOC(Label);
//
// export default App15;



////////////////////////////////////////////////////////////////////////////////////////
////   Lesson 16-17 Build a JSX Live Compiler as a React Component
////////////////////////////////////////////////////////////////////////////////////////
// import React  from 'react';
//
// import './App.css';
//
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             input: '/* Input your html here*/',
//             output: '',
//             err: ''
//         }
//     }
//
//     update(e){
//         let code = e.target.value;
//         try{
//             this.setState({
//                 output: window.Babel
//                     .transform(code, {presets: ['es2015', 'react']})
//                     .code,
//                 err: ''
//             })
//         }
//         catch(err) {
//             this.setState({err: err.message})
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <header>{this.state.err}</header>
//                 <div className="container">
//                     <textarea
//                         onChange={this.update.bind(this)}
//                         defaultValue={this.state.input}
//                     />
//                     <pre>
//                         {this.state.output}
//                     </pre>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default App;





////////////////////////////////////////////////////////////////////////////////////////
////   Lesson 18 Understand React.Children Utilities Children.[forEach][map][toArray][only]
////////////////////////////////////////////////////////////////////////////////////////

// import React  from 'react';
//
// class App extends React.Component{
//     // constructor(){
//     //     super();
//     // }
//
//     render(){
//         return(
//             <Parent>
//                 <div className="childA"></div>
//                 <div className="childB"></div>
//             </Parent>
//         )
//     }
// }
//
// class Parent extends React.Component {
//     render(){
//         // It work when is many children
//         // let items = this.props.children.map(child => child); // If children is one would be a error map is not a function
//         // console.log(items);
//
//         // It work when one or many children
//         // let items = React.Children
//         //     .map(this.props.children, child => child);
//
//
//         // let items = React.Children.toArray(this.props.children);
//
//         // let items = React.Children
//         //     .forEach(this.props.children, child => console.log(child.props.className))
//
//         // Accept just to be just one element
//         // let items = React.Children.only(this.props.children);
//
//         console.log(items);
//         return null
//     }
// }
//
//
// export default App;




////////////////////////////////////////////////////////////////////////////////////////
////   Lesson 19 Use React.cloneElement to Extend Functionality of Children Components
////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';

class App19 extends React.Component{
    render(){
        return(
            <div>
                <Buttons>
                    <button value="A">A</button>
                    <button value="B">B</button>
                    <button value="C">C</button>
                </Buttons>
            </div>
        )
    }
}

class Buttons extends React.Component{
    constructor(){
        super();
        this.state = {
            selected: 'None'
        }
    }

    selectItem(selected){
        this.setState({selected})
    }

    render(){
        let fn = child =>
            React.cloneElement(child, {
                onClick: this.selectItem.bind(this, child.props.value) // extended functional of children component
            });

        let items = React.Children.map(this.props.children, fn);
        return(
            <div>
                <h2>You have Selected: {this.state.selected}</h2>
                {items}
            </div>
        )
    }
}


export default App19;