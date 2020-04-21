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
    }

    render() {
        const newData = this.state.favorites.split(',')
        return (
            <div>
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
                                    <TableCell><h2 id='savedTitle'>Saved Missions</h2></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {newData.map(fav => {
                                    return (
                                        <TableRow key={fav.length}>
                                            <TableCell >
                                                <p id='fav'>{fav}</p>
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