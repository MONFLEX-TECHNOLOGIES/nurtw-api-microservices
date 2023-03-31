const { Router } = require("express")
const driverDao = require("./driver.dao");
const api = new Router();


module.exports = () => {
    api.post("/", async (req, res) => {
        try {
            let driver = req.body;
            let newDriver = await driverDao.registerDriver(driver);
            res.status(200).json({ ok: true, payload: newDriver });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });

    api.get("/", async (req, res) => {
        try {
            let drivers = await driverDao.getAllDrivers();
            res.status(200).json({ ok: true, payload: drivers })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });
    api.get("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            const user = await driverDao.getDriver(id);
            res.status(200).json({ ok: true, payload: user });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    });
    api.put("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let updateData = req.body;
            let updatedDriver = await driverDao.updateDriver(id, updateData)
            res.status(200).json({ ok: true, payload: updatedDriver })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });
    api.delete("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let deletedDriver = await driverDao.deleteDriver(id);
            res.status(200).json({ ok: true, message: `Staff with the id ${deletedDriver._id} has been deleted` })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });
    api.post("/custom", async (req, res) => {
        try {
            let query = req.body;
            let result = await driverDao.customQuery(query)
            res.status(200).json({ ok: true, payload: result })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });
   
    return api;
}