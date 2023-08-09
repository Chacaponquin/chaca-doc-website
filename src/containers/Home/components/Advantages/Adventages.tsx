import React from 'react'
import { Api, Export, Schemas } from './components'
import { ContentSection } from '../../shared/components'

import './adventages.css'

export default function Adventages() {
   return (
      <ContentSection>
         <div className="adventages">
            <Schemas />
            <Export />
            <Api />
         </div>
      </ContentSection>
   )
}
