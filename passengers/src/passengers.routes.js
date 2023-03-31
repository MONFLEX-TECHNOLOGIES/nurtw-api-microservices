const passengerDao = require("./passengers.dao");
const { Router } = require("express")
let api = Router();

module.exports = () => {
    api.post("/", async (req, res) => {
        try {
            let data = req.body;
            let newPassenger = await passengerDao.registerPassenger(data);
            res.status(200).json({ ok: true, payload: newPassenger })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message, why: "i no sabi" })
        }
    })
    api.get("/", async (req, res) => {
        try {
            let passengers = await passengerDao.getAllPassengers();
            res.status(200).json({ ok: true, payload: passengers })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.get("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let passenger = await passengerDao.getOnePassenger(id);
            res.status(200).json({ ok: true, payload: passenger })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.put("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let updateData = req.body;
            let updatedPassenger = await passengerDao.updatePassenger(id, updateData);
            res.status(200).json({ ok: true, payload: updatedPassenger })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.delete("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let deletedPassenger = await passengerDao.deletePassenger(id);
            res.status(200).json({ ok: true, payload: `${deletedPassenger.firstName } has been deleted` })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });
    api.post("/custom", async (req, res) => {
        try {
            let query = req.body;
            let result = await passengerDao.customQuery(query)
            res.status(200).json({ ok: true, payload: result })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });

    return api;
}