import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div>
              <h4>Servicios</h4>
              <ul class="nombres">
                <li>
                  <a href="#" class="nombres">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" class="nombres">
                    Web Design
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div>
              <h4>Informacion</h4>
              <ul class="nombres">
                <li>
                  <p>+017367234</p>
                </li>
                <li>
                  <p>
                    <a href="#">Inmobiliaria@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>Carretera VillaFlores, Suchiapa, Chiapas</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center"></div>
      </div>
    </footer>
  );
}
