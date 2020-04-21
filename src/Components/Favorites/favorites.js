import React, { Component, } from 'react';
import { TableContainer, TableHead, TableRow, TableBody, Paper, Table, TableCell } from '@material-ui/core';

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
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><h2>Saved Missions</h2></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {newData.map(fav => {
                                    return (
                                        <TableRow>
                                            <TableCell key={fav.length}>
                                                {fav}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}

                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        )
    }
}
export default Favorites