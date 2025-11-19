
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import Scrolltotop from './component/ScrollToTop'

const Layout = () => {
  return (
    <>
    <Scrolltotop/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout