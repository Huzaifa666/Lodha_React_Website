import React from 'react';
import '../App.css';
import Box from './box';

const carousel = () => {
return (
  <Box>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={require('../img/peach.jpg')} alt="First slide" id = "carousel_slide1" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={require('../img/warmpalepink.png')} alt="Second slide" id = "carousel_slide2"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={require('../img/blue.jpg')} alt="Third slide" id = "carousel_slide3"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div id='space_1'></div>
</Box>
)
}

export default carousel;
