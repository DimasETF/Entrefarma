import type { AppProps } from 'next/app'
import { Box, ChakraProvider, CircularProgress } from '@chakra-ui/react'
import { GlobalStyle } from '../styles/global'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../../prismicio'
import { useEffect, useState } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
  }, []);
  return (
    <>
      {loading ? (
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

      ) : (
        <CircularProgress isIndeterminate color='green' size={"50px"} />
      )}
     
    </>
  )
}

export default MyApp
