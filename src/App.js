import React from 'react';
import './App.css';
import {Nav, Carousel, Box, OvCont, Video, Amenities, Plans, Offer, Rates, Sales} from './Components/index'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }
  render(){
    return(
      <Box>
        <Nav />
        <Carousel />
        <OvCont />
        <Amenities />
        <Plans />
        <Offer />
        <Rates />
        <Sales />
      </Box>
    )
  }
}

export default App;
