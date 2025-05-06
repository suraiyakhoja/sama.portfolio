import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    })
    
    return (
        <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center h-16">
                <a 
                    href="#home"
                    className="font-light text-3xl font-bold text-black" 
                    style={{fontFamily: "Darker Grotesque"}}
                >
                    sama khoja
                </a>

                {/* Mobile menu*/} 
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                {/* Desktop menu*/} 
                <div className="hidden md:flex space-x-8">
                <a
                    href="#home"
                    className="font-custom2 text-xl text-black py-4 px-6"
                    style={{fontFamily: "Darker Grotesque"}}
                >
                    home
                </a>
                <a
                    href="#about"
                    className="font-custom2 text-xl text-black py-4 px-6"
                    style={{fontFamily: "Darker Grotesque"}}
                >
                    about
                </a>
                <a
                    href="#projects"
                    className="font-custom text-xl text-black py-4 px-6"
                    style={{fontFamily: "Darker Grotesque"}}
                >
                    projects
                </a>
                <a
                    href="#contact"
                    className="font-custom text-xl text-black py-4 px-6"
                    style={{fontFamily: "Darker Grotesque"}}
                >
                    contact
                </a>
            </div>


                </div>
            </div>
        </nav>
    )
}