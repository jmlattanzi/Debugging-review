import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class page3 extends Component {
    constructor() {
        super()
        this.state = {
            characters: [],
        }
    }

    // error: mismatched bracket
    // error: axios not installed
    componentDidMount() {
        axios
            .get('https://www.breakingbadapi.com/api/characters/')
            .then((response) => {
                this.setState({ characters: response.data }) // error: response incorrectly spelled
            })
    }

    render() {
        return (
            <div>
                <h1>Page 3</h1>
                {this.state.characters}
                <div>
                    <Link to='/'> Home</Link>
                </div>
            </div>
        )
    }
}

export default page3
