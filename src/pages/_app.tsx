import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalStyle } from '../styles/global'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../../prismicio'


function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>
              {children}
            </a>
          </Link>
        )}
      >
        <ChakraProvider>
          <GlobalStyle />
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
        </ChakraProvider>
      </PrismicProvider>
    
  )
}

export default MyApp
