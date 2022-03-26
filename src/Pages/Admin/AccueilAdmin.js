import Axios from "axios";
import React, { useState } from "react";
import "./File.css";
import Header from "../../Components/Header";
import DropdownHome from "../../Components/DropdownHome";
import DropdownUser from "../../Components/DropdownUser";
import { Navigate, useNavigate } from "react-router-dom";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function AccueilAdmin() {
  const [State, setState] = useState({
    NomProduit: "",
    PrixProduit: "",
  });

  const [images, setImages] = useState([]);

  const onSelectFile = async (e) => {
    let uploadedImages = [];
    for (var i = 0; i < e.target.files.length; i++) {
      uploadedImages.push({
        preview: e.target.files[i],
        data: await getBase64(e.target.files[i]),
      });
    }
    uploadedImages = uploadedImages.map((e) => {
      const ImageUrl = URL.createObjectURL(e.preview);

      return { ...e, preview: ImageUrl };
    });
    setImages(uploadedImages);
  };

  const handlechange = (e) => {
    const value = e.target.value;
    setState({
      ...State,
      [e.target.name]: value,
    });
  };

  const SaveProduit = () => {
    images.map((image) => {
      const newproduit = {
        ImageProduit: image.data,
        NomProduit: State.NomProduit,
        PrixProduit: State.PrixProduit,
      };

      Axios.post("http://localhost:3001/AjoutProduit", newproduit);
    });
    alert("Produit bien inséré ");
  };

  /*const reset = (e) => {
    e.target.value = "";
  };
*/

  let Navigate = useNavigate();

  return (
    <div>
      <Header icon1={<DropdownHome />} icon2={<DropdownUser />} />
      <center>
        <form>
          <div className="flex flex-col h-[400px] justify-center mt-[90px] bg-mauve-100 w-[550px] rounded-lg mb-8">
            <div className="flex flex-row w-[200px]  mt-4 m-auto justify-center h-full ">
              <input
                type="file"
                Name="ImageProduit"
                className="foo"
                onChange={onSelectFile}
              />
              {images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img.preview}
                    id={index}
                    alt="pic1"
                    width="250"
                    height="250"
                    className="ml-28"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-row w-96 w-full justify-center h-full m-auto ">
              <label className="text-Mauve-100 text-2xl flex flex-row w-48 mt-4 ">
                Nom Produit
              </label>
              <input
                type="text"
                name="NomProduit"
                className="rounded  mt-4 h-[30px] bg-grey-100 border-2 "
                onChange={handlechange}
              />
            </div>
            <div className="flex flex-row w-96 w-full justify-center h-full m-auto">
              <label className="text-Mauve-100 text-2xl flex flex-row w-48 mt-4 ">
                Prix Produit
              </label>
              <input
                type="text"
                Name="PrixProduit"
                className="rounded  mt-4 h-[30px] bg-grey-100 border-2 "
                onChange={handlechange}
              />
            </div>
            <div className="flex flex-rox w-full justify-center mt-4 mb-2">
              <button onClick={SaveProduit}>
                <span>Envoyer</span>
              </button>
            </div>
          </div>
        </form>

        <div className="flex justify-center justify-around w-[500px] ">
          <button
            className="text-Mauve-100 font-font_fremid text-2xl"
            onClick={() => {
              Navigate("/AcceuilAdmin/ListeArticle");
            }}
          >
            Consulter Liste d'Articles
          </button>
          <button className="text-Mauve-100 font-font_fremid text-2xl">
            Consulter Liste d'Avis
          </button>
        </div>
      </center>
    </div>
  );
}

export default AccueilAdmin;
