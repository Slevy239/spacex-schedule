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


            // document.getElementById("countdown").innerHTML = days + " days " + hours + " hours "
            //     + minutes + " minutes " + seconds + " seconds ";

            document.getElementById("daysNum").innerHTML = days
            document.getElementById("hoursNum").innerHTML = hours;
            document.getElementById("minsNum").innerHTML = minutes;
            document.getElementById("secondsNum").innerHTML = seconds;



            if (distance < 0) {
                clearInterval(x);
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

                    <h2>Don't Miss the Next Launch</h2>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png' alt='logo'/>
                    <p id='countdown'></p>
                    <div className='row timeDisplay'>
                        <div id='display'>
                            <p id='daysNum' className='block'></p><hr></hr><p>Days</p>
                        </div>
                        <div id='display'>
                            <p id='hoursNum' className='block'></p><hr></hr><p>hours</p>
                        </div>
                        <div id='display'>
                            <p id='minsNum' className='block'></p><hr></hr><p>Minutes</p>
                        </div>
                        <div id='display'>
                            <p id='secondsNum' className='block'></p><hr></hr><p>Seconds</p>
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