import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import ConnectivityPage from "./pages/ConnectivityPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import UseCasesPage from "./pages/UseCasesPage";
import VerticalSolutionsPage from "./pages/VerticalSolutionsPage";
import FaqPage from "./pages/FaqPage";
import PartnersPage from "./pages/PartnersPage";
import AllBlogs from "./components/AllBlogs";
import SingeVerticalPage from "./components/SingeVerticalPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="vertical-solutions" element={<VerticalSolutionsPage />} />
        <Route path="connectivity" element={<ConnectivityPage />} />
        <Route path="use-cases" element={<UseCasesPage />} />
        <Route path="blog-page" element={<AllBlogs />} />
        <Route path="blog-single" element={<BlogPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="Partners" element={<PartnersPage />} />
        <Route path="single-vertical" element={<SingeVerticalPage />} />
      </Routes>
    </div>
  );
}

export default App;
