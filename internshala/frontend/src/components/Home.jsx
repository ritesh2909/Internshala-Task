import React from 'react'

function Home() {
  return (
    <>
      <div className="container" style={{"paddingTop": "40px"}}>

        <h1 className="heading" style={{"textAlign": "center"}} >Cars World</h1>

        <div class="card" style={{"marginTop": "20px"}}>
          <div class="card-header">
            Car Category
          </div>
          <div class="card-body">
            <p class="card-title">Vehicle model</p>
            <p class="card-title">Vehicle number</p>
            <p class="card-title">Seating capacity</p>
            <p class="card-title">Rent Per Day</p>
           
            <button type="button" class="btn btn-primary">CheckOut</button>
          </div>
        </div>
        <div class="card" style={{"marginTop": "20px"}}>
          <div class="card-header">
            Car Category
          </div>
          <div class="card-body">
            <p class="card-title">Vehicle model</p>
            <p class="card-title">Vehicle number</p>
            <p class="card-title">Seating capacity</p>
            <p class="card-title">Rent Per Day</p>
           
            <button type="button" class="btn btn-primary">CheckOut</button>
          </div>
        </div>
        <div class="card" style={{"marginTop": "20px"}}>
          <div class="card-header">
            Car Category
          </div>
          <div class="card-body">
            <p class="card-title">Vehicle model</p>
            <p class="card-title">Vehicle number</p>
            <p class="card-title">Seating capacity</p>
            <p class="card-title">Rent Per Day</p>
           
            <button type="button" class="btn btn-primary">CheckOut</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;