import React, { Component } from 'react'
import '../css/psd.css'

const place = 'This place for pictures';

export default class Psd extends Component {

rowImg(){
    return(
        <div className="row">
            <div className="col blocks">{place}</div>
            <div className="col blocks">{place}</div>
            <div className="col blocks">{place}</div>
            <div className="col blocks">{place}</div>
            <div className="col blocks">{place}</div>
        </div>
    )
}

    render(){
        return(
            <div className="container">
            <h1>OH MY GOD! PSD IS HERE!</h1>
                <div className="overflv">
                    {this.rowImg()}
                    {this.rowImg()}
                    {this.rowImg()}
                </div>
            </div>
        )
    }
}
