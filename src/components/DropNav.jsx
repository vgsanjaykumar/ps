import React, { useEffect, useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

export const DropDown = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileTab, setExpandedMobileTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 p-4 flex justify-between items-center transition-all duration-300 
        ${isScrolled ? "md:bg-green-500" : "bg-[#363735]"} px-6 md:pr-28 pl-10 z-50`}
    >
      {/* Logo */}
      <div className="text-white text-xl font-bold">Photography</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-white">
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <NonDropdownLinks />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white text-2xl"
      >
        {isMobileMenuOpen ? <MdClose /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-gray-900 p-6 flex flex-col gap-4 z-50"
          >
            {TABS.map(({ id, title }) => (
              <div key={id} className="border-b border-gray-700">
                <button
                  onClick={() => setExpandedMobileTab(expandedMobileTab === id ? null : id)}
                  className="flex justify-between w-full text-white py-3"
                >
                  {title}{" "}
                  <FiChevronDown
                    className={`transition-transform ${
                      expandedMobileTab === id ? "rotate-180" : ""
                    }`}
                  />
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Tabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="relative flex gap-6 text-white" onMouseLeave={() => setSelectedTab(null)}>
      {TABS.map(({ id, title }) => (
        <div key={id} className="relative" onMouseEnter={() => setSelectedTab(id)}>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition hover:bg-gray-800">
            {title}{" "}
            <FiChevronDown
              className={`transition-transform ${selectedTab === id ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {selectedTab === id && <DropdownContent selectedTab={selectedTab} />}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const NonDropdownLinks = () => (
  <div className="flex items-center gap-6">
    {NON_DROPDOWN_LINKS.map(({ title, link }) => (
      <a key={title} href={link} className="text-white hover:text-green-400 transition">
        {title}
      </a>
    ))}
  </div>
);

const DropdownContent = ({ selectedTab, isMobile = false }) => {
  const TabComponent = TABS.find(({ id }) => id === selectedTab)?.Component;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={`bg-gray-900 p-4 rounded-lg border border-gray-700 shadow-lg ${
        isMobile ? "" : "absolute left-0 top-[calc(100%_+_5px)] w-80"
      }`}
    >
      <TabComponent />
    </motion.div>
  );
};

/* Submenu Style Update */
const Submenu = ({ items }) => (
  <div className="flex flex-col gap-2 p-2">
    {items.map((item, index) => (
      <a
        key={index}
        href="#"
        className="block text-sm text-gray-400 transition hover:bg-gray-700 hover:text-white p-2 rounded"
      >
        {item}
      </a>
    ))}
  </div>
);

const Weddings = () => <Submenu items={["Outdoor Shoots", "Pre-Wedding", "Post-Wedding", "Wedding-Film", "Event Coverage"]} />;
const BabyPhotography = () => <Submenu items={["Newborn Shoots", "First Birthday", "Themed Photoshoots"]} />;
const Gallery = () => <Submenu items={["Weddings", "Portraits", "Events", "Couple Portraits", "Candid Moments", "Corporate Shoots"]} />;
const Other = () => <Submenu items={["Drone Photography", "Video Shoots", "Photo Editing"]} />;

const TABS = [
  { id: 1, title: "Weddings", Component: Weddings },
  { id: 2, title: "Baby Photography", Component: BabyPhotography },
  { id: 3, title: "Gallery", Component: Gallery },
  { id: 4, title: "Other", Component: Other },
];

const NON_DROPDOWN_LINKS = [
  { title: "About", link: "#About" },
  { title: "Book Now", link: "#Contact" },
  { title: "Contact", link: "/contact" },
];
