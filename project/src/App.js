import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Content />
        <Footer />
      </>
    </Router>
  );
}

export default App;
