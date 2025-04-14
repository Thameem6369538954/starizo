import { useState, useEffect } from 'react';
import './App.css';
import AllRoutes from './AllRouters/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Loading from './Components/Loading'; // <- Import the loader

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
        </div>
      )}
    </>
  );
}

export default App;
