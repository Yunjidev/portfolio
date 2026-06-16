import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col items-center relative">
      {/* Background ambiance */}
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-tiffany rounded-full mix-blend-screen filter blur-[120px] opacity-[0.07] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.1] pointer-events-none z-0"></div>

      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
