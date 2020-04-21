import React, { Component, } from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Moment from 'react-moment';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'



class Hover extends Component {
    state = {
        result: [],
        saved: []

    }
    componentDidMount = () => {
        axios.get('https://api.spacexdata.com/v3/launches/upcoming')
            .then(res => {
                this.displayRes(res.data)
            })
            .catch(err => console.log(err))

    }
    displayRes = data => {
        this.setState({ result: data })
        console.log(this.state.result)
    }
    handleSave = event => {
        const name = event.target.name


        this.setState({ saved: [...this.state.saved, name] })
        console.log(this.state.saved)
        localStorage.setItem('info', this.state.saved)
        // localStorage.setItem("site", site)
        // localStorage.setItem("date", date)

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
                <Row id='table'>
                    <Table bordered hover size="sm">
                        <thead>
                            <tr>
                                <th id='head'>Mission</th>
                                <th id='head'>Site</th>
                                <th id='head'>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.result.map(results => {
                                return (
                                    <tr className='wrapper' key={results.flight_number}>
                                        <td align='left'>{results.mission_name}</td>
                                        <td >{results.launch_site.site_name}</td>
                                        <td ><Moment unix format="MM/DD/YYYY">{results.launch_date_unix}</Moment></td>
                                        <td><Button className='button' variant='secondary'
                                            onClick={this.handleSave}
                                            name={results.mission_name}
                                            site={results.launch_site.site_name}
                                        // date={results.launch_date_unix}
                                        >Save</Button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>
            </div >
        )
    }
};
export default Hover