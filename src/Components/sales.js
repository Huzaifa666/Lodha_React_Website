import React from 'react';
import '../App.css'

function sales(){
    return(
        <div>
          <h3><span>Contact Sales</span></h3>
          <div id='space_6'></div>
          <div id='sales_content' class= 'container-fluid'>
              <div class = 'row'>


                  <div class = 'col-md-8' id = 'cl_1'>
                      <img src = {require('../img/pink.jpg')} alt = "Location" />
                  </div>


                  <div class = 'col-md-4' id = 'cl_2'>
                      <div id = 'form_container'>
                          
                  <form>

                  <div class="form-group">
                      <label for='Name'>Name</label>
                      <input type='text' class='form-control' id='Name' placeholder = 'Enter Name' />
                  </div>

                  <div class="form-group">
                          <label for="Email">Email</label>
                          <input type="email" class="form-control" id="Email" placeholder="Enter email" />
                  </div>

                  <div class = 'form-group'>
                          <label for="Number">Phone</label>
                          <input type='text' class='form-control' id='Number' placeholder="Enter your number" />
                  </div>

                  <div class="form-group">
                      <label for="Password">Password</label>
                      <input type="password" class="form-control" id="Password" placeholder="Password" />
                  </div>

                  <div class="form-group">
                      <label for="Textarea">Message</label>
                      <textarea class="form-control" id="Textarea" rows="3"></textarea>
                  </div>

                  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                      </div>
                  </div>

                  
              </div>
          </div>
      </div>
    )
}

export default sales;