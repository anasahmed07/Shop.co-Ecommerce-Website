import Reviews from "../components/homepageComponents/reviews";
import HeroSection from "../components/homepageComponents/hero";
import BrowseByDressStyle from "../components/homepageComponents/browseByDressStyle";
import TopSelling from "@/components/homepageComponents/topSelling";
import NewArrival from "@/components/homepageComponents/newArrival";
import BrandLogoBanner from "@/components/homepageComponents/brandLogoBanner";
export default function Home() {
  return (
    <main>
      <HeroSection/>
      <BrandLogoBanner/>
      <NewArrival/>
      <TopSelling/>
      <BrowseByDressStyle />
      <Reviews/>
    </main>
  );
}

