import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/Login.tsx";
import HomePage from "./pages/HomePage.tsx";
import SignupPage from "./pages/Signup.tsx";
import DashbordLayout from "./layouts/DashbordLayout.tsx";
import BooksPages from "./pages/BooksPages.tsx";
import AuthLayot from "./layouts/AuthLayout.tsx";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";

  const queryClient = new QueryClient()
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<DashbordLayout />}>
          {/* Nested Child Route */}
          <Route path="home" element={<HomePage />} />
          <Route path="books" element={<BooksPages />} />
        </Route>
        <Route path="/auth" element={<AuthLayot />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
