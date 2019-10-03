import React from 'react';
import '../App.css'
import Box from './box';

function amenities(){
    return(
        <Box>
        <div class = 'container-fluid'>
            <h3><span>Amenities</span></h3>
            <div id='space_7'></div>
            <div class = 'row' id = 'amen_content'>


                <div class = 'col-md-5' id = 'tab_1'>
                    <div class = 'row'>
                      <div class = 'col-md-4'></div>
                      <div class = 'col-md-4' id = "indoor">Indoor</div>
                    </div>

                    <div id='space_8'></div>

                    <div class = 'column' id = "amen_left">
                        <br />
                        <div class = 'cols-md-4' id = 'id1'>
                            <div id = 'image_place'></div>
                            <div id = 'text_place'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>
                        </div>

                        <br />
                        <div class = 'cols-md-4' id = 'id2'>
                            <div id = 'image_place'></div>
                            <div id = 'text_place'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>
                        </div>

                        <br />
                        <div class = 'cols-md-4' id = 'id3'>
                            <div id = 'image_place'></div>
                            <div id = 'text_place'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>
                        </div>
                    </div>
                </div>


                <div class = 'col-md-2' id = 'hello'></div>
                    
                <div class = 'col-md-5' id = 'tab_2'>
                    <div class = 'row'>
                        <div class = 'col-md-4'></div>
                        <div class = 'col-md-4' id = "indoor">Outdoor</div>
                      </div>
                      <div id='space_8'></div>
                    <div class = 'column' id='amen_right'>
                    <br />
                        <div class = 'cols-md-4' id = 'id1'>
                            <div id = 'image_place'></div>
                            <div id = 'text_place'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>
                        </div>
                    <br />
                        <div class = 'cols-md-4' id = 'id2'>
                            <div id = 'image_place'></div>    
                            <div id = 'text_place'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>
                        </div>
                    <br /> 
                        <div class = 'cols-md-4' id = 'id3'>
                            <div id = 'image_place'></div>
                            <div id = 'text_place'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p></div>
                        </div>
                    </div>
                </div>
    

            </div>
        </div>

        <div id='space_3'></div>
        </Box>
    )
}

export default amenities;