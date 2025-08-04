import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy load all admin-related pages
const AdminPaths = {
  Dashboard: lazy(() => import('../Pages/Admin/Dashboard'))
};

function Admin() {
  return (
    // Suspense is used to show fallback while lazy components are loading
    <Suspense fallback={<div>Loading Admin...</div>}>
      <Routes>
        {/* Default admin dashboard route (/admin) */}
        <Route path="/" element={<AdminPaths.Dashboard />} />

        {/* Catch-all route for /admin/* if no path matches */}
        <Route path="*" element={<Navigate to='/page-not-found' />} />
      </Routes>
    </Suspense>
  );
}

export default Admin;
