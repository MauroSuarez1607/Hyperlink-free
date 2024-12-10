import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Topbar } from './components/topbar/Topbar'
import { Contact } from './components/contact/Contact'
import { Index } from './components/index/Index'
import { About } from './components/about/About'
import { Product } from './components/product/Product'
import { useEffect, useState } from 'react'

function App() {
  const [visible, setVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Topbar />
      <Index />
      <About />
      <Product />
      <Contact />
      <div className={`scroll-to-top ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
        ↑
      </div>
    </>
  )
}

export default App
