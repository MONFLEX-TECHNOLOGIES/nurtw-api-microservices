const vehicleDao = require("./vehicles.dao");
const { Router } = require("express");
let api = Router();

module.exports = () => {
    api.post("/", async (req, res) => {
        try {
            let data = req.body;
            let newvehicle = await vehicleDao.registerVehicle(data);
            res.status(200).json({ ok: true, payload: newvehicle })
        } catch (error) {
            console.log("error from route", error)
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.get("/", async (req, res) => {
        try {
            let allVehicle = await vehicleDao.gettAllVehicles();
            res.status(200).json({ ok: true, payload: allVehicle })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.get("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let vehicle = await vehicleDao.getOneVehicle(id);
            res.status(200).json({ ok: true, payload: vehicle })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });
    api.put("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let updateData = req.body;
            let updatedvehicle = await vehicleDao.updateVehicle(id, updateData);
            res.status(200).json({ ok: true, payload: updatedvehicle })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.delete("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let deletedvehicle = await vehicleDao.deleteVehicle(id);
            res.status(200).json({ ok: true, payload: `vehicle with plate number ${deletedvehicle.plateNumber} has been deleted` })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });
    api.post("/custom", async (req, res) => {
        try {
            let query = req.body;
            let result = await vehicleDao.customQuery(query)
            res.status(200).json({ ok: true, payload: result })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });
    return api;
}