import React from "react";
import imagen from "../imagenes/imagen";
import { CompraAuto } from "../componentes/CompraAuto";

const Comprar = () => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src={imagen[0]} className="w-50 card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <CompraAuto/>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={imagen[1]} className="w-50 card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Camaro 2023</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <CompraAuto />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={imagen[2]} className="w-50 card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <CompraAuto />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={imagen[1]} className="w-50  card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <CompraAuto />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprar;