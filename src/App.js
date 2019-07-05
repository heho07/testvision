import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Camera  , { FACING_MODES, IMAGE_TYPES }  from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      front:true,
      mirror:false,
    }
  }

  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
     console.log(FACING_MODES);
  }

  handleClick(){
    this.setState({
      front:!this.state.front,
      //mirror: !this.state.mirror,
      mirror:false,
    });
  }
 
  render () {
    let env = this.state.front ? FACING_MODES.ENVIRONMENT : FACING_MODES.USER;

    return (
      <div className="App">
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
           idealFacingMode = {env}
           isImageMirror = {this.state.mirror}
        />
        <button onClick = {() => this.handleClick()}>Change camera front/end</button>
      </div>
    );
  }
}

export default App;
