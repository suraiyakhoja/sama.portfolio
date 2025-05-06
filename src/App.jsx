import { useState } from 'react'
import './App.css'
import './index.css'
import { Home } from './components/sections/Home'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="min-h-screen bg-[#E6FFD9] text-black">
        <Home />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <About />
        <Projects />
        <Contact />

      </div>
    </>
  )
}

export default App
