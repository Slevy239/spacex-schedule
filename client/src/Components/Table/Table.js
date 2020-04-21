import React, { Component, } from 'react';
import axios from 'axios'
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';
import { TableContainer, TableHead, TableRow, TableBody, Paper, Table, TableCell } from '@material-ui/core';

class Hover extends Component {
    state = {
        result: [],
        saved: [],

    }
    componentDidMount = () => {
        axios.get('https://api.spacexdata.com/v3/launches/upcoming')
            .then(res => {
                this.displayRes(res.data)
            })
            .catch(err => console.log(err))
        // localStorage.setItem('info', this.state.saved)
    }

    displayRes = data => {
        this.setState({ result: data })
        console.log(this.state.result)
    }

    handleSave = event => {
        const name = event.target.name
        this.state.saved.push(name)

        localStorage.setItem('info', this.state.saved)
        this.setState({ saved: this.state.saved })

    }

    render() {

        return (
            <div>
                <h2>Upcoming Launches</h2>
                <div id='daysNum' className='hide'></div>
                <div id='hoursNum' className='hide'></div>
                <div id='minsNum' className='hide'></div>
                <div id='secondsNum' className='hide'></div>
                <br></br>
                <TableContainer id='table' component={Paper}>
                    <Table bordered='true' hover='true' size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell id='head'>Mission</TableCell>
                                <TableCell id='head'>Site</TableCell>
                                <TableCell id='head'>Date</TableCell>
                                <TableCell id='head'></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.result.map(results => {
                                return (
                                    <TableRow className='wrapper' key={results.links.details}>
                                        <TableCell align='left'>{results.mission_name}</TableCell>
                                        <TableCell >{results.launch_site.site_name_long}</TableCell>
                                        <TableCell ><Moment unix format="MM/DD/YYYY">{results.launch_date_unix}</Moment></TableCell>
                                        <TableCell><Button className='button' variant='secondary'
                                            onClick={this.handleSave}
                                            site={results.launch_site.site_name}
                                            name={results.mission_name}
                                        // date={results.launch_date_unix}
                                        >Save</Button></TableCell>
                                    </TableRow>
                                )
                            })}

                        </TableBody>

                    </Table>
                </TableContainer>
            </div >
        )
    }
};
export default Hover