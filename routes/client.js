const express = require("express");
const router = express.Router();

const _client = require("../controllers/client");

router.post("/add", _client.create);

module.exports = router;
