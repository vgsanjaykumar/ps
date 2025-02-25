import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export const DropDown = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 550);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "md:bg-[rgb(86,206,59)]" : "bg-[rgba(255,242,0,0.0)]"
      } p-2 fixed flex justify-between w-full z-50 transition-all duration-300`}
    >
      {/* Logo
      <div className="md:block hidden">
        <img className="xl:w-32 lg:w-24 w-20 h-30" src="/assets/logomain.png" alt="Logo" />
      </div> */}

      {/* Main navigation for large screens */}
      <div className="hidden md:flex  mjustify-center">
        <Tabs />
      </div>

      {/* Mobile menu button */}
      <span
        className="text-xl md:hidden bg-[#00000048] w-10 h-10 flex items-center justify-center text-white rounded-xl cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <FiMenu />
      </span>

      {/* Mobile menu */}
      {showMenu && (
        <div className="z-50 w-[60%] h-screen absolute top-0 left-0 p-4 bg-[#FFF200]">
          <div className="flex flex-col gap-8 py-4 relative">
            <ul className="flex flex-col text-lg gap-4 py-10">
              {TABS.map((tab) => (
                <li key={tab.id}>
                  <a href={tab.href} className="text-gray-800 hover:text-white" onClick={() => setShowMenu(false)}>
                    {tab.title}
                  </a>
                </li>
              ))}
            </ul>
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-2 right-4 text-black hover:text-designColor duration-300 text-xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

// Tabs Component
const Tabs = () => {
  return (
    <div className="relative flex h-fit gap-2">
      {TABS.map((tab) => (
        <Menu as="div" key={tab.id} className="relative">
          <Menu.Button className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-100">
            {tab.title}
            <FiChevronDown className="transition-transform" />
          </Menu.Button>

          <Menu.Items className="absolute left-0 mt-2 w-56 rounded-md border border-neutral-600 bg-neutral-900 p-3">
            <tab.Component />
          </Menu.Items>
        </Menu>
      ))}
    </div>
  );
};

// Individual dropdown content components
const Products = () => (
  <div className="space-y-2 text-sm text-neutral-400">
    <h3 className="text-white font-medium">Startup</h3>
    <a href="#" className="block hover:text-white">Bookkeeping</a>
    <a href="#" className="block hover:text-white">Invoicing</a>

    <h3 className="text-white font-medium mt-2">Enterprise</h3>
    <a href="#" className="block hover:text-white">White Glove</a>
    <a href="#" className="block hover:text-white">Compliance</a>

    <button className="mt-4 w-full rounded-md bg-neutral-700 px-4 py-2 text-white transition hover:bg-neutral-600">
      View all products
    </button>
  </div>
);

const Pricing = () => (
  <div className="text-sm text-neutral-400">
    <p>Choose the best pricing plan for your needs.</p>
    <button className="mt-4 w-full rounded-md bg-neutral-700 px-4 py-2 text-white transition hover:bg-neutral-600">
      See Pricing Plans
    </button>
  </div>
);

const Blog = () => (
  <div className="text-sm text-neutral-400">
    <p>Stay updated with the latest industry news.</p>
    <button className="mt-4 w-full rounded-md bg-neutral-700 px-4 py-2 text-white transition hover:bg-neutral-600">
      Read Our Blog
    </button>
  </div>
);

// Define the tab structure
const TABS = [
  { id: "products", title: "Products", Component: Products, href: "#products" },
  { id: "pricing", title: "Pricing", Component: Pricing, href: "#pricing" },
  { id: "blog", title: "Blog", Component: Blog, href: "#blog" },
];

export default DropDown;
