import Axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

function ListeArticle() {
  let Navigate = useNavigate();
  const [showModal, setShowModal] = useState({ show: false, id: "" });
  const [listeProduit, setListeProduits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState({ nom: "", prix: "" });
  const [newProduit, setNewProduit] = useState({
    NomProduit: "",
    PrixProduit: "",
  });

  // setina liste produit mil back
  useEffect(() => {
    if (isLoading) {
      Axios.get("http://localhost:3001/produits").then((response) => {
        setListeProduits(response.data);
      }, []);
      setIsLoading(false);
    }
  }, [isLoading]);

  //suppression
  const suppresion = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      setListeProduits(
        listeProduit.filter((val) => {
          return val._id != id;
        })
      );
    });
  };
  // update
  const update = (e) => {
    let newNom = newProduit.NomProduit;
    let newPrix = newProduit.PrixProduit;
    console.log(e.target.id);
    Axios.put("http://localhost:3001/update", {
      id: e.target.id,
      newNom: newNom,
      newPrix: newPrix,
    }).then(() => {
      setListeProduits(
        listeProduit.map((val, key) => {
          if (val._id === e.target.id) {
            return {
              _id: val._id,
              ImageProduit: val.ImageProduit,
              NomProduit: newNom,
              PrixProduit: newPrix,
            };
          } else {
            return val;
          }
        })
      );
    });
  };
  // Edit KHdhina lvaleur
  const handleInput = (id) => {
    listeProduit.filter((val) => {
      if (val._id == id) {
        setInput({ ...input, nom: val.NomProduit, prix: val.PrixProduit });
      }
    });
  };

  useEffect(() => {
    console.log(newProduit);
  }, [newProduit]);

  const handlechange = (e) => {
    setInput(false);
    const value = e.target.value;
    setNewProduit({
      ...newProduit,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          Navigate("/AccueilAdmin");
        }}
      >
        ACCUEIL
      </button>
      <div className="mt-16 flex w-full justify-center mb-8 text-Mauve-100 font-font_fremid text-3xl text-gray-100">
        <p> Gérer Vos Articles</p>
      </div>
      {listeProduit.map((val, key) => {
        return (
          <center className="mb-4">
            <div
              className=" flex flex-row  border-2 border-black w-96  "
              key={key}
            >
              <img className="w-16 " src={val.ImageProduit} alt="image" />
              <div className="flex flex-col w-32 justify-center ">
                <p className="text-Mauve-100  font-font_Bold ml-4">
                  {val.NomProduit}
                </p>
                <span className="text-Mauve-100 font-font_Bold ">
                  {val.PrixProduit}
                </span>
              </div>
              <div className="ml-16  w-32 flex justify-around">
                <button
                  id={val._id}
                  className="w-8 bg-transparent "
                  onClick={(e) => {
                    setShowModal({ ...showModal, show: true, id: val._id });
                    console.log(e.target.id);
                    console.log(val._id);
                    handleInput(val._id);
                  }}
                >
                  <AiFillEdit className="text-black text-xl" />
                </button>
                <Modal show={showModal.show} id={showModal.id}>
                  <Modal.Header className="text-xl font-font_fremid">
                    Modifier Aticle
                  </Modal.Header>
                  <Modal.Body>
                    <div className="flex flex-col justify-around justify-between h-32">
                      <div className="flex flex-row justify-around w-96">
                        <label>Nom Produit</label>
                        <input
                          onChange={handlechange}
                          name="NomProduit"
                          value={input.nom}
                          type="text"
                          className="rounded  border-3 text-gray-100  w-60 h-8  outline-bleu-100  focus:outline-1 text-bleu-100 "
                        ></input>
                      </div>
                      <div className="flex flex-row justify-around w-96">
                        <label>Prix Produit</label>
                        <input
                          onChange={handlechange}
                          name="PrixProduit"
                          value={input.prix}
                          type="text"
                          className="rounded  border-3 text-gray-100  w-60 h-8  outline-bleu-100 focus:outline-1 text-bleu-100 "
                        ></input>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      id={showModal.id}
                      className="w-28"
                      onClick={(e) => {
                        update(e);
                      }}
                    >
                      Enregistrer
                    </Button>
                    <Button
                      className="w-16"
                      onClick={(e) => {
                        setShowModal({
                          ...showModal,
                          show: false,
                          id: "",
                        });
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

                <button
                  className="w-8 bg-transparent"
                  onClick={() => {
                    suppresion(val._id);
                  }}
                >
                  <RiDeleteBin6Fill className="text-black text-xl" />
                </button>
              </div>
              <hr />
            </div>
          </center>
        );
      })}
      <br />
    </div>
  );
}

export default ListeArticle;
