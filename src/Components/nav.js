import React from 'react';
import '../App.css';

const nav = () => {
    return(

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div id='number'><i class="fa fa-phone" aria-hidden="true"></i>+91 00000 000/ 00000 000 000</div>
        <a class="navbar-brand" href="#"></a>
        <div class = 'row'>
          <div id = 'logo' class = 'col-md-12'>
            <img src = {require('../img/download.jpg')} alt="Lodha" />
          </div>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#CarouselIndicators" id = "text_modify">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#overview_container" id = "text_modify">Overview</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#video_container" id = "text_modify">Video</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#amen_content" id = "text_modify">Amenities</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#plans_images" id = "text_modify">Photos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#rates_table" id = "text_modify">Rates</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#sales_content" id = "text_modify">Contact Sales</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default nav;