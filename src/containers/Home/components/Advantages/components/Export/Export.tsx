import React from "react";
import { useExport } from "./hooks";

import "./export.css";

export default function Export() {
  const { EXTENSIONS } = useExport();

  return (
    <section className="adventage_section">
      <div className="export_extensions">
        {EXTENSIONS.map((ext, i) => (
          <div
            key={i}
            className="ext_card"
            style={{
              border: `2px solid ${ext.color}`,
            }}
          >
            <div
              className="ext_background"
              style={{
                backgroundColor: `${ext.color}`,
              }}
            ></div>
            <img src={ext.image.src} alt={ext.image.alt} />
          </div>
        ))}
      </div>

      <div className="adventage_text">
        <h1>Export your data in different formats</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, quo?
          Velit quo ea, fugit eveniet, sequi nesciunt necessitatibus minima vel
          veniam nostrum est. Doloremque, totam libero!
        </p>
      </div>
    </section>
  );
}
