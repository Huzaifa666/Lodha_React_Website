import React from 'react';
import '../App.css'
import Box from './box';

function plans(){
    return(
        <Box>
        <div class = 'container-fluid'>
        <h3><span>Plans</span></h3>
        <br />
        <div id='plans_images'>
           <div class = 'column'>
             <div class = 'col-md-12' id = 'container'>
               <div class = 'row'>
                <div class = 'col-md-2' id = 'box_S'>
                    <img src = {require('../img/img1.jpg')} alt='silver' />
                </div>
                <div class = 'col-md-2' id = 'box_S'>
                    <img src = {require('../img/img1.jpg')} alt='silver' />
                </div>
                <div class = 'col-md-2' id = 'box_S'>
                    <img src = {require('../img/img1.jpg')} alt='silver' />
                </div>
                <div class = 'col-md-2' id = 'box_S'>
                    <img src = {require('../img/img1.jpg')} alt='silver' />
                </div>
                <div class = 'col-md-2' id = 'box_S'>
                    <img src = {require('../img/img1.jpg')} alt='silver' />
                </div>
                <div class = 'col-md-2' id = 'box_S'>
                    <img src = {require('../img/img1.jpg')} alt='silver' />
                </div>
              </div>
             </div>

             <div class = 'col-md-12' id = 'container'>
                <div class = 'row'>
                    <div class = 'col-md-2' id = 'box_S'>
                      <img src = {require('../img/img1.jpg')} alt='silver' />
                    </div>
                    <div class = 'col-md-2' id = 'box_S'>
                        <img src = {require('../img/img1.jpg')} alt='silver' />
                    </div>
                    <div class = 'col-md-2' id = 'box_S'>
                        <img src = {require('../img/img1.jpg')} alt='silver' />
                    </div>
                    <div class = 'col-md-2' id = 'box_S'>
                        <img src = {require('../img/img1.jpg')} alt='silver' />
                    </div>
                    <div class = 'col-md-2' id = 'box_S'>
                        <img src = {require('../img/img1.jpg')} alt='silver' />
                    </div>
                    <div class = 'col-md-2' id = 'box_S'>
                        <img src = {require('../img/img1.jpg')} alt='silver' />
                    </div>
                  </div>  
            </div>
            
           </div>
        </div>
    </div>

    <div id = "space_4"></div>
    </Box>
    )
}

export default plans