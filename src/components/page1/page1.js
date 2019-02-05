import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// error: link not capitalized or closed
// error: curly brackets used instead of parentheses
class page1 extends Component {
    render() {
        return (
            <div>
                <h1>Page 1</h1>
                <div>
                    <p>You should be able to link back to home, right?</p>
                </div>
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

// error: export name doesnt match function name
export default page1
