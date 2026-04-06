import React, { Component } from 'react'

export default class Greeting extends Component {
  render() {
    return (
      <div>
         <h1> Profile</h1>

      <div className="card">
        <p><strong>Name:</strong> Noor A</p>
        <p><strong>Email:</strong> noora@thestackly.com</p>
        <p><strong>Role:</strong> Full Stack MERN Developer</p>
        <p>
          <strong>About Me:</strong>
          I am a Full Stack MERN Developer currently working at Stackly.
        </p>
      </div> 
      </div>
    )
  }
}
