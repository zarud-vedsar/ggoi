import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load all public website pages
const WebsitePaths = {
  Home: lazy(() => import('../Pages/Website/Home')),              // Homepage (/)
  PageNotFound: lazy(() => import('../Pages/PageNotFound'))       // 404 page for unknown routes
};

function Website() {
  return (
    // Show fallback loader while components are being lazily loaded
    <Suspense fallback={<div>Loading Website...</div>}>
      <Routes>
        {/* Public Home Route */}
        <Route path="/" element={<WebsitePaths.Home />} />

        {/* Catch-all route for any invalid URL (e.g., /xyz, /not-found) */}
        <Route path="*" element={<WebsitePaths.PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Website;
