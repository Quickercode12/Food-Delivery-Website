import Layout from "./components/Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // smooth animation duration
      once: true, // animation only once
    });
  }, []);
  return <Layout />;
}

export default App;
