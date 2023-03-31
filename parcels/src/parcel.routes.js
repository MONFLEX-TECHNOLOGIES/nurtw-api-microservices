const parcelDao = require("./parcel.dao");
let { Router } = require("express")
let api = new Router();

module.exports = () => {
    api.post("/", async (req, res) => {
        try {
            let data = req.body;
            let newParcel = await parcelDao.registerParcel(data);
            res.status(200).json({ ok: true, payload: newParcel })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });
    api.get("/", async (req, res) => {
        try {
            let parcels = await parcelDao.getAllParcels();
            res.status(200).json({ ok: true, payload: parcels })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.get("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let parcel = await parcelDao.getOneParcel(id);
            res.status(200).json({ ok: true, payload: parcel })
        } catch (error) {
            res.status(200).json({ ok: false, message: error.message });
        }
    });
    api.post("/custom", async (req, res) => {
        try {
            let query = req.body;
            let parcels = await parcelDao.customQuery(query)
            res.status(200).json({ ok: true, payload: parcels })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });
    api.put("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let updateData = req.body;
            let updatedParcel = await parcelDao.updateParcel(id, updateData)
            res.status(200).json({ ok: true, payload: updatedParcel })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.delete("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let deletedParcel = await parcelDao.deleteParcel(id);
            res.status(200).json({ ok: true, payload: `Parcel with id ${deletedParcel._id} has been deleted` })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }

    })
    return api;
}

