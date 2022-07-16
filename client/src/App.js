import Nav from "./components/Nav";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden xl:px-44 lg:px-20 px-7 bg-[rgb(31,31,56)] text-white font-sans">
      <Nav />
      <About />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
