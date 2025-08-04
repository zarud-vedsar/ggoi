import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// CSS imports
import '../Components/Website/assets/css/plugins/animate.min.css';
import '../Components/Website/assets/css/plugins/fontawesome.min.css';
import '../Components/Website/assets/css/vendor/bootstrap.min.css';
import '../Components/Website/assets/css/plugins/swiper.min.css';
import '../Components/Website/assets/css/vendor/metismenu.css';
import '../Components/Website/assets/css/plugins/nice-select.css';
import '../Components/Website/assets/css/plugins/jquery-ui.css';
import '../Components/Website/assets/css/style.css';
import Navbar from '../Components/Website/Navbar.jsx';

// Lazy load website pages
const WebsitePaths = {
  Home: lazy(() => import('../Pages/Website/Home')),
};

function Website() {
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

  return (
    <Suspense fallback={<div>Loading Website...</div>}>
      <Navbar />
      <Routes>
        <Route path="/" element={<WebsitePaths.Home />} />
        <Route path="*" element={<Navigate to='/page-not-found' />} />
      </Routes>
    </Suspense>
  );
}

export default Website;
