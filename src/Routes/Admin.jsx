import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load all admin-related pages
const AdminPaths = {
  Dashboard: lazy(() => import('../Pages/Admin/Dashboard')),       // Main admin dashboard
  PageNotFound: lazy(() => import('../Pages/PageNotFound.jsx'))   // 404 fallback for admin routes
};

function Admin() {
  return (
    // Suspense is used to show fallback while lazy components are loading
    <Suspense fallback={<div>Loading Admin...</div>}>
      <Routes>
        {/* Default admin dashboard route (/admin) */}
        <Route path="/" element={<AdminPaths.Dashboard />} />

        {/* Catch-all route for /admin/* if no path matches */}
        <Route path="*" element={<AdminPaths.PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Admin;
