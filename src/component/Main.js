import Hello from './Hello';
import About from './About';
import Contact from './Contact';
import MainNav from './MainNav';
import Footer from './Footer';

export default function Main() {
  return (
    <div className='main-wrap'>
      <MainNav />
      <Hello />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}