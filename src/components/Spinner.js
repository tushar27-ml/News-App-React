import React, { Component } from 'react'
import loader from './ajax-loader.gif'

export default class spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={loader} alt="Loading" />
            </div>
        )
    }
}
