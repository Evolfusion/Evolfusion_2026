//*barrel file pattern para importar componentes
import {
  Header,
  HomeSection,
  AboutSection
} from './components'

function App() {
  return (
    <>
    {/* Components Header */}
    <Header />
    <main>
      <section className="home">
        <HomeSection />
      </section>
      <section className="about">
        <AboutSection />
      </section>
      
    </main>
    </>
  )
}

export default App
