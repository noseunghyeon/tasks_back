const router = require("express").Router();
const {
  updateTask,
  updateCompletedTask,
} = require("../controllers/updateTaskCtrl");

router.put("/updateTask", updateTask);
router.patch("/updateCompletedTask", updateCompletedTask);

module.exports = router;
