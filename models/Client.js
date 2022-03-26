const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  Nom: {
    type: String,
    required: true,
  },
  Prenom: {
    type: String,
    required: true,
  },
  Telephone: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Motdepasse: {
    type: String,
    required: true,
  },
  Favoris: {
    type: Array,
    default: [],
    required: false,
  },
});

const Client = mongoose.model("clientdatas", ClientSchema);
module.exports = Client;
