import React from "react";
import { Link } from "react-router-dom";
import imagen from "../imagenes/imagen";

export const Navbar = () => {
  return (
    <div className="mb-5 mt-3 ">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand  fs-1" to="/">
            CHEVROLET
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active fs-3" to="/Vehiculos">
                  Vehiculos
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-3" to="/Comprar">
                  Comprar
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fs-3" to="/Postventas">
                  Postventa
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle fs-3 "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mas productos
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Soat
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Exportaciones
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Contactanos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="position-absolute bottom-25 end-0 btn">
                <Link to={"/Formx"}>
                  <button type="button" class="btn btn-primary">
                    Ingresar
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
