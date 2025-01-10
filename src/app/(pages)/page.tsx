import Reviews from "../../components/homepageComponents/reviews";
import HeroSection from "../../components/homepageComponents/hero";
import BrowseByDressStyle from "../../components/homepageComponents/browseByDressStyle";
import TopSelling from "@/components/homepageComponents/topSelling";
import NewArrival from "@/components/homepageComponents/newArrival";
import BrandLogoBanner from "@/components/homepageComponents/brandLogoBanner";
import { ProductCard } from "@/components/productCard";

let {name ,slug ,price ,oldPrice , rating ,image ,category} = { name: 'Skinny Fit Jeans', slug: "skinny-fit-jeans", price: 240, oldPrice: 260, rating: 4.5, image: "/images/products/skinny-fit-jeans.png", category: "jeans" }

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <BrandLogoBanner/>
      <ProductCard name={name} slug={slug} price={price} oldPrice={oldPrice} rating={rating} image={image} category={category}/>
      <NewArrival/>
      <TopSelling/>
      <BrowseByDressStyle />
      <Reviews/>
    </main>
  );
}

