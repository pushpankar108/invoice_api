// const client = require("../models/client");

// const { client_reg_services } = require("../services");

// Create and Save a new Client

exports.create = async (req, res) => {
  try {
    const body = req.body;
    //console.log("req : ", req);
    // const Doc = new client(body);
    // const doc = await Doc.save();
    res.json("doc");
  } catch (error) {
    res.status(500).json(error);
  }
};
