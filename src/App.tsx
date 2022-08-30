import Cards from './Components/Cards/Cards';
import Client from './Components/Client/Client';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Pictures from './Components/Pictures/Pictures';
import Stand from './Components/Stand/Stand';
import Transform from './Components/Transform/Transform';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Transform />
        <Stand />
        <Cards />
        <Client />
        <Pictures />
      </main>
      <Footer />
    </>
  );
}

export default App;
