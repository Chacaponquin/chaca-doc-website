import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { Adventages, Header } from '../containers/Home/components'
import { Toaster } from 'react-hot-toast'

import '../css/color.css'
import '../css/font.css'
import '../css/button.css'
import '../css/screen.css'

export default function Home(): JSX.Element {
   const { siteConfig } = useDocusaurusContext()

   return (
      <Layout
         title={`${siteConfig.title}`}
         description="Description will go into a meta tag in <head />"
      >
         <Toaster />
         <main className="home">
            <Header />
            <Adventages />
         </main>
      </Layout>
   )
}
