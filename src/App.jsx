import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy load main route components
const PATHS = {
  WebsiteRoute: lazy(() => import("./Routes/Website")),       // Public website routes
  AdminRoute: lazy(() => import("./Routes/Admin")),           // Admin dashboard routes
  PageNotFound: lazy(() => import("./Pages/PageNotFound")),   // Common 404 Page
};

function App() {
   
  return (
    // Wrap with Suspense to show fallback while lazy components load
    <Suspense fallback={<div>Loading...</div>}>
      <Routes  >
        {/* Admin route (catch all nested under /admin/) */}
        <Route path="/admin/*" element={<PATHS.AdminRoute />} />

        {/* Website route (catch all public routes like /, /about, etc.) */}
        <Route path="/*" element={<div id="google_translate_element"> <PATHS.WebsiteRoute /> </div>} />

        {/* Direct route for 404 display */}
        <Route path="/page-not-found" element={<PATHS.PageNotFound />} />

        {/* Catch-all unmatched routes and redirect to 404 */}
        <Route path="*" element={<Navigate to='/page-not-found' />} />
      </Routes>
    </Suspense>
  );
}

export default App;
