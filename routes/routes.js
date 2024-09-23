const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();
const IMPORT_TASK = require("../models/task.js");
const MONGOOSE = require("mongoose");

ROUTER.get("/", async (req, res) => {
    try {
        const TASKS = await IMPORT_TASK.find();
        res.status(200).send(TASKS);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al obtener las tareas" });
    }
});
  
ROUTER.get("/id/:_id", async (req, res) => {
    try {
        const TASK = await IMPORT_TASK.findById(req.params._id);
        if (!TASK) {
            res.status(404).send({ message: "Tarea no encontrada" });
        } else {
            res.status(200).send(TASK);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al obtener la tarea" });
    }
});
  
ROUTER.put("/markAsCompleted/:_id", async (req, res) => {
    try {
        const TASK = await IMPORT_TASK.findByIdAndUpdate(req.params._id, { completed: true }, { new: true });
        if (!TASK) {
            res.status(404).send({ message: "Tarea no encontrada" });
        } else {
            res.status(200).send(TASK);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al actualizar la tarea" });
    }
});
  
ROUTER.put("/id/:_id", async (req, res) => {
    try {
        const TASK = await IMPORT_TASK.findByIdAndUpdate(req.params._id, { title: req.body.title }, { new: true });
        if (!TASK) {
            res.status(404).send({ message: "Tarea no encontrada" });
        } else {
            res.status(200).send(TASK);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al actualizar la tarea" });
    }
});
  
ROUTER.delete("/id/:_id", async (req, res) => {
    try {
        const ID = new MONGOOSE.Types.ObjectId(req.params._id);
        const TASK = await IMPORT_TASK.findByIdAndDelete(ID);
        if (!TASK) {
            res.status(404).send({ message: "Tarea no encontrada" });
        } else {
            res.status(200).send({ message: "Tarea eliminada con éxito" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al eliminar la tarea" });
    }
});

ROUTER.post("/create", async(req, res) => {
    try {
        const TASK = await IMPORT_TASK.create(req.body);
        res.status(201).send(TASK);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al crear la tarea" });
    }
});

module.exports = ROUTER;