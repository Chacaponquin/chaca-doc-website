import { APP_IMAGES } from '@site/src/modules/app/constants/IMAGES'
import React from 'react'

import './schemas.css'

export default function Schemas() {
   return (
      <section className="adventage_section">
         <div className="adventage_text">
            <h1>Create data schemas with your rules</h1>

            <p>
               Chaca was designed so that you can create datasets defined with
               your own business rules and they can be reused, generated and
               exported for later use.
            </p>
         </div>

         <div className="schema_code adventage_asset_section">
            <img
               src={APP_IMAGES.SCHEMA_CODE.src}
               alt={APP_IMAGES.SCHEMA_CODE.alt}
            />
         </div>
      </section>
   )
}
