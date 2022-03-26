import React from "react";
import footer from "../Assets/footer.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="flex flex-row  h-60  w-screen mt-[80px] mb-0 bg-mauve-100">
        {/* ligne footer*/}

        <div className="flex flex-col w-1/6 m-auto ">
          {/*colonne gorgeous*/}
          <img src={footer} />
        </div>

        <div className="flex flex-col w-4/6">
          {/*colonne mta3 les 2 rows*/}

          <div className="flex flex-row  justify-around mt-16 text-white h-2 ">
            {/*ligne titre*/}

            <div className="flex flex-col w-1/6 font-font_fremid text-3xl ">
              <h1>Livraison</h1>
            </div>

            <div className="flex flex-col w-1/6 font-font_fremid text-3xl ">
              <h1>A propos </h1>
            </div>
            <div className="flex flex-col w-1/6 font-font_fremid text-3xl">
              <h1>Contact</h1>
            </div>
          </div>

          <div className="flex flex-row justify-center justify-around m-auto mb-0 text-Mauve-100 font-font_fremid text-justify ">
            {/*ligne info*/}

            <p className="flex flex-col w-1/6  text-Mauve-100">
              livraison sur toute la Tunisie dans 72h votre commande vous sera
              délivrée avec toute diligence
            </p>

            <p className="flex flex-col w-1/6 text-Mauve-100">
              Gorgeous était créé en 2022 , un site marchand d'articles
              personalisés
            </p>

            <p className="flex flex-col w-1/6 text-Mauve-100">
              51 753 943 <br /> 90 531 542 <br /> safeselmi127@gmail.com <br />{" "}
              emnazayani73@gmail.com{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-row w-1/12 justify-center text-3xl m-auto justify-around text-Mauve-100">
          {/*colonne Reseau sociaux */}
          <a href="https://www.instagram.com/?hl=fr">
            <AiFillInstagram className="text-4xl" />
          </a>
          <a href="https://www.facebook.com/Kpop-goodies-505615613198014">
            <BsFacebook className=" mt-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
