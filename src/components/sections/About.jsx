import sama from '../../assets/sama+rocks.jpeg'


export const About = () => {
    const frontendSkills = [
        "React", 
        "Vite", 
        "JavaScript", 
        "TypeScript",
        "Tailwind CSS", 
    ];

    const backendSkills = [
        "C++",
        "Python",
        "Flask",
        "SQL", 
        "Swift",
        "Java",
        "Spring Boot",
        "API",
    ];

    return (
        <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                <div className="h-[400px] w-[300px] mx-auto">
                    <img 
                        className="rounded-[2rem] object-cover h-full w-full" 
                        src={sama} 
                        alt="sama+rocks" 
                    />
                </div>

                <div className="flex flex-col justify-center max-w-xl">
                    <h1 
                        className="text-6xl text-center pb-4" 
                        style={{
                            fontFamily: "La Belle Aurore", 
                            transform:'rotate(-3deg)'
                        }}
                    >
                        about me!
                    </h1>

                    <p 
                        className="mb-4 text-center md:text-left"
                        style={{fontFamily: "Darker Grotesque"}}>
                        I am a recent graduate from Hunter College in New York City, where 
                        I earned my Bachelor's degree in Computer Science. Throughout my 
                        academic journey, I developed a strong foundation in both theoretical 
                        and practical aspects of software development. I gained hands-on 
                        experience building full-stack web and mobile applications.  
                        These experiences helped solifidy my passion for problem-solving 
                        software development, and the creative possibilities of technology. 
                        My goal is to contribute to impactful projects that blend technical 
                        excellence with user-centered design. I am particularly interested in 
                        roles that allow me to continue growing as a developer while applying
                        my analytical mindset and create problem-solving skills in real world
                        scenarios. (fun fact: I love rocks!!)
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 
                                    className="text-xl text-center font-bold mb-4"
                                    style={{fontFamily: "Darker Grotesque"}}
                                > 
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 
                                    className="text-xl text-center font-bold mb-4"
                                    style={{fontFamily: "Darker Grotesque"}}
                                > 
                                    Backend
                                </h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                </div>
            </div>
                
        </section>
    )
}