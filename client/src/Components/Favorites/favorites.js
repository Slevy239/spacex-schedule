import React, { Component, } from 'react';
import { TableContainer, TableHead, TableRow, TableBody, Paper, Table, TableCell } from '@material-ui/core';

class Favorites extends Component {
    state = {
        favorites: '',
        items: ''
    }
    componentDidMount = () => {
        const data = localStorage.getItem('info')
        this.displayData(data)

    }

    displayData = (data) => {
        console.log(data)

        this.setState({ favorites: data })
        if (localStorage.getItem("info") === '' || localStorage.getItem("info") === 'Saved missions will go here!') {
            document.querySelector("#delBtn").style.visibility = "hidden";

        }

    }

    handleDelete = (event) => {
        const name = event.target.name
        console.log(name)
        const string = this.state.favorites
        const arr = string.split(',')
        const index = arr.indexOf(name);

        if (name === "Saved missions will go here!" || name === "") {
            console.log(arr)
            window.alert("there is nothing to delete")
        } else {

            if (arr.includes(name) && window.confirm(`Are you sure you want to delete ${name}?`)) {
                arr.splice(index, 1)
                arr.join()
                localStorage.setItem('info', arr)
                const data = localStorage.getItem('info')
                this.displayData(data)

            }
            if (arr.length === 0) {
                this.setState({ favorites: "" })
            }
        }
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
                            {localStorage.getItem('info').length < 0 &&
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Saved Missions Will go Here!</TableCell>
                                    </TableRow>
                                </TableBody>
                            }
                            <TableBody>

                                {newData.map((fav, index) => {
                                    return (
                                        <TableRow key={index} id='favRow'>
                                            <TableCell >
                                                <p id='fav'>{fav}  <button
                                                    onClick={this.handleDelete}
                                                    name={fav}
                                                    id='delBtn'
                                                >Delete</button></p>

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