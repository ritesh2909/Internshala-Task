const router = require("express").Router();
const Car = require("../models/Car");
const {verifyTokenAndAdmin, verifyTokenAndAuthorization} = require("../verifyToken");

router.post("/add", verifyTokenAndAdmin, async (req, res) => {

    const newCar = new Car(req.body);

    try {
        const savedCar = await newCar.save();
        res.status(200).json(savedCar);
    } catch (error) {
        return res.status(500).json(error);
    }
})

// update cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const updatedCar = await Car.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        res.status(200).json(updatedCar);
    } catch (error) {
        return res.status(500).json(error);
    }
})


// delete cart
router.delete("/id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        await Car.findByIdAndDelete(req.params.id);
        res.status(200).json("Item removed from car");

    } catch (error) {
        return res.status(500).json(error);
    }
})

// all the cars
router.get("/find/:userId", async (req, res) => {

    try {

        const car = await Car.find();
        res.status(200).json(car);

    } catch (error) {
        return res.status(500).json(error);
    }
})

// get all carts - only for admins
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {

    try {

        const car = await Car.findOne({ userId: req.params.id });
        res.status(200).json(car);

    } catch (error) {
        return res.status(500).json(error);
    }
})
module.exports = router;