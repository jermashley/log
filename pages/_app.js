import '../styles/tailwind.css'
import DefaultLayout from '../layouts/default'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { persistWithLocalStorage } from 'react-query/persist-localstorage-experimental'

const queryClient = new QueryClient()
persistWithLocalStorage(queryClient)

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLayout>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </DefaultLayout>
    </QueryClientProvider>
  )
}

export default MyApp
