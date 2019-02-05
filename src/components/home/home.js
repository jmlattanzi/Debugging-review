import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class home extends Component {
    constructor() {
        super()
        this.state = {
            links: ['Page1', 'Page2', 'Page3'],
        }
    }
    render() {
        // error: links is called out of state
        const mapper = this.state.links.map((e, i) => {
            return (
                <Link to={`/${e}`} key={i}>
                    {e}
                </Link>
            )
        })
        return (
            <div className='App-header'>
                <h1>React debugger, scavenger hunt!</h1>
                <img
                    src='http://getdrawings.com/img/rubber-ducky-silhouette-28.png'
                    className='App-logo'
                    alt='logo'
                />
                <p>Why does this page have no styling??</p>
                <a
                    className='App-link'
                    href='https://codepen.io/austinwc33/pen/eWGrpe'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Learn Rubber Duckie
                </a>
                {mapper}
            </div>
        )
    }
}

export default home
