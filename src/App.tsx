/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import MethodPage from "./pages/MethodPage";
import LorePage from "./pages/LorePage";
import AccessoriesPage from "./pages/AccessoriesPage";

export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/metodo" element={<MethodPage />} />
      <Route path="/lore" element={<LorePage />} />
      <Route path="/acessorios" element={<AccessoriesPage />} />
    </Routes>
  );
}
