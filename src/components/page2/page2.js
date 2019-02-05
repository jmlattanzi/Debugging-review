import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updateInput } from '../../ducks/reducer'

// error: component not capitalized
// error: classname in brackets not quotes
class page2 extends Component {
    constructor() {
        super()
        this.state = {
            names: [],
        }
    }

    // error: not using this.props
    submitName = () => {
        this.setState({ names: [...this.state.names, this.props.name] })
    }

    // error: extra bracket
    render() {
        const nameMap = this.state.names.map((e, i) => {
            return (
                <div key={i}>
                    <p>{e}</p>
                </div>
            )
        })
        return (
            <div>
                <h1>Page 2</h1>
                <h3>Tell us you're favorite superhero!</h3>
                <input
                    type='text'
                    name='name'
                    onChange={(e) => this.props.updateInput(e)}
                />
                <button onClick={() => this.submitName()}>Submit</button>
                {nameMap}
                <div className='bottom_links'>
                    <Link to='/'>
                        <p>Home</p>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(
    mapStateToProps,
    { updateInput }
)(page2)
