import Marquee from "./components/Marquee";
import About from "./pages/about";
import Contact from "./pages/contact";
import Hero from "./pages/hero";
import Shop from "./pages/shop";


function App() {
  return (
    <div className="background-colour font-AzeretMono flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <Shop />
      <Contact />
      <Marquee message="Email benjaminduffield1997@gmail.com" />
    </div>
  );
}

export default App;
