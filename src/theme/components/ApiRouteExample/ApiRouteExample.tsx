import React, { useEffect, useState } from 'react'
import CodeBlock from '@theme/CodeBlock'
import beautify from 'js-beautify'

import './api_route_example.css'

export default function ApiRouteExample({
    url,
    method,
    code = '',
}: {
    url: string
    method: string
    code: unknown
}) {
    const [showCode, setShowCode] = useState(JSON.stringify(code))

    useEffect(() => {
        const c = beautify.js(showCode)
        setShowCode(c)
    }, [])

    const showUrl = `http://localhost:8000/${url}`

    return (
        <div className="md_api_route_example">
            <div className="request">
                <div className="method">{method}</div>
                <div className="url">
                    <CodeBlock className="language-http">{showUrl}</CodeBlock>
                </div>
            </div>

            <div className="code">
                <CodeBlock className="language-json">{showCode}</CodeBlock>
            </div>
        </div>
    )
}
