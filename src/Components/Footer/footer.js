import React, { Component } from 'react'
import Sharing from 'react-sharing';

class Footer extends Component {
    render() {
        return (
            <div id='links'>

<Sharing
            url="https://github.com/Slevy239"
            title="react-sharing"
            sites={[
              'google',
              'twitter',
              'linkedin',
              'facebook',
            ]}
          />                
            </div >
        )
    }
}
export default Footer