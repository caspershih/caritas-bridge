const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/user.ctrl");

router.get("/:id", ctrl.getOne);
router.get("/", ctrl.getAll);
router.post("/", ctrl.createOne);
router.delete("/:id", ctrl.deleteOne);
router.put("/:id", ctrl.updateOne);

module.exports = router;