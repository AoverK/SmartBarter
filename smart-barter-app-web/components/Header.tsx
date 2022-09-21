import Head from 'next/head'
//import * as React from 'react'
import { ContentHome } from './ContentHome'
import { NavbarUnauth } from './NavbarUnauth'

export const Header = () => (  
  <Head>
    <title>SmartBarter - Buy, sell and trade. Almost anything.</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta property="og:image:width" content="1400" />
    <meta property="og:image:height" content="700" />
    <meta property="og:url" content="https://www.smartbarter.xyz" />
    <!-- Twitter Card Open Graph Settings -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:title" content="SmarterBarter.xyz" />
    <meta
    name="twitter:description"
    content="Buy, sell and trade. Almost anything."
    />
    <meta name="twitter:creator" content="" />
    <meta
    name="twitter:image"
    content="https://www.smartbart.xyz/public/opengraph_001.png"
    />
  </Head>
)
