import React from 'react'
import clsx from 'clsx'

import './http_method.css'

export default function HttpMethod({ method }: { method: string }) {
   const methodClass = clsx('http_method font-bold', {
      get: method === 'GET',
      post: method === 'POST',
      put: method === 'PUT',
      delete: method === 'DELETE',
   })

   return <div className={methodClass}>{method}</div>
}
