import React from 'react'
import { Switch, Route } from 'react-router-dom'

import home from './components/home/home'
import Page1 from './components/page1/page1'
import Page2 from './components/page2/page2' //error: incorrect import
import Page3 from './components/page3/page3'

export default (
    <Switch>
        <Route exact path='/' component={home} />
        <Route path='/Page1' component={Page1} />
        <Route path='/Page2' component={Page2} />
        <Route path='/Page3' component={Page3} />
    </Switch>
)
