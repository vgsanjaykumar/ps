import React, { useEffect, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export const DropDown = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileTab, setExpandedMobileTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 p-3 flex justify-between items-center transition-all duration-300 
      ${isScrolled ? "bg-green-500 shadow-md" : "bg-transparent"} px-6 md:px-10`}>

      {/* Logo */}
      <Link to="/" className="text-white text-xl font-bold">
        Photography
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-white">
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <NonDropdownLinks />
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white text-2xl">
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-gray-900 p-6 flex flex-col gap-4 z-50"
          >
            {TABS.map(({ id, title }) => (
              <div key={id} className="border-b border-gray-700">
                <button
                  onClick={() => setExpandedMobileTab(expandedMobileTab === id ? null : id)}
                  className="flex justify-between w-full text-white py-3"
                >
                  {title} <FiChevronDown className={`transition-transform ${expandedMobileTab === id ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {expandedMobileTab === id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-2 bg-gray-800 rounded-md"
                    >
                      <DropdownContent selectedTab={expandedMobileTab} isMobile />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              {NON_DROPDOWN_LINKS.map(({ title, link }) => (
                <Link key={title} to={link} className="text-white py-2 hover:text-green-400">
                  {title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Tabs = ({ selectedTab, setSelectedTab }) => (
  <div className="relative flex gap-6 text-white" onMouseLeave={() => setSelectedTab(null)}>
    {TABS.map(({ id, title }) => (
      <div key={id} className="relative" onMouseEnter={() => setSelectedTab(id)}>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition hover:bg-gray-800">
          {title} <FiChevronDown className={`transition-transform ${selectedTab === id ? "rotate-180" : ""}`} />
        </button>
        <AnimatePresence>
          {selectedTab === id && <DropdownContent selectedTab={selectedTab} />}
        </AnimatePresence>
      </div>
    ))}
  </div>
);

const NonDropdownLinks = () => (
  <div className="flex items-center gap-6">
    {NON_DROPDOWN_LINKS.map(({ title, link }) => (
      <Link key={title} to={link} className="text-white hover:text-green-400 transition">
        {title}
      </Link>
    ))}
  </div>
);

const DropdownContent = ({ selectedTab, isMobile = false }) => {
  const TabComponent = TABS.find(({ id }) => id === selectedTab)?.Component;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
      className={`bg-gray-900 p-4 rounded-lg border border-gray-700 shadow-lg ${isMobile ? "" : "absolute left-0 top-[calc(100%_+_5px)] w-80"}`}
    >
      <TabComponent />
    </motion.div>
  );
};

// Define Tab Components
const Weddings = () => (
  <div>
    <ul className="text-gray-400 text-sm space-y-2 mt-2">
      <Link to="/outdoor-shoots"><li>Outdoor Shoots</li></Link>
      <Link to="/pre-wedding"><li>Pre-Wedding</li></Link>
      <Link to="/post-wedding"><li>Post-Wedding</li></Link>
      <Link to="/wedding-film"><li>Wedding-Film</li></Link>
      <Link to="/event-coverage"><li>Event Coverage</li></Link>
    </ul>
  </div>
);

const BabyPhotography = () => (
  <div>
    <ul className="text-gray-400 text-sm space-y-2 mt-2">
      <Link to="/newborn-shoots"><li>Newborn Shoots</li></Link>
      <Link to="/first-birthday"><li>First Birthday</li></Link>
      <Link to="/themed-photoshoots"><li>Themed Photoshoots</li></Link>
    </ul>
  </div>
);

const Gallery = () => (
  <div>
    <ul className="text-gray-400 text-sm space-y-2 mt-2">
      <Link to="/weddings"><li>Weddings</li></Link>
      <Link to="/portraits"><li>Portraits</li></Link>
      <Link to="/events"><li>Events</li></Link>
      <Link to="/couple-portraits"><li>Couple Portraits</li></Link>
    </ul>
  </div>
);

const Other = () => (
  <div>
    <ul className="text-gray-400 text-sm space-y-2 mt-2">
      <Link to="/drone-photography"><li>Drone Photography</li></Link>
      <Link to="/video-shoots"><li>Video Shoots</li></Link>
      <Link to="/photo-editing"><li>Photo Editing</li></Link>
    </ul>
  </div>
);

// Define Navigation Tabs
const TABS = [
  { id: 1, title: "Weddings", Component: Weddings },
  { id: 2, title: "Baby Photography", Component: BabyPhotography },
  { id: 3, title: "Gallery", Component: Gallery },
  { id: 4, title: "Other", Component: Other },
];

// Define Non-Dropdown Links
const NON_DROPDOWN_LINKS = [
  { title: "About", link: "/about" },
  { title: "Book Now", link: "/contact" },
  { title: "Contact", link: "/contact" },
  { title: "Home", link: "/" },
];
