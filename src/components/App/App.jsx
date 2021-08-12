import React, { useEffect } from 'react';
//Axios to handle our GET request to the API
import axios from 'axios'
import { BussinessPage } from '../BussinessPage/BussinessPage'
import { Home } from '../Home/Home'
//Material UI imports
import './App.css';
//React router dom imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const App = () => {
  //Define our state to store business data
  const [businessData, setBusinessData] = React.useState(0)

  //Once the component loads, run axios function to hit the API for data, save the data to the data state
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: false,
      url: "https://610bb7502b6add0017cb3a35.mockapi.io/api/v1/places"
    }).then((res) => setBusinessData(res.data))
  }, []);

  return (
    <Router>
      <Switch>
        {/* Router to set up our routing, with a home page and a places/id (based on business ID) */}
        <Route exact path="/">
          <Home businessData={businessData} />
        </Route>
        <Route path={`/places/:id`}>
          <BussinessPage businessData={businessData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
