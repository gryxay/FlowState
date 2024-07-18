import './styles/Root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <Banner />
      <Services />
      <Gallery />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
