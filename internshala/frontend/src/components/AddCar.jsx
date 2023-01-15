import React from 'react'

function AddCar() {
    return (
        <>
            <div className="container" style={{"paddingTop": "40px", }}>
                <div className="headline" style={{"fontSize": "35px", 'textAlign': "center"}}>Add a New Car</div>
                <form>
                    <div class="mb-4 my-5">
                        <label for="exampleInputEmail1" class="form-label">Vehicle model</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        <label for="exampleInputEmail1" class="form-label">Vehicle number</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        <label for="exampleInputEmail1" class="form-label">Vehicle model</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        <label for="exampleInputEmail1" class="form-label">Seating Capacity</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        <label for="exampleInputEmail1" class="form-label">Rent Per Day</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>


        </>
    )
}

export default AddCar