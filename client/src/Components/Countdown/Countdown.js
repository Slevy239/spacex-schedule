import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer/footer'
import Grid from '@material-ui/core/Grid'


class Countdowns extends Component {
    state = {
        time: 0,
        clock: ''
    }
    componentDidMount = () => {
        axios.get('https://api.spacexdata.com/v3/launches/next')
            .then(res => {
                this.displayRes(res.data)
            })
            .catch(err => console.log(err))
    }
    displayRes = data => {
        this.setState({ time: data.launch_date_local })
        console.log(this.state.time)
    }

    render() {
        const countDownDate = new Date(`${this.state.time}`).getTime();

        const x = setInterval(function () {

            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("daysNum").innerHTML = days + ":";
            document.getElementById("hoursNum").innerHTML = hours + ":";
            document.getElementById("minsNum").innerHTML = minutes + ":";
            document.getElementById("secondsNum").innerHTML = seconds;

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("daysNum").innerHTML = ''
                document.getElementById("hoursNum").innerHTML = '';
                document.getElementById("minsNum").innerHTML = '';
                document.getElementById("secondsNum").innerHTML = '';

            }
        }, 1000);


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
                    <h2>Next Launch in:</h2>
                    <h2 id='small'>TOO SMALL!</h2>
                    <div id='content'>

                        <div className='row'>
                            <p id='daysNum' className='block'></p><p id='hoursNum' className='block'></p><p id='hoursNum' className='block'></p> <p id='minsNum' className='block'></p><p id='secondsNum' className='block'></p>
                        </div>

                        <div className='row words'>
                            <p id='dayL'>Days</p>
                            <p id='dayL'>hours</p>
                            <p id='dayL'>Minutes</p>
                            <p id='dayL'>Seconds</p>

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