//*barrel file pattern para importar componentes
import {
  Header,
  HomeSection,
  AboutSection,
  ServiceSection,
  TestimoniesSection,
  ContacSection
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
      <section className="service">
        <ServiceSection />
      </section>
      <section className='testimonie'>
        <TestimoniesSection />
      </section>
      <section className="contact">
        <ContacSection />
      </section>
    </main>
    </>
  )
}

export default App
