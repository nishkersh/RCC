import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PageLayout from './components/PageLayout'

// About Us
import MissionVision from './pages/AboutUs/MissionVision';
import HistoryLegacy from './pages/AboutUs/HistoryLegacy';
import Team from './pages/AboutUs/Team';
import Achievements from './pages/AboutUs/Achievements';

// Impact
import Community from './pages/Impact/Community';
import International from './pages/Impact/International';
import Vocational from './pages/Impact/Vocational';
import Club from './pages/Impact/Club';
import Flagship from './pages/Impact/Flagship';

// Get Involved
import Member from './pages/GetInvolved/Member';
import Volunteer from './pages/GetInvolved/Volunteer';
import Partner from './pages/GetInvolved/Partner';

// More
import Events from './pages/More/Events';
import Gallery from './pages/More/Gallery';
import Blog from './pages/More/Blog';
import Contribute from './pages/More/Contribute';
import Resources from './pages/More/Resources';

// Contact
import Contact from './pages/Contact';

const NotFound = () => (
  <PageLayout title="404 - Not Found">
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <p>The page you are looking for does not exist.</p>
    </div>
  </PageLayout>
);

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About Us */}
          <Route path="/about-us/mission-vision" element={<MissionVision />} />
          <Route path="/about-us/history-legacy" element={<HistoryLegacy />} />
          <Route path="/about-us/team" element={<Team />} />
          <Route path="/about-us/achievements" element={<Achievements />} />

          {/* Our Impact */}
          <Route path="/impact/community" element={<Community />} />
          <Route path="/impact/international" element={<International />} />
          <Route path="/impact/vocational" element={<Vocational />} />
          <Route path="/impact/club" element={<Club />} />
          <Route path="/impact/flagship" element={<Flagship />} />

          {/* Get Involved */}
          <Route path="/get-involved/member" element={<Member />} />
          <Route path="/get-involved/volunteer" element={<Volunteer />} />
          <Route path="/get-involved/partner" element={<Partner />} />

          {/* More */}
          <Route path="/more/events" element={<Events />} />
          <Route path="/more/gallery" element={<Gallery />} />
          <Route path="/more/blog" element={<Blog />} />
          <Route path="/more/contribute" element={<Contribute />} />
          <Route path="/more/resources" element={<Resources />} />

          {/* Contact */}
          <Route path="/contact-us" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
