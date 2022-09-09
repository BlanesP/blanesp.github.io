import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Personal from "./components/Personal";
import Tech from "./components/Tech";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Work />
      <Tech />
      <Personal />
      <Footer />
    </div>
  );
}

export default App;
