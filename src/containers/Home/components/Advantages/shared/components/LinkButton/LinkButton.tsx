import Link from '@docusaurus/Link'
import React, { useState } from 'react'
import { ArrowRight } from '@site/src/modules/app/modules/icon/components'
import clsx from 'clsx'

import './link_button.css'

export default function LinkButton({
   text,
   link,
}: {
   text: string
   link: string
}) {
   const [isHover, setIsHover] = useState(false)
   const arrowClass = clsx({ arrow_effect_hover: isHover })

   return (
      <Link to={link}>
         <button
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="adeventage_link_button"
         >
            <p className="">{text}</p>

            <div className={arrowClass}>
               <ArrowRight />
            </div>
         </button>
      </Link>
   )
}
