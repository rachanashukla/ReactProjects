
import React from 'react';
import MouseWithCat from './Cat';

// The <ReusableMouseTracker> component encapsulates the behavior we need...
class ReusableMouseTracker extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
          {/* ...but how do we render something other than a <p>? */}
          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        </div>
      );
    }
  }
  
  class MouseTracker extends React.Component {
    render() {
      return (
        <>
          <h1>Move the mouse around!</h1>
          <MouseWithCat />
        </>
      );
    }
  }
  export default ReusableMouseTracker;