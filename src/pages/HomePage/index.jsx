import { Button } from "@/Components/ui/button";
import BreadCrumb from "../../Components/BreadCrumb";
import { Input } from "@/Components/ui/input";
import Hero from "./hero";
import TechIcon from "@/Components/TechIcon";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/components/ui/label";
import ExploreCategories from "./categories";
import Features from "./features";
import BlogSection from "./blogs";
import CtaSection from "./cta";
import Influencer from "./influencers";
import HowWorks from "./howWorks";
import Coursels from "./Usersays/Coursels";
export default function HomePage() {
  return (
    <>
      <main className="text-gray/50 text-2xl font-bold">
        <Hero />
        <Features />
        <HowWorks />
        <Influencer />
        {/* impact numbers */}
        <ExploreCategories />

        <Coursels />
        <BlogSection />
        <CtaSection />
      </main>
    </>
  );
}
