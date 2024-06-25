import About from "./pages/about";
import Contact from "./pages/contact";
import Hero from "./pages/hero";
import Shop from "./pages/shop";


function App() {
  return (
    <div className="background-colour font-AzeretMono flex min-h-screen flex-col items-center w-full">
      <Hero />
      <About />
      <Shop />
      <Contact />
    </div>
  );
}

export default App;
