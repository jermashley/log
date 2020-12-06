import Navbar from '../components/Navbar/Navbar'

const DefaultLayout = ({ children, activePage }) => (
  <main className="max-w-2xl mx-auto">
    <Navbar activePage={activePage} />

    {children}
  </main>
)

export default DefaultLayout
