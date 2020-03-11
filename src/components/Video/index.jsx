import React, { Component } from 'react'
import Player from "react-player";


export class Video extends Component {
    render() {
        return (
                
            <div className="video">
            <center>   
                  <Player url="https://www.youtube.com/watch?v=Odg1BIfq60E" autoPlay muted />
                </center>
            </div>
        )
    }
}

export default Video
