import {
  Header,
  HomeSection,
  AboutSection,
  ServiceSection,
  TestimoniesSection,
  ContactSection,
  Footer
} from './components'
import useAOS from "../src/hook/UseaAos";


function App() {
   useAOS(); 

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
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
