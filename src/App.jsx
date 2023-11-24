import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className='container'>

      <Header />
      
      <Hero />
      <div className='divider'></div>
      <Main />
      <div className='divider'></div>
      <Contact />
      <div className='divider'></div>
      <Footer />

    </div>
  );
}

export default App;
