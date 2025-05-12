import emailjs from "emailjs-com"
import { useState } from "react"

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
            alert("Message Sent!");
            setFormData({ name: "", email: "", message: ""});
        })
        .catch(() => alert("Something went wrong. Please try again!"));
    }

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="px-4 w-150">
                <h2 
                    className="text-3xl font-bold mb-8 text-center"
                    style={{fontFamily: "La Belle Aurore"}}
                >
                    Get In Touch!
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            className="w-full bg-blue/5 border border-blue/10 rounded px-4 py-3 text-blue transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            placeholder="Name"
                            style={{ fontFamily: "Darker Grotesque" }}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>

                    <div className="relative">
                        <input type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            className="w-full bg-blue/5 border border-blue/10 rounded px-4 py-3 text-blue transition focus:outline-none focus:border-blue-500 focus:bg-blue"
                            placeholder="Email"
                            style={{ fontFamily: "Darker Grotesque" }}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>

                    <div className="relative">
                        <textarea 
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            rows={5}
                            className="w-full bg-blue/5 border border-blue/10 rounded px-4 py-3 text-blue transition focus:outline-none focus:border-blue-500 focus:bg-blue"
                            placeholder="Your Message"
                            style={{ fontFamily: "Darker Grotesque" }}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#9fd7e9] text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:brightness-110"
                        style={{fontFamily: "Darker Grotesque"}}
                    >
                        Send Message!
                    </button>
                </form>
            </div>
        </section>
    )
}