import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfluencerPage from "./pages/InfluencersPage";
import { InfluencerDetailPage } from "./pages/InfluencerDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ScrollUp from "./components/ScrollUp";
import LoginPage from "./pages/Auth/loginPage";
import SignupPage from "./pages/Auth/SignupPage";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/influencers" element={<InfluencerPage />} />
        <Route
          path="/influencer-detail/:id"
          element={<InfluencerDetailPage />}
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-detail/:id" element={<BlogDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      <ScrollUp />
      <Footer />
    </BrowserRouter>
   
  );
};

export default App;
