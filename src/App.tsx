import Nav from './components/Nav'
import Hero from './components/Hero'
import NextShow from './components/NextShow'
import About from './components/About'
import Ventures from './components/Ventures'
import Shows from './components/Shows'
import Gallery from './components/Gallery'
import Press from './components/Press'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-ink">
      <Nav />
      <main>
        <Hero />
        <NextShow />
        <About />
        <Ventures />
        <Shows />
        <Gallery />
        <Press />
      </main>
      <Footer />
    </div>
  )
}
