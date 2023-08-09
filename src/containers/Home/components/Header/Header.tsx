import React from 'react'
import { APP_IMAGES } from '@site/src/modules/app/constants/IMAGES'
import { ContentSection } from '../../shared/components'
import { useHeader } from './hooks'
import { Buttons, PresentationText } from './components'

import './header.css'

export default function Header() {
    const { COMMAND_TEXT, handleClickCopyCommand, showCheckCopy } = useHeader()

    return (
        <ContentSection>
            <header className="home_header_container">
                <img
                    src={APP_IMAGES.HEADER_IMAGE.src}
                    alt={APP_IMAGES.HEADER_IMAGE.alt}
                />

                <div className="header_text">
                    <PresentationText />

                    <Buttons
                        COMMAND_TEXT={COMMAND_TEXT}
                        handleClickCopyCommand={handleClickCopyCommand}
                        showCheckCopy={showCheckCopy}
                    />
                </div>
            </header>
        </ContentSection>
    )
}
