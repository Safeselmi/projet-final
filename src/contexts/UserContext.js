import { createContext } from "react";

export const Usercontext = createContext({
  Nom: "",
  Prenom: "",
  Email: "",
  Motdepasse: "",
  Numtel: "",
});
