import Navbar from '../components/Navbar/Navbar'

const DefaultLayout = ({ children }) => (
  <div className="min-h-screen">
    <Navbar />

    <div className="flex-grow max-w-2xl mx-auto pt-24 md:pt-36 pb-24 px-4 md:px-0 flex flex-col justify-start items-stretch min-h-full">
      {children}
    </div>
  </div>
)

export default DefaultLayout
