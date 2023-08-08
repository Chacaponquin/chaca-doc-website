import React from 'react'
import { HttpMethod } from '../../shared/components'

import './api_route.css'

export default function ApiRoute({
    children,
    method,
    url,
}: {
    children: React.ReactNode
    method: string
    url: string
}) {
    const showUrl = `http://localhost:8000/${url}`

    return (
        <div className="md_api_route">
            <HttpMethod method={method} />

            <p className="url">{showUrl}</p>
        </div>
    )
}
