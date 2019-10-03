import React from 'react';
import '../App.css'
import Box from './box';

function video(){
    return(
        <Box>
        <div class = "container-fluid" id ='video_container'>
            <h3><span>Video</span></h3> 
            <div class="embed-responsive embed-responsive-16by9" id='video_fit'>
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
            </div>
        </div>
        <div id = "space_2"></div>
        </Box>
    )
}

export default video;