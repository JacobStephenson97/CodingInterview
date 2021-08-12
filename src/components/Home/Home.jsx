import React from 'react';

//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";


//Material UI Styles
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    paperContainer: {
        width: '80%',
        margin: 'auto',
        backgroundColor: "rgb(240,234,214)"
    },
    businessListTitle:
    {
        padding: 20
    }
});


export const Home = ({ businessData }) => {
    //Define classes variable for Material UI
    const classes = useStyles();


    return (
        <div className="App">
            {/* Material UI table, with our fields as headings */}
            <TableContainer component={Paper} className={classes.paperContainer}>
                <h1 className={classes.businessListTitle}>Business List</h1>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow className={classes.tableHeadings}>
                            <TableCell align="center">Business ID</TableCell>
                            <TableCell align="center">Business Name</TableCell>
                            <TableCell align="center">Website</TableCell>
                            <TableCell align="center">Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Use the map function on our business Data to create a filled table using the data we recieved from the API */}
                        {/* Check to make sure businessData exists before rendering, if not render "Loading Businesses" */}
                        {businessData ? businessData.map((businessData) => (
                            <TableRow key={businessData.id}>
                                <TableCell align="center">{businessData.id}</TableCell>
                                <TableCell align="center"><Link to={`/places/${businessData.id}`}>{businessData.name}</Link></TableCell>
                                <TableCell align="center">{businessData.website_url}</TableCell>
                                <TableCell align="center">{businessData.address}</TableCell>
                            </TableRow>
                        ))
                            : <span>Loading Businesses</span>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
