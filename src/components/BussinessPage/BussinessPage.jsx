import React from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    logo: {
        width: "40vh",
    },
    bussinessPageContainer: {
        width: "80%",
        margin: "auto",
        display: 'flex',
        padding: '20px',
        justifyContent: "space-around",
        backgroundColor: "rgb(240,234,214)"
    },
    logoContainer: {
        textAlign: 'center',

    },
    hourList: {
        listStyle: "none",
        paddingLeft: 0
    },
    bussinessInformationContainer: {
        textAlign: 'center'
    },
    bussinessInformationList: {
        padding: 0
    }

})


export const BussinessPage = ({ businessData }) => {
    //Material UI classes
    const classes = useStyles();
    //get the business ID from React Router Dom
    const { id } = useParams()
    //create a variable with just the current business data by taking the ID and subtracting one, to get the proper business index
    const currentBusinessData = businessData[id - 1]
    return (
        <div >
            <Paper className={classes.bussinessPageContainer}>
                <div className={classes.logoContainer}>
                    <Link to={`/`}>Return Home</Link>
                    <h1>{currentBusinessData?.name}</h1>
                    <img src={currentBusinessData?.logo_url} className={classes.logo} alt={currentBusinessData?.name} />
                </div>
                <div className={classes.bussinessInformationContainer}>
                    <h2>Business Information</h2>
                    <ul className={classes.bussinessInformationList}>
                        <li><h4>Business Address: </h4>{currentBusinessData?.address}</li>
                        <li><h4>Website: </h4><a href={currentBusinessData?.website_url} target="_blank" rel="noreferrer">{currentBusinessData?.website_url}</a></li>
                        <li><h4>Hours</h4>
                            <ul className={classes.hourList}>
                                <li>Monday: {currentBusinessData?.hours.Monday}</li>
                                <li>Tuesday: {currentBusinessData?.hours.Tuesday}</li>
                                <li>Wednesday: {currentBusinessData?.hours.Wednesday}</li>
                                <li>Thursday: {currentBusinessData?.hours.Thursday}</li>
                                <li>Friday: {currentBusinessData?.hours.Friday}</li>
                                <li>Saturday: {currentBusinessData?.hours.Saturday}</li>
                                <li>Sunday: {currentBusinessData?.hours.Sunday}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Paper>
        </div>
    )
}
