import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
import Loader from '../Components/common/Loader.jsx';
// Lazy load website pages
const WebsitePaths = {
  Home: lazy(() => import('../Pages/Website/Home')),
  CollegeDetailPage: lazy(() => import('../Pages/Website/CollegeDetailPage')),

  About: lazy(() => import('../Pages/Website/AboutUs.jsx')),
  ContactUs: lazy(() => import('../Pages/Website/ContactUs.jsx')),
  VisionAndMission: lazy(() => import('../Pages/Website/VisionMission.jsx')),
  Messages: lazy(() => import('../Pages/Website/Messages.jsx')),
  BachelorOfArts: lazy(() => import('../Pages/Website/UnderGraduation/BachelorOfArts.jsx')),
  BachelorOfScience: lazy(() => import('../Pages/Website/UnderGraduation/BachelorOfScience.jsx')),
  BachelorOfCommerce: lazy(() => import('../Pages/Website/UnderGraduation/BachelorOfCommerce.jsx')),
  BscAgriculture: lazy(() => import('../Pages/Website/UnderGraduation/BscAgriculture.jsx')),
  BCAApplications: lazy(() => import('../Pages/Website/UnderGraduation/BCAApplications.jsx')),
  BachelorOfLaws: lazy(() => import('../Pages/Website/UnderGraduation/BachelorOfLaws.jsx')),
  BachelorOfEducation: lazy(() => import('../Pages/Website/UnderGraduation/BachelorOfEducation.jsx')),
  BscBiotech: lazy(() => import('../Pages/Website/UnderGraduation/BscBiotech.jsx')),
  BachelorOfBPED: lazy(() => import('../Pages/Website/UnderGraduation/BachelorOfBPED.jsx')),
  BPharma: lazy(() => import('../Pages/Website/UnderGraduation/BPharma.jsx')),
  MasterOfArts: lazy(() => import('../Pages/Website/UnderGraduation/MasterOfArts.jsx')),
  MasterOfScience: lazy(() => import('../Pages/Website/UnderGraduation/MasterOfScience.jsx')),
  MasterOfCommerce: lazy(() => import('../Pages/Website/UnderGraduation/MasterOfCommerce.jsx')),
  MscAgriculture: lazy(() => import('../Pages/Website/UnderGraduation/MscAgriculture.jsx')),
  BTCEducation: lazy(() => import('../Pages/Website/UnderGraduation/BTCEducation.jsx')),
  DPharma: lazy(() => import('../Pages/Website/UnderGraduation/DPharma.jsx')),
  ITIElectrician: lazy(() => import('../Pages/Website/UnderGraduation/ITIElectrician.jsx')),
  ITIFitter: lazy(() => import('../Pages/Website/UnderGraduation/ITIFitter.jsx')),
  ITIElectronicsMechanic: lazy(() => import('../Pages/Website/UnderGraduation/ITIElectronicsMechanic.jsx'))
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
    <Suspense fallback={<div><Loader/></div>}>
      <Navbar />

      <Routes>
        <Route path="/" element={<WebsitePaths.Home />} />
        <Route path="/college/:collegeId" element={<WebsitePaths.CollegeDetailPage />} />
        <Route path="/about-us" element={<WebsitePaths.About />} />
        <Route path="/contact-us" element={<WebsitePaths.ContactUs />} />
        <Route path="*" element={<Navigate to='/page-not-found' />} />
        <Route path="/vision-mission" element={<WebsitePaths.VisionAndMission />} />
        <Route path="/messages" element={<WebsitePaths.Messages />} />
        <Route path="/bachelor-of-arts" element={<WebsitePaths.BachelorOfArts />} />
        <Route path="/bachelor-of-science" element={<WebsitePaths.BachelorOfScience />} />
        <Route path="/bachelor-of-commerce" element={<WebsitePaths.BachelorOfCommerce />} />
        <Route path="/bsc-agriculture" element={<WebsitePaths.BscAgriculture />} />
        <Route path="/bca-applications" element={<WebsitePaths.BCAApplications />} />
        <Route path="/bachelor-of-laws" element={<WebsitePaths.BachelorOfLaws />} />
        <Route path="/bachelor-of-education" element={<WebsitePaths.BachelorOfEducation />} />
        <Route path="/bsc-biotech" element={<WebsitePaths.BscBiotech />} />
        <Route path="/bachelor-of-BPEd" element={<WebsitePaths.BachelorOfBPED />} />
        <Route path="/b-pharma" element={<WebsitePaths.BPharma />} />
        <Route path="/master-of-arts" element={<WebsitePaths.MasterOfArts />} />
        <Route path="/master-of-science" element={<WebsitePaths.MasterOfScience />} />
        <Route path="/master-of-commerce" element={<WebsitePaths.MasterOfCommerce />} />
        <Route path="/msc-agriculture" element={<WebsitePaths.MscAgriculture />} />
        <Route path="/BTC-education" element={<WebsitePaths.BTCEducation />} />
        <Route path="/D-pharma" element={<WebsitePaths.DPharma />} />
        <Route path="/ITI-electrician" element={<WebsitePaths.ITIElectrician />} />
        <Route path="/ITI-fitter" element={<WebsitePaths.ITIFitter />} />
        <Route path="/ITI-electronics-mechanic" element={<WebsitePaths.ITIElectronicsMechanic />} />
      </Routes>
      <ToastContainer />
    </Suspense>
  );
}

export default Website;
