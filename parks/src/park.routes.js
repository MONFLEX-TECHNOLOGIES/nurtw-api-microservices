const parkDao = require("./park.dao");
const { Router } = require("express")
let api = Router();

module.exports = () => {
    api.post("/", async (req, res) => {
        try {
            let data = req.body;
            let newPark = await parkDao.registerPark(data);
            res.status(200).json({ ok: true, payload: newPark })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.get("/", async (req, res) => {
        try {
            let parks = await parkDao.getAllParks();
            res.status(200).json({ ok: true, payload: parks })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.get("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let park = await parkDao.getOnePark(id);
            res.status(200).json({ ok: true, payload: park })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.put("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let updateData = req.body;
            let updatedPark = await parkDao.updateParks(id, updateData);
            res.status(200).json({ ok: true, payload: updatedPark })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.delete("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let deletedPark = await parkDao.deletePark(id);
            res.status(200).json({ ok: true, payload: ` ${deletedPark.parkName} has been deleted` })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });
    api.post("/custom", async (req, res) => {
        try {
            let query = req.body;
            let result = await parkDao.customQuery(query)
            res.status(200).json({ ok: true, payload: result })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });

    return api;


}