import React, { Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { LoadingPage } from "./components/Loading";
import { NavBar } from "./components/NavBar";

const PeoplePage = React.lazy(() => import("./pages/PeoplePage"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <NavBar />
        <Suspense fallback={<LoadingPage />} >
          <Routes>
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  min-height: 90vh;
`;