import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/footer'
import Grid from '@material-ui/core/Grid'
import moment from 'moment';
class Countdowns extends Component {
    state = {
        time: 0,
        clock: '',
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    }
    componentDidMount = () => {
        localStorage.setItem('info', "Saved missions will go here!")
        axios.get('https://api.spacexdata.com/v3/launches/next')
            .then(res => {
                this.displayRes(res.data)
            })
            .catch(err => console.log(err))
        this.interval = setInterval(() => {
            const { timeFormat } = this.props;
            const then = moment(this.state.time, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    displayRes = data => {
        this.setState({ time: data.launch_date_local })


    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <div id='countTab'>
                <Grid
                    container
                    // spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/1280px-SpaceX-Logo.svg.png' alt='logo' /><br></br><hr></hr>
                    <div>
                        <h1>Next Launch in:</h1>
                        <div className="countdown-wrapper">
                            <div className="countdown-item">
                                {days}
                                <span>days</span>
                            </div>
                            <div className="countdown-item">
                                {hours}
                                <span>hours</span>
                            </div>
                            <div className="countdown-item">
                                {minutes}
                                <span>minutes</span>
                            </div>
                            <div className="countdown-item">
                                {seconds}
                                <span>seconds</span>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <Footer />
                </Grid>
            </div>
        )
    }
}
export default Countdowns