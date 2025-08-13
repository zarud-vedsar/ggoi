import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// CSS imports
import '../Components/Website/assets/css/plugins/animate.min.css';
import '../Components/Website/assets/css/plugins/fontawesome.min.css';
import '../Components/Website/assets/css/vendor/bootstrap.min.css';
import '../Components/Website/assets/css/plugins/swiper.min.css';
import '../Components/Website/assets/css/vendor/metismenu.css';
import '../Components/Website/assets/css/plugins/nice-select.css';
import '../Components/Website/assets/css/plugins/jquery-ui.css';
import '../Components/Website/assets/css/style.css';
import '../Components/Website/assets/css/am-style.css';
import Navbar from '../Components/Website/Navbar.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Lazy load website pages
const WebsitePaths = {
  Home: lazy(() => import('../Pages/Website/Home')),
  CollegeDetailPage: lazy(() => import('../Pages/Website/CollegeDetailPage')),

  About: lazy(() => import('../Pages/Website/AboutUs.jsx')),
  VisionAndMission: lazy(() => import('../Pages/Website/VisionMission.jsx')),
  Messages: lazy(() => import('../Pages/Website/Messages.jsx')),
};

function Website() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname])
  useEffect(() => {
    // Global plugin JS imports (must be in public/assets/js or src-relative)
    const loadScripts = async () => {
      await import('../Components/Website/assets/js/vendor/jquery.min.js');
      await import('../Components/Website/assets/js/plugins/bootstrap.min.js');
      await import('../Components/Website/assets/js/vendor/jquery-ui.js');
      await import('../Components/Website/assets/js/vendor/waw.js');
      await import('../Components/Website/assets/js/vendor/metismenu.js');
      await import('../Components/Website/assets/js/vendor/waypoint.js');
      await import('../Components/Website/assets/js/plugins/isotop.js');
      await import('../Components/Website/assets/js/plugins/imagesloaded.pkgd.min.js');
      await import('../Components/Website/assets/js/plugins/sticky-sidebar.js');
      await import('../Components/Website/assets/js/plugins/resize-sensor.js');
      await import('../Components/Website/assets/js/plugins/twinmax.js');
      await import('../Components/Website/assets/js/main.js');
    };

    loadScripts();
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <Suspense fallback={<div>Loading Website...</div>}>
      <Navbar />
      <Routes>
        <Route path="/" element={<WebsitePaths.Home />} />
        <Route path="/:collegeId" element={<WebsitePaths.CollegeDetailPage />} />
        <Route path="/about-us" element={<WebsitePaths.About />} />
        <Route path="*" element={<Navigate to='/page-not-found' />} />
        <Route path="/vision-mission" element={<WebsitePaths.VisionAndMission />} />
        <Route path="/messages" element={<WebsitePaths.Messages />} />
      </Routes>
    </Suspense>
  );
}

export default Website;
