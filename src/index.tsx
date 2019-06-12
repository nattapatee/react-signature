import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import './styles.css'
import SignatureCanvas from 'react-signature-canvas'
type State = {
  trimmedDataURL: any
}
class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      trimmedDataURL: null
    };
    
  }
  sigPad: any = {}

  clear = () => {
    this.sigPad.clear()
  }
  trim = () => {
    this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png')})
  }
  render() {
    let {trimmedDataURL} = this.state
    return ( 
      <div className="container">
         <div className="sigContainer">
    <SignatureCanvas ref={(ref) => { this.sigPad = ref }} penColor='green'
    canvasProps={{ className: 'sigPad'}} />
    </div>
    <div>
        <button className="buttons" onClick={this.clear}>
          Clear
        </button>
        <button className="buttons" onClick={this.trim}>
          Trim
        </button>
      </div>
      {trimmedDataURL
        ? <img className="sigImage"
          src={trimmedDataURL} />
        : null}
    </div>
    )
  }
}

render(<App />, document.getElementById('root'))