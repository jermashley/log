import Navbar from '../components/Navbar/Navbar'

const DefaultLayout = ({ children }) => (
  <>
    <Navbar />

    <main className="w-full max-w-2xl mx-auto py-24 md:py-36 px-4 md:px-0">
      {children}
    </main>
  </>
)

export default DefaultLayout
