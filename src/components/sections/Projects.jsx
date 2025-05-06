import github from '../../assets/github.png'
export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 
                    className="text-3xl font-bold mb-8 text-center"
                    style={{fontFamily: "La Belle Aurore"}}
                >
                    Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-2 gap-x-6">
                    <div className="p-6 roundex-xl hover:-translate-y-1 hover:border-blue-500/30 transition">
                           <h3 
                                className="text-xl text-center font-bold mb-2" 
                                style={{fontFamily: "Darker Grotesque"}}

                            >
                                Smart Stock
                            </h3>
                            <a 
                                href="https://github.com/BobbyNg4/smart-stock-499-capstone.git"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img 
                                    src={github} 
                                    alt="github"
                                    className="block mx-auto"
                                    width="20px" 
                                />
                            </a>
                            <p className="text-blue-400 mb-4 text-center">
                                Inventory management system that allows small businesses manage and track 
                                products. 
                            </p>
                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {["TypeScript", "React", "Python", "Flask", "SQL", "MySQL", "APIs"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                    </div>

                    <div className="p-6 roundex-xl hover:-translate-y-1 hover:border-blue-500/30 transition">
                        <h3 
                            className="text-center text-xl font-bold mb-2"
                            style={{fontFamily: "Darker Grotesque"}}
                        >
                            SimOS
                        </h3>
                        <a 
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img 
                                src={github} 
                                alt="github"
                                className="block mx-auto"
                                width="20px" 
                            />
                        </a>
                        <p className="text-blue-400 mb-4 text-center"> 
                            Simulation that implements essential functions of operating systems.   
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {["C++"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 roundex-xl hover:-translate-y-1 hover:border-blue-500/30 transition">
                        <h3 
                            className="text-center text-xl font-bold mb-2"
                            style={{fontFamily: "Darker Grotesque"}}
                        >
                            Berry Basket Catch
                        </h3>
                        <a 
                            href="https://github.com/suraiyakhoja/Berry-Basket-Catch.git"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img 
                                src={github} 
                                alt="github"
                                className="block mx-auto"
                                width="20px" 
                            />
                        </a>
                        <p className="text-blue-400 mb-4 text-center">
                            2D game engine with collision detection and sprite animations
                            for engaging gameplay experience. 
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {["C++", "OpenGL", "GLFW"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 roundex-xl hover:-translate-y-1 hover:border-blue-500/30 transition">
                        <h3 
                            className="text-center text-xl font-bold mb-2"
                            style={{fontFamily: "Darker Grotesque"}}
                        >
                            Recipes2.0
                        </h3>
                        <a 
                            href="https://github.com/suraiyakhoja/Recipes2.0.git"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img 
                                src={github} 
                                alt="github"
                                className="block mx-auto"
                                width="20px" 
                            />
                        </a>
                        <p className="text-blue-400 mb-4 text-center">
                            iOS recipe management app that retrieves recipes from API call and allows
                            users to mark their favorites.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {["Swift", "CoreData", "APIs"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 roundex-xl hover:-translate-y-1 hover:border-blue-500/30 transition">
                        <h3 
                            className="text-center text-xl font-bold mb-2"
                            style={{fontFamily: "Darker Grotesque"}}
                        >
                            Social Media Blog
                        </h3>
                        <a 
                            href="https://github.com/suraiyakhoja1/suraiyakhoja1-pep-spring-project.git"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img 
                                src={github} 
                                alt="github"
                                className="block mx-auto"
                                width="20px" 
                            />
                        </a>
                        <p className="text-blue-400 mb-4 text-center">
                            Utilized Spring Boot to build a RESTful API that supports social 
                            media blog functionalities. 
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {["Java", "SQL", "Spring", "Spring Boot", "APIs"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 roundex-xl hover:-translate-y-1 hover:border-blue-500/30 transition">
                        <h3 
                            className="text-center text-xl font-bold mb-2"
                            style={{fontFamily: "Darker Grotesque"}}
                        >
                            Tills
                        </h3>
                        <a 
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img 
                                src={github} 
                                alt="github"
                                className="block mx-auto"
                                width="20px" 
                            />
                        </a>
                        <p className="text-blue-400 mb-4 text-center">
                            Language Learning App <br />(in the works!)
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {["JavaScript", "React", "Python", "Django", "Firebase", "MongoDB"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}