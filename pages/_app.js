import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { persistWithLocalStorage } from 'react-query/persist-localstorage-experimental'
import Head from 'next/head'
import '../styles/tailwind.css'
import DefaultLayout from '../layouts/default'

const queryClient = new QueryClient()
persistWithLocalStorage(queryClient)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {typeof process.env.GOOGLE_TAG !== `undefined` ?? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TAG}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date())
      
                gtag('config', '${process.env.GOOGLE_TAG}')`,
              }}
            />
          </>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <DefaultLayout>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </DefaultLayout>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
