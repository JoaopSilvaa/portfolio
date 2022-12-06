import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Skills from "../components/Skills";

function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
