import React from 'react';
import '../App.css';
import Box from './box';

function ov_cont(){
    return(
        <Box>
        <div class = 'container-fluid' id='overview_container'>
        <h3><span>Overview</span></h3>
            <br /><br />
            <div id = "overview_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <br /><br />    
            <div class = 'row' id = 'row_container'>
            <div class = 'cols-xl-4' id = 'b1'>
                <div id = 'border_rad1'></div>
                <div id = 'tab_text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>


            <div class = 'cols-xl-4' id = 'b2'>
                <div id = "border_rad2"></div>
                <div id = 'tab_text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>


            <div class = 'cols-xl-4' id = 'b3'>
                <div id = "border_rad3"></div>
                <div id = 'tab_text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            


            
            <div class = "container-fluid" id='video_container'>
                <h3><span>Video</span></h3> 
                <br />
                <div class="embed-responsive embed-responsive-16by9" id='video_fit'>
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
            </div>


            </div>
        </div>
        <div id= 'space_2'></div>
        </Box>
    )
}



export default ov_cont;