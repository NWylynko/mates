import React, { Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FirebaseProvider, useFirebase } from "./firebase/context";

import { Header } from "./components/Header";
import { LoadingPage } from "./components/Loading";
import { NavBar } from "./components/NavBar";

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const PeoplePage = React.lazy(() => import("./pages/PeoplePage"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));

function App() {
  const { user } = useFirebase();

  return (
    <Container>
      <Suspense fallback={<LoadingPage />}>
        {!user ? (
          <LoginPage />
        ) : (
          <>
            <Header />
            <NavBar />
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
              </Routes>
            </Suspense>
          </>
        )}
      </Suspense>
    </Container>
  );
}

const AppWithProviders = () => {
  return (
    <FirebaseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseProvider>
  );
};

export default AppWithProviders;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  min-height: 90vh;
`;
