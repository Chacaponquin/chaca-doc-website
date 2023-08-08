import React, { useEffect, useState } from 'react'
import CodeBlock from '@theme/CodeBlock'
import beautify from 'js-beautify'
import clsx from 'clsx'

import './api_route_example.css'
import { HttpMethod } from '../../shared/components'

type Options = 'response' | 'body'

interface ApiRouteExampleProps {
    url: string
    method: string
    code: unknown
    body?: any
}

export default function ApiRouteExample({
    url,
    method,
    code = '',
    body,
}: ApiRouteExampleProps) {
    const [showCode, setShowCode] = useState(JSON.stringify(code))
    const [selectedOption, setSelectedOption] = useState<Options>('response')

    useEffect(() => {
        if (selectedOption === 'response') {
            const c = beautify.js(JSON.stringify(code))
            setShowCode(c)
        } else if (selectedOption === 'body') {
            const c = beautify.js(JSON.stringify(body))
            setShowCode(c)
        }
    }, [selectedOption])

    const showUrl = `http://localhost:8000/${url}`

    const buttonClass = (o: Options): string => {
        return clsx({ selected: o === selectedOption })
    }

    function handleChangeOption(o: Options) {
        setSelectedOption(o)
    }

    return (
        <div className="md_api_route_example">
            <div className="request">
                <HttpMethod method={method} />
                <div className="url">
                    <CodeBlock className="language-http">{showUrl}</CodeBlock>
                </div>
            </div>

            <div className="view-options">
                <button
                    className={buttonClass('response')}
                    onClick={() => handleChangeOption('response')}
                >
                    Response
                </button>

                {body && (
                    <button
                        className={buttonClass('body')}
                        onClick={() => handleChangeOption('body')}
                    >
                        Body
                    </button>
                )}
            </div>

            <div className="code">
                <CodeBlock className="language-json">{showCode}</CodeBlock>
            </div>
        </div>
    )
}
