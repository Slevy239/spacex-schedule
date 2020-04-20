import React, { Component } from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


class Footer extends Component {
    render() {
        return (
            <div id='links'>
                {/* <BottomNavigation > */}
                <a href='https://www.facebook.com'id='fb'>
                    <FacebookIcon  />
                </a>
                    ||
                <a href='https://www.twitter.com' id='fb'>
                    <TwitterIcon id='twitter' />
                </a>
                    ||
                <a href='https://www.reddit.com'id='fb'>
                    <RedditIcon id='reddit' />
                </a>
                    ||
                <a href='https://www.whatsapp.com' id='fb'>
                    <WhatsAppIcon id='whatsapp' />
                </a>
                {/* </BottomNavigation> */}
            </div >
        )
    }
}
export default Footer