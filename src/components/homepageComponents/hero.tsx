// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     // mobile header
//     <div className="bg-[#F3F0F1]">
//       <div className="md:hidden">
//         <div className="bg-[#F3F0F1] px-6 max-w-sm mx-auto">
//           <h2 className="text-3xl font-bold leading-tight mb-2">
//             FIND CLOTHES THAT MATCHES YOUR STYLE
//           </h2>
//           <p className="text-gray-600 mb-4">
//             Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//           </p>
//           <Link href="/shop" className="block w-full bg-black text-white text-center py-3 rounded-full font-semibold mb-6 hover:bg-gray-800 transition duration-300">
//             Shop Now
//           </Link>
//           <div className="flex justify-between mb-6">
//             <div className="text-center">
//               <div className="text-2xl font-bold">200+</div>
//               <div className="text-sm text-gray-600">International Brands</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold">2,000+</div>
//               <div className="text-sm text-gray-600">High-Quality Products</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold">30,000+</div>
//               <div className="text-sm text-gray-600">Happy Customers</div>
//             </div>
//           </div>
//           <div className="relative">
//             <Image
//               src="/images/hero.png"
//               alt="Stylish couple in trendy outfits"
//               width={400}
//               height={300}
//               className="rounded-lg"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//       <div className="hidden md:inline md:relative w-[100vw] h-[100vh] bg-[#F3F0F1] ">
//         <div className="inline inset-0 bg-opacity-50  bg-cover bg-center ">
//           <div className="absolute max-w-2/4 h-full ml-[50vw] overflow-hidden " >
//             <Image 
//               src="/images/hero.png"
//               alt="hero image"  
//               width={1600} 
//               height={800} 
//               priority
//             />
//           </div>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
//             <div className="md:w-1/2 space-y-6">
//               <h1 className="text-5xl font-extrabold text-black leading-tight">
//                 FIND CLOTHES THAT MATCHES YOUR STYLE
//               </h1>
//               <p className="text-gray-800 text-lg">
//                 Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//               </p>
//               <Link href="/shop" className="bg-black text-white px-8 py-4 rounded-full inline-block font-semibold text-lg">Shop Now</Link>
//               <div className="flex space-x-12 pt-8">
//                 <div>
//                   <p className="text-4xl font-bold text-black">200+</p>
//                   <p className="text-gray-800">International Brands</p>
//                 </div>
//                 <div>
//                   <p className="text-4xl font-bold text-black">2,000+</p>
//                   <p className="text-gray-800">High-Quality Products</p>
//                 </div>
//                 <div>
//                   <p className="text-4xl font-bold text-black">30,000+</p>
//                   <p className="text-gray-800">Happy Customers</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



import { Separator } from "@/components/ui/separator";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden lg:px-9  mx-auto">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <h2
            className={`${integralCF.className} text-4xl xl:text-[64px] xl:leading-[64px] mb-5 lg:mb-8`}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div>
            <Link
              href="/shop"
              className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse"
            >
              Shop Now
            </Link>
          </div>
          <div className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                200 +
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                International Brands
              </span>
            </div>
            <Separator
              className="ml-6 md:ml-0 h-12 md:h-full bg-black/10"
              orientation="vertical"
            />
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                2000 +
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>
            <Separator
              className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10"
              orientation="vertical"
            />
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                3000 +
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                Happy Customers
              </span>
            </div>
          </div>
        </section>
        <section className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url(/images/hero-mobile.png)] md:bg-[url(/images/hero-desktop.png)]">
          <Image
            priority
            src="/icons/star.svg"
            height={104}
            width={104}
            alt="big star"
            className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px]"
          />
          <Image
            priority
            src="/icons/star.svg"
            height={56}
            width={56}
            alt="small star"
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14"
          />
        </section>
      </div>
    </header>
  );
};

export default Header;
