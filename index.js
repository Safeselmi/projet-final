// hne sna3et serveur mte3i
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const Client = require("./models/Client");

const app = express();

app.use(cors());

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);

const ClientModel = require("./models/Client");
const ProduitModel = require("./models/Produit");
const PanierModel = require("./models/Panier");

// pour dire q'on va recevoir les donnees de la front dans le format json
app.use(express.json());

// connection a notre base de donnee mongobd
mongoose
  .connect(
    "mongodb+srv://safe:safesafe@e-commerce.w0iph.mongodb.net/Gorgeous?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("connected to db"));

app.get("/read", async (req, res) => {
  const clients = await Client.find();
  console.log(clients);
  res.send("ciiii bon");
});

app.post("/inscription", async (req, res) => {
  console.log("ahnni hoini");

  const client = new ClientModel(req.body);

  try {
    await client.save();
    res.send("inserted data");
  } catch (error) {}
});

app.post("/AjoutProduit", async (req, res) => {
  const produit = new ProduitModel(req.body);

  try {
    await produit.save();
    res.send("inserted data");
  } catch (error) {
    console.log({ error });
  }
});
app.post("/AjoutPanier", async (req, res) => {
  const panier = new PanierModel(req.body);

  try {
    await panier.save();
    res.send("inserted data");
    console.log("tzed");
  } catch (error) {
    console.log({ error });
  }
});

app.post("/connexion", async (req, res) => {
  const { Email, Motdepasee } = req.body;
  const user = await Client.findOne({ Email, Motdepasee });

  if (!user) {
    res.json({ erreur: "utilisateur non trouvé" });
  } else {
    res.json({ user });
  }
});

app.get("/clients", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

app.get("/produits", async (req, res) => {
  const produits = await ProduitModel.find();
  res.json(produits);
});

app.get("/panier", async (req, res) => {
  const panier = await PanierModel.find();
  res.json(panier);
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await ProduitModel.findByIdAndRemove(id).exec();
  res.send("itemdeleted");
});

app.delete("/delete/", async (req, res) => {
  await PanierModel.remove();
  res.send("itemdeleted");
});

app.put("/update/", async (req, res) => {
  const id = req.body.id;
  let newNom = req.body.newNom;
  let newPrix = req.body.newPrix;
  try {
    await ProduitModel.findById(id, (error, produitAModifier) => {
      produitAModifier.NomProduit = String(newNom);
      produitAModifier.PrixProduit = String(newPrix);
      produitAModifier.save();
      console.log(produitAModifier.NomProduit);
      console.log("produit updated");
    });
  } catch (err) {
    console.log(err);
  }
  res.send(" product updated");
});

// hne 3titou port surlequel bch n3mloulou run
app.listen(3001, () => {
  console.log("server running on port 3001 ");
});
