import React from 'react'
import service from'./service.jpg';

const MyService = () => {

    return <div class="col d-flex justify-content-center">
                 {/* <h1>My Service</h1> */}
                <div class="card">
                    <img class="card-img-top" alt="pic of black board" src={service}/>
                    <div class="card-img-overlay">
                        {/* <button class="btn btn-primary btn-block">Service</button> */}
                        <h4 class="card-title" style={{color:'white'}}>My Service</h4>
                        {/* <a href="#" class="btn btn-primary">See Profile</a> */} 
                    </div>
                </div>
            </div>
}

export default MyService