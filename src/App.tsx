import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer, ScrollToTop } from './components';
import { 
  Home, 
  About, 
  Menu, 
  Gallery, 
  Events, 
  Reservations, 
  Testimonials, 
  Contact 
} from './pages';
import './styles/globals.scss';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
