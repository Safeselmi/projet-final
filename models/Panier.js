const mongoose = require("mongoose");

const PanierSchema = new mongoose.Schema({
  ImageProduit: {
    type: String,
    required: false,
  },
  NomProduit: {
    type: String,
    required: false,
  },
  PrixProduit: {
    type: String,
    required: false,
  },
});

const Panier = mongoose.model("panierDatas", PanierSchema);
module.exports = Panier;
