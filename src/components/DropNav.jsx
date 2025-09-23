import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { BiHome } from "react-icons/bi";
import Logo from "/award/hero-1.jpeg";

export const DropDown = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileTab, setExpandedMobileTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to a section by ID
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // close mobile menu if open
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 p-4 flex justify-between items-center transition-all duration-300 
        ${isScrolled ? "bg-[#4ac6bfd5]" : "bg-transparent"} px-6 md:pr-28 pl-10`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="Logo" className="h-[30px] rounded-full w-[30px]" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-white">
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} scrollToId={scrollToId} />
        <NonDropdownLinks scrollToId={scrollToId} />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white text-2xl"
      >
        <FiMenu />
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
            {/* Close button */}
            <div className="w-full flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="md:hidden text-white text-3xl hover:text-teal-400"
              >
                <MdClose />
              </button>
            </div>

            {/* Mobile Tabs */}
            {TABS.map(({ id, title }) => (
              <div key={id} className="border-b border-gray-700">
                <button
                  onClick={() =>
                    setExpandedMobileTab(expandedMobileTab === id ? null : id)
                  }
                  className="flex justify-between w-full text-white py-3"
                >
                  {title}{" "}
                  <FiChevronDown
                    className={`transition-transform ${expandedMobileTab === id ? "rotate-180" : ""}`}
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
                      <DropdownContent
                        selectedTab={expandedMobileTab}
                        isMobile
                        closeMobileMenu={() => setIsMobileMenuOpen(false)}
                        scrollToId={scrollToId}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Non-dropdown links */}
            {NON_DROPDOWN_LINKS.map(({ id, title, scrollId, link }) =>
              scrollId ? (
                <button
                  key={id}
                  className="border-b border-gray-700 block text-white py-3 text-left"
                  onClick={() => scrollToId(scrollId)}
                >
                  {title}
                </button>
              ) : (
                <Link
                  key={id}
                  to={link}
                  className="border-b border-gray-700 block text-white py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {title}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Desktop Tabs
const Tabs = ({ selectedTab, setSelectedTab, scrollToId }) => (
  <div
    className="relative flex gap-6 text-white"
    onMouseLeave={() => setSelectedTab(null)}
  >
    <div className="text-center items-center py-4">
      <Link to="/">
        <BiHome className="text-center items-center" />
      </Link>
    </div>

    {TABS.map(({ id, title }) => (
      <div key={id} className="relative" onMouseEnter={() => setSelectedTab(id)}>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition hover:bg-gray-800">
          {title} <FiChevronDown className={`transition-transform ${selectedTab === id ? "rotate-180" : ""}`} />
        </button>
        <AnimatePresence>
          {selectedTab === id && <DropdownContent selectedTab={selectedTab} scrollToId={scrollToId} />}
        </AnimatePresence>
      </div>
    ))}
  </div>
);

// Desktop Non-dropdown links
const NonDropdownLinks = ({ scrollToId }) => (
  <div className="flex items-center gap-6">
    {NON_DROPDOWN_LINKS.map(({ title, scrollId, link }) =>
      scrollId ? (
        <button
          key={title}
          onClick={() => scrollToId(scrollId)}
          className="text-white hover:text-gray-300 transition"
        >
          {title}
        </button>
      ) : (
        <Link key={title} to={link} className="text-white hover:text-gray-300 transition">
          {title}
        </Link>
      )
    )}
  </div>
);

// Dropdown content component
const DropdownContent = ({ selectedTab, isMobile = false, closeMobileMenu, scrollToId }) => {
  const TabComponent = TABS.find(({ id }) => id === selectedTab)?.Component;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={`bg-gray-900 p-4 rounded-lg border border-gray-400 shadow-lg ${isMobile ? "" : "absolute left-0 top-[calc(100%_+_5px)] w-80"
        }`}
    >
      <TabComponent closeMobileMenu={closeMobileMenu} scrollToId={scrollToId} />
    </motion.div>
  );
};

// Submenu for dropdown items
const Submenu = ({ items, closeMobileMenu, scrollToId }) => (
  <div className="flex flex-col gap-2 p-2">
    {items.map((item, index) =>
      item.scrollId ? (
        <button
          key={index}
          onClick={() => scrollToId(item.scrollId)}
          className="block text-sm text-white transition hover:bg-gray-600 hover:text-white p-2 rounded text-left"
        >
          {item.title}
        </button>
      ) : (
        <Link
          key={index}
          to={item.link}
          className="block text-sm text-white transition hover:bg-gray-600 hover:text-white p-2 rounded"
          onClick={() => closeMobileMenu?.()}
        >
          {item.title}
        </Link>
      )
    )}
  </div>
);

// Dropdown Tab Components
const About = ({ closeMobileMenu, scrollToId }) => (
  <Submenu
    items={[
      { title: "Our Serives", scrollId: "Serives" },
      { title: "Our Story", scrollId: "About" },
    ]}
    closeMobileMenu={closeMobileMenu}
    scrollToId={scrollToId}
  />
);

const Weddings = ({ closeMobileMenu }) => (
  <Submenu
    items={[
      { title: "Outdoor Shoots", link: "/weddings/outdoor" },
      { title: "Pre-Wedding", link: "/weddings/pre-wedding" },
      { title: "Post-Wedding", link: "/weddings/post-wedding" },
    ]}
    closeMobileMenu={closeMobileMenu}
  />
);

const Gallery = ({ closeMobileMenu }) => (
  <Submenu
    items={[
      { title: "Wedding", link: "/gallery/wedding" },
      { title: "Reception", link: "/gallery/reception" },
      { title: "Portraits", link: "/gallery/portraits" },
      { title: "Events", link: "/gallery/events" },
      { title: "Couple Portraits", link: "/gallery/couple-portraits" },
      { title: "Family Portraits", link: "/gallery/family-portraits" },
    ]}
    closeMobileMenu={closeMobileMenu}
  />
);

const Other = ({ closeMobileMenu }) => (
  <Submenu
    items={[
      { title: "Baby Photography", link: "/other/baby-photography" },
      { title: "Birthday Celebration", link: "/other/birthday-celebration" },
      { title: "Drone Photography", link: "/other/drone-photography" },
      { title: "Video Shoots", link: "/other/video-shoot" },
      { title: "Photo Editing", link: "/other/photo-edit" },
    ]}
    closeMobileMenu={closeMobileMenu}
  />
);

// Tabs & Non-dropdown arrays
const TABS = [
  { id: 1, title: "About", Component: About },
  { id: 2, title: "Weddings", Component: Weddings },
  { id: 3, title: "Gallery", Component: Gallery },
  { id: 4, title: "Other", Component: Other },
];

const NON_DROPDOWN_LINKS = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Contact", scrollId: "Contacts" },
];
