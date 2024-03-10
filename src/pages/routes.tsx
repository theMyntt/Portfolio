import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/Home/home";
import Project from "@pages/Project/project";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}