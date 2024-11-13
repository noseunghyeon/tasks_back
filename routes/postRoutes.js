const router = require("express").Router();
const { postTask } = require("../controllers/postTaskCtrl");

router.post("/postTask", postTask);

module.exports = router;
