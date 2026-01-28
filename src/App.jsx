//*barrel file pattern para importar componentes
import {
  Header,
  HomeSection,
  AboutSection,
  ServiceSection,
  TestimoniesSection,
  ContactSection
} from './components'

function App() {
  return (
    <>
    <main>
      <section className="home">
        <Header />
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
        <ContactSection />
      </section>
    </main>
    </>
  )
}

export default App
