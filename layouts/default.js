import Navbar from '../components/Navbar/Navbar'

const DefaultLayout = ({ children, activePage }) => (
  <main>
    <Navbar />

    <div className="max-w-2xl mx-auto pt-24 md:pt-36 pb-24 px-4 md:px-0">
      {children}
    </div>
  </main>
)

export default DefaultLayout
