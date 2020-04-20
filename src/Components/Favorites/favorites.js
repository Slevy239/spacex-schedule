import React, { Component, } from 'react';
import Card from '@material-ui/core/Card';
import Row from 'react-bootstrap/Row';
import Grid from '@material-ui/core/Grid'

class Favorites extends Component {
    state = {
        favorites: ''
    }
    componentDidMount = () => {
        const data = localStorage.getItem('info')
        this.displayData(data)

    }

    displayData = (data) => {
        console.log(data)
        this.setState({ favorites: data })
        // const arr = this.state.favorites.split(',')
        // console.log(arr)
        // this.setState
    }

    render() {
        console.log(this.state.favorites)
        const newData = this.state.favorites.split(',')

        return (
            <div>
                <h2>Favorite Launches</h2>
                <div id='daysNum' className='hide'></div>
                <div id='hoursNum' className='hide'></div>
                <div id='minsNum' className='hide'></div>
                <div id='secondsNum' className='hide'></div>

                <br></br>
                <div>
                    <Row>
                        {newData.map(fav => {
                            return (
                                <Grid
                                    container
                                    // spacing={0}
                                    direction="column"
                                    alignItems="center"
                                    justify="center"
                                >
                                    <div>{fav}</div>
                                </Grid>

                            )
                        })}
                    </Row>
                </div>
            </div>
        )
    }
}
export default Favorites