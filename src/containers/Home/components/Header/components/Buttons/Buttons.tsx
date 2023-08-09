import { LINKS } from '@site/src/modules/app/constants/LINKS'
import { Check, Copy } from '@site/src/modules/app/modules/icon/components'
import { ButtonPrimary } from '@site/src/modules/shared/modules/button/components'
import React from 'react'

export default function Buttons({
    showCheckCopy,
    COMMAND_TEXT,
    handleClickCopyCommand,
}: {
    showCheckCopy: boolean
    COMMAND_TEXT: string
    handleClickCopyCommand: () => void
}) {
    return (
        <div className="header_text_buttons">
            <a href={LINKS.FIRST_DOC} target="_blank">
                <ButtonPrimary text="Get started" />
            </a>

            <div className="command_div font-code">
                <p>{COMMAND_TEXT}</p>

                {showCheckCopy ? (
                    <button className="check_button">
                        <Check />
                    </button>
                ) : (
                    <button
                        className="copy_button"
                        onClick={handleClickCopyCommand}
                    >
                        <Copy />
                    </button>
                )}
            </div>
        </div>
    )
}
