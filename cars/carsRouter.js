const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/cars", async (req, res, next) => {
  try {
    const cars = await db("cars");
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/cars/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const car = await db("cars").where({ id }).first();
    res.json(car);
  } catch (err) {
    next(err);
  }
});

router.post("/cars", async (req, res, next) => {
  try {
    const id = await db("cars").insert(req.body);
    res.status(201).json(await db("cars").where({ id }).first());
  } catch (err) {
    next(err);
  }
});

router.put("/cars/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    await db("cars").where({ id }).update(req.body);

    res.json(await db("cars").where({ id }));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
