import React from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

// images
import slack_logo from "./Assets/slack_logo.png";
import fox_logo from "./Assets/fox_logo.png";
import carvana_logo from "./Assets/carvana_logo.jpg";
import intuit_logo from "./Assets/Intuit_Logo.svg.png";
import kiva_logo from "./Assets/Kiva_logo.svg.png";
import lonelyplanet_logo from "./Assets/lonely_planet.png";
import google_logo from "./Assets/G__logo.svg.webp";
import red_dot from "./Assets/red_dot.webp";
import card from "./Assets/card.png";
import card2 from "./Assets/card2.png";



const Navbar = () => (
  <nav className="flex justify-between items-center mt-4 px-16 bg-white shadow-md">
    <div className="flex items-center space-x-6">
      <img src={slack_logo} alt="slack_logo" className="h-16" />
      
      <div className="flex cursor-pointer text-gray-600 hover:text-gray-800">
        Product
        <FaChevronDown className="ml-1 mt-1 w-3" />
      </div>
      <div className="cursor-pointer text-gray-600 hover:text-gray-800">Enterprise</div>
      <div className="cursor-pointer text-gray-600 hover:text-gray-800">Resources</div>
      <div className="cursor-pointer text-gray-600 hover:text-gray-800">Pricing</div>
    </div>

    <div className="space-x-4">
      <button className="text-gray-600">
        <FaSearch className="ml-1 mt-2 w-4" />
      </button>
      <button className="text-gray-600">Sign in</button>
      <button className="text-purple-600 font-semibold border border-2 border-purple-600 px-4 py-2 rounded">TALK TO SALES</button>
      <button className="bg-purple-600 font-semibold text-white px-4 py-2 rounded">TRY FOR FREE</button>
    </div>
  </nav>
);

const NavbarNotify = () => (
  <div className="bg-white">
    <div className="mx-4 bg-blue-800 text-white rounded-full px-10 py-4 flex justify-between items-center">
      <span>
        Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world.
        <b className="border-b-2 border-white cursor-pointer"> Let's go →</b>
      </span>
      <span className="text-2xl font-bold cursor-pointer">&times;</span>
    </div>
  </div>
);

const HeroSection = () => (
  <header className="flex flex-col md:flex-row items-center justify-between py-6 px-28 bg-white">
    <div className="text-left md:w-1/2">
      <h1 className="text-5xl font-bold text-gray-900">Slack is where the <br/> future works</h1>
      <p className="text-gray-600 font-semibold mt-4">Transform the way you work with one place for <br/>everyone and everything you need to get stuff done.</p>
      <div className="flex mt-6">
        <button className="bg-purple-600 text-white px-6 py-3 rounded mr-2">TRY FOR FREE</button>
        <button className="flex bg-blue-400 text-white font-semibold px-1 pr-2 py-2 rounded">
          <img src={google_logo} alt="slack_logo" className="h-8 bg-white mr-3 p-2" />
          SIGN UP WITH GOOGLE
        </button>
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
      <img src={card} alt="Hero Mockup" className="max-w-full h-full" />
    </div>
  </header>
);

const TrustedCompanies = () => (
  <section className="text-center px-28 p-4 bg-gray-50">
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center">
      <img src={fox_logo} alt="FOX" className="h-8" />
      <img src={lonelyplanet_logo} alt="Lonely Planet" className="h-12" />
      <img src={intuit_logo} alt="Intuit" className="h-8" />
      <img src={carvana_logo} alt="Carvana" className="h-8" />
      <img src={kiva_logo} alt="Kiva" className="h-8" />
      <img src={red_dot} alt="red_dot" className="h-8" />
    </div>
  </section>
);

const FooterSection = () => (
  <header className="flex flex-col md:flex-row items-center justify-between px-20 py-4 bg-white">
    <div className="md:w-1/2 flex justify-center md:mt-0">
    <img src={card2} alt="Hero Mockup" className="max-w-full w-3/4" />
    </div>
    <div className="text-left md:w-1/2">
      <h1 className="text-2xl font-bold text-gray-900">Now is your moment to build a<br/>better tomorrow</h1>
      <p className="text-gray-600 mt-4">We've seen what the future can be. Now it's time to decide<br/>what it will be.</p>
      <button className="mt-2 bg-white text-purple-600 border border-purple-600 border-2 px-6 py-2 rounded">WATCH VIDEO</button>
    </div>
  </header>
);

const App = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Navbar />
      <NavbarNotify />
      <HeroSection />
      <TrustedCompanies />
      <FooterSection />
    </div>
  );
};

export default App;