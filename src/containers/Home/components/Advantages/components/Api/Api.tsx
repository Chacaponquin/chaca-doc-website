import { APP_IMAGES } from '@site/src/modules/app/constants/IMAGES'
import React from 'react'

import './api.css'
import { LinkButton } from '../../shared/components'
import { LINKS } from '@site/src/modules/app/constants/LINKS'

export default function Api() {
   return (
      <section className="adventage_section">
         <div className="adventage_text">
            <h1>Use our REST API</h1>

            <p>
               Don't worry, if you want to use our features without having to
               download our npm package you can Use our developer-friendly REST
               API to create schemas and with your rules
            </p>

            <LinkButton link={LINKS.API_DOC} text={'See REST API docs'} />
         </div>

         <div className="api_adventage_image adventage_asset_section">
            <img src={APP_IMAGES.API_CODE.src} alt={APP_IMAGES.API_CODE.alt} />
         </div>
      </section>
   )
}
