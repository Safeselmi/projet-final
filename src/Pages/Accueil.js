import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import DropdownHome from "../Components/DropdownHome";
import DropdownUser from "../Components/DropdownUser";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import "./Style.css";

const slideImages = [
  {
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/157746de-1f74-4381-99e4-197bf79b6168/d4gulgg-7341b2f6-c09a-48da-9a51-42f7cea746d1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE1Nzc0NmRlLTFmNzQtNDM4MS05OWU0LTE5N2JmNzliNjE2OFwvZDRndWxnZy03MzQxYjJmNi1jMDlhLTQ4ZGEtOWE1MS00MmY3Y2VhNzQ2ZDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kOiGka9nFOPu5M4QrFJ3gHk9w8aJsevGMwlNP4picp8",
  },
  {
    url: "https://www.styloprints.com/wp-content/uploads/2019/10/sublimasyon_baski_urunleri_kategori.png",
  },
  {
    url: "https://www.quirkybyte.com/wp-content/uploads/2018/03/Japanese-And-Chinese-avengers-Infinity-War-poster.png",
  },
];

const Slideshow = () => {
  const [Produits, setProduits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      Axios.get("http://localhost:3001/produits").then((response) => {
        setProduits(response.data);
        console.log(response.data);
      }, []);
      setIsLoading(false);
      console.log(Produits);
    }
  }, [isLoading]);

  return (
    <div>
      <div>
        <Header icon1={<DropdownHome />} icon2={<DropdownUser />} />
      </div>
      <div className="slide-container mt-12">
        <Slide>
          {slideImages?.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                className="belfgesem"
                style={{
                  backgroundImage: `url("${slideImage.url}")`,
                }}
              >
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
        <div>
          <p className="text-6xl text-Mauve-100 mt-28 text-center font-font_fremid ">
            Nos meilleurs Articles{" "}
          </p>
        </div>
        <div className="flex flex-row justify-around  justify-between p-4   flex-wrap	">
          {Produits.map((val, key) => {
            return (
              <div
                className="ml-4 w-60 mt-32 bg-mauve-100 rounded px-6 w-full  flex flex-col justify-center"
                key={key}
              >
                {console.log(val.ImageProduit)}
                <img className="w-48 " src={val.ImageProduit} alt="image" />
                <div className="flex flex-col w-32 text-center ml-4">
                  <p className="text-Mauve-100  font-font_Bold ml-5">
                    {val.NomProduit}
                  </p>
                  <span className="text-Mauve-100 font-font_Bold ml-7">
                    {val.PrixProduit}Dt
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Slideshow;
