import React from "react";
import Imagen from "../imagenes/imagen";
import VideoPlay from "../componentes/video";
import '../App.css'

export const Home = () => {
  return (
    <div>
      <div className="mt-5 hola  ">
        <VideoPlay/>
        <div className=" mt-5 text-center">
        <img src={Imagen[3]} className="container" />
      </div>
      </div>
    </div>
  );
};
