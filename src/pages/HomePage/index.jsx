import ExploreCategories from "./categories";
import Features from "./features";
import BlogSection from "./blogs";
import CtaSection from "./cta";
import Influencer from "./influencers";
export default function HomePage() {
  return (
      <main className="overflow-hidden">
        <Features />
        <Influencer />
        <ExploreCategories />
        <BlogSection />
        <CtaSection />
      </main>
  );
}
