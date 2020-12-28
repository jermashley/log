import '../styles/tailwind.css'
import DefaultLayout from '../layouts/default'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

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
