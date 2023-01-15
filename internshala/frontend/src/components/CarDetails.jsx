import React from 'react'

function CarDetails() {
    return (
        <>
            <div className="container">
                <div class="card" style={{ "marginTop": "20px" }}>
                    <div class="card-header">
                        Book This Car
                    </div>
                    <div class="card-body">
                        <p class="card-title">Vehicle model</p>
                        <p class="card-title">Vehicle number</p>
                        <p class="card-title">Seating capacity</p>
                        <p class="card-title">Rent Per Day</p>
                        
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select No of days
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Action</a></li>
                               
                            </ul>
                        </div>
                        <button type="button" class="btn btn-primary my-2" >Book</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarDetails