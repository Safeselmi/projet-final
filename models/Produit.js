const mongoose = require("mongoose");

const ProduitSchema = new mongoose.Schema({
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

const Produit = mongoose.model("produitdatas", ProduitSchema);
module.exports = Produit;
