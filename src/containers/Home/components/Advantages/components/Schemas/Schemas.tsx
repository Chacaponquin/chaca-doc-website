import { APP_IMAGES } from "@site/src/modules/app/constants/IMAGES";
import React from "react";

import "./schemas.css";

export default function Schemas() {
  return (
    <section className="adventage_section">
      <div className="adventage_text">
        <h1>Create data schemas with your rules</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, quo?
          Velit quo ea, fugit eveniet, sequi nesciunt necessitatibus minima vel
          veniam nostrum est. Doloremque, totam libero!
        </p>
      </div>

      <div className="schema_code">
        <img
          src={APP_IMAGES.SCHEMA_CODE.src}
          alt={APP_IMAGES.SCHEMA_CODE.alt}
        />
      </div>
    </section>
  );
}
