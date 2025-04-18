import { useState, useEffect } from 'react';
import './App.css';
import AllRoutes from './AllRouters/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Loading from './Components/Loading'; // <- Import the loader 
import StickyContactButton from "./Components/StickyContactButton"
import TopUpButton from './Components/TopUpButton';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <AllRoutes />
          <Footer />
          <StickyContactButton />
          <TopUpButton />
        </div>
      )}
    </>
  );
}

export default App;
