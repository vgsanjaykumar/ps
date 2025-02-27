



import { DropDown } from "./components/DropNav"

import About from "./components/About"
import Contact from "./components/Contact"

import { Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Footer1 from "./components/Footer"
import Weddinghome from "./components/Wedd/Outdoor/Weddinghome"
import Prewedhome from "./components/Wedd/Prewedding/Prewedhome"
import Postwedhome from "./components/Wedd/Postweddding/Postwedhome"
import WhatsAppButton from "./components/Whatappbtn"
import Notfound from "./components/Notfound"
import Galleryhome from "./components/Gallery/Galleryhome"
import GalleryWeddinghome from "./components/Gallery/Wedding/Weddinghome"
import Portraitshome from "./components/Gallery/Portraits/Portraitshome"
import Eventhome from "./components/Gallery/Events/Eventhome"
import Couplehome from "./components/Gallery/Couple Portraits/Couplehome"
import Candidhome from "./components/Gallery/candid Momenet/Candidhome"






function App() {

  return (
    <>


      <DropDown />





      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/weddings/outdoor" element={<Weddinghome />} />
        <Route path="/weddings/pre-wedding" element={<Prewedhome />} />
        <Route path="/weddings/post-wedding" element={<Postwedhome />} />
        <Route path="/gallery/wedding/" element={<Galleryhome />} />
        <Route path="/gallery/Weddings" element={<GalleryWeddinghome />} />
        <Route path="/gallery/Candid Moment" element={<Candidhome />} />
        <Route path="/gallery/Couple portraits" element={<Couplehome />} />
        <Route path="/gallery/events" element={<Eventhome />} />
        <Route path="/gallery/portraits" element={<Portraitshome />} />
        <Route path="/gallery/all" element={<Galleryhome />} />



        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer1 />
      <WhatsAppButton />






    </>
  )
}

export default App
