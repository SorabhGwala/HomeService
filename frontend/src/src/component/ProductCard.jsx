import React, { useState, useRef, useEffect } from "react";
import { Heart, MoveLeftIcon, MoveRightIcon, Star } from "lucide-react";

// Sample data (add up to 16 items for full functionality)
const legendsData = [
  {
    id: 1,
    name: "Khapli Wheat Flour (Emmer Wheat)",
    image: "/Buy_Khapli_Flour_Shop_Now_1200x.jpg",
    HoverImage: "/Buy_Fresh_Healthy_Khapli_Atta_50.png",
    desc: "Low GI | Stoneground",
    price: 1999,
    originalPrice: 2278,
    weight: "10 kg",
    rating: 4.9,
    reviews: "2k+",
    savings: 279,
    badge: "Best Seller",
    badgeColor: "bg-[#29421b]",
    txtColor: "text-[#00ff73]",
  },
  {
    id: 2,
    name: "A2 Gir Cow - Cultured Ghee",
    image: "/Buy_Amlaprash_1200x.jpg",
    HoverImage: "/Organic_Amlaprash_500x.png",
    desc: "Bilona-made | Small batches",
    price: 3169,
    originalPrice: 3599,
    weight: "1000 ml",
    rating: 4.9,
    reviews: "2k+",
    savings: 430,
    badge: "Best Seller",
    badgeColor: "bg-[#29421b]",
    txtColor: "text-[#00ff73]",
  },
  {
    id: 3,
    name: "Sugarcane Jaggery, Crushed Granular",
    image: "/Buy_Sugarcane_Jaggery_Crushed_12.jpg",
    HoverImage: "/Shop_A2_Cow_Cultured_Ghee_500x.png",
    desc: "Bilona-made | Small batches",
    price: 529,
    originalPrice: 575,
    weight: "2 kg",
    rating: 4.9,
    reviews: "2k+",
    savings: 46,
    badge: "Best Seller",
    badgeColor: "bg-[#29421b]",
    txtColor: "text-[#00ff73]",
  },
  {
    id: 4,
    name: "Amlaprash (Limited Edition)",
    image: "/Buy_Amlaprash_1200x.jpg",
    HoverImage: "/Shop_groundnut_oil_500x.png",
    desc: "40+ herbs | 52% Amlas",
    price: 1849,
    originalPrice: 2095,
    weight: "1 kg",
    rating: 4.9,
    reviews: "892",
    savings: 246,
    badge: "Must Try",
    badgeColor: "bg-purple-600",
    txtColor: "text-white",
  },
  {
    id: 5,
    name: "Wood Pressed Groundnut Oil",
    image: "/Buy_Amlaprash_1200x.jpg",
    HoverImage: "/Shop_groundnut_oil_500x.png",
    desc: "Cold-pressed & unrefined",
    price: 999,
    originalPrice: 1199,
    weight: "1000 ml",
    rating: 4.7,
    reviews: "1k+",
    savings: 200,
    badge: "Popular",
    badgeColor: "bg-[#ff8f57]",
    txtColor: "text-white",
  },
   {
    id: 1,
    name: "Khapli Wheat Flour (Emmer Wheat)",
    image: "/Buy_Khapli_Flour_Shop_Now_1200x.jpg",
    HoverImage: "/Buy_Fresh_Healthy_Khapli_Atta_50.png",
    desc: "Low GI | Stoneground",
    price: 1999,
    originalPrice: 2278,
    weight: "10 kg",
    rating: 4.9,
    reviews: "2k+",
    savings: 279,
    badge: "Best Seller",
    badgeColor: "bg-[#29421b]",
    txtColor: "text-[#00ff73]",
  },
  {
    id: 2,
    name: "A2 Gir Cow - Cultured Ghee",
    image: "/Buy_Amlaprash_1200x.jpg",
    HoverImage: "/Organic_Amlaprash_500x.png",
    desc: "Bilona-made | Small batches",
    price: 3169,
    originalPrice: 3599,
    weight: "1000 ml",
    rating: 4.9,
    reviews: "2k+",
    savings: 430,
    badge: "Best Seller",
    badgeColor: "bg-[#29421b]",
    txtColor: "text-[#00ff73]",
  },
  {
    id: 3,
    name: "Sugarcane Jaggery, Crushed Granular",
    image: "/Buy_Sugarcane_Jaggery_Crushed_12.jpg",
    HoverImage: "/Shop_A2_Cow_Cultured_Ghee_500x.png",
    desc: "Bilona-made | Small batches",
    price: 529,
    originalPrice: 575,
    weight: "2 kg",
    rating: 4.9,
    reviews: "2k+",
    savings: 46,
    badge: "Best Seller",
    badgeColor: "bg-[#29421b]",
    txtColor: "text-[#00ff73]",
  },
  {
    id: 4,
    name: "Amlaprash (Limited Edition)",
    image: "/Buy_Amlaprash_1200x.jpg",
    HoverImage: "/Shop_groundnut_oil_500x.png",
    desc: "40+ herbs | 52% Amlas",
    price: 1849,
    originalPrice: 2095,
    weight: "1 kg",
    rating: 4.9,
    reviews: "892",
    savings: 246,
    badge: "Must Try",
    badgeColor: "bg-purple-600",
    txtColor: "text-white",
  },
  {
    id: 5,
    name: "Wood Pressed Groundnut Oil",
    image: "/Buy_Amlaprash_1200x.jpg",
    HoverImage: "/Shop_groundnut_oil_500x.png",
    desc: "Cold-pressed & unrefined",
    price: 999,
    originalPrice: 1199,
    weight: "1000 ml",
    rating: 4.7,
    reviews: "1k+",
    savings: 200,
    badge: "Popular",
    badgeColor: "bg-[#ff8f57]",
    txtColor: "text-white",
  },
   {
    id: 1,
    name: "Khapli Wheat Flour (Emmer Wheat)",
    image: "/Buy_Khapli_Flour_Shop_Now_1200x.jpg",
    HoverImage: "/Buy_Fresh_Healthy_Khapli_Atta_50.png",
    desc: "Low GI | Stoneground",
    price: 1999,
    originalPrice: 2278,
    weight: "10 kg",
    rating: 4.9,
    reviews: "2k+",
    savings: 279,
    badge: "Best Seller",
    badgeColor: "bg-[#29421b]",
    txtColor: "text-[#00ff73]",
  },
  {
    id: 2,
    name: "A2 Gir Cow - Cultured Ghee",
    image: "/Buy_Amlaprash_1200x.jpg",
    HoverImage: "/Organic_Amlaprash_500x.png",
    desc: "Bilona-made | Small batches",
    price: 3169,
    originalPrice: 3599,
    weight: "1000 ml",
    rating: 4.9,
    reviews: "2k+",
    savings: 430,
    badge: "Best Seller",
    badgeColor: "bg-[#29421b]",
    txtColor: "text-[#00ff73]",
  },
  {
    id: 3,
    name: "Sugarcane Jaggery, Crushed Granular",
    image: "/Buy_Sugarcane_Jaggery_Crushed_12.jpg",
    HoverImage: "/Shop_A2_Cow_Cultured_Ghee_500x.png",
    desc: "Bilona-made | Small batches",
    price: 529,
    originalPrice: 575,
    weight: "2 kg",
    rating: 4.9,
    reviews: "2k+",
    savings: 46,
    badge: "Best Seller",
    badgeColor: "bg-[#29421b]",
    txtColor: "text-[#00ff73]",
  },
  {
    id: 4,
    name: "Amlaprash (Limited Edition)",
    image: "/Buy_Amlaprash_1200x.jpg",
    HoverImage: "/Shop_groundnut_oil_500x.png",
    desc: "40+ herbs | 52% Amlas",
    price: 1849,
    originalPrice: 2095,
    weight: "1 kg",
    rating: 4.9,
    reviews: "892",
    savings: 246,
    badge: "Must Try",
    badgeColor: "bg-purple-600",
    txtColor: "text-white",
  },
  {
    id: 5,
    name: "Wood Pressed Groundnut Oil",
    image: "/Buy_Amlaprash_1200x.jpg",
    HoverImage: "/Shop_groundnut_oil_500x.png",
    desc: "Cold-pressed & unrefined",
    price: 999,
    originalPrice: 1199,
    weight: "1000 ml",
    rating: 4.7,
    reviews: "1k+",
    savings: 200,
    badge: "Popular",
    badgeColor: "bg-[#ff8f57]",
    txtColor: "text-white",
  }
];

const getUnit = (weight) => {
  const match = weight.match(/(ml|ltr|kg|g)/i);
  return match ? match[0].toLowerCase() : "";
};

const getQuantityOptions = (unit) => {
  if (unit === "kg" || unit === "g") return ["2 kg", "5 kg", "10 kg"];
  if (unit === "ml" || unit === "ltr")
    return ["250 ml", "500 ml", "1000 ml", "2 ltr", "5 ltr"];
  return ["1"];
};

const ProductCardSlider = () => {
  const [quantities, setQuantities] = useState({});
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const visibleCount = 4;
  const totalCards = legendsData.length;
  const maxIndex = Math.ceil(totalCards / visibleCount) - 1;

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth;
      container.scrollTo({ left: scrollAmount * index, behavior: "smooth" });
    }
  }, [index]);

  return (
    <section className="w-[80vw] mx-auto relative ">
 <div className="flex justify-center">
  <div
    className="bg-green-700 my-10 text-white font-freckle text-2xl py-7 px-8 inline-block shadow-md text-center"
    style={{
      borderRadius: "17% 42% 45% 55% / 27% 31% 33% 37%",
    }}
  >
    ★ MOST LOVED LEGENDS ★
  </div>
</div>



      <button
        onClick={handlePrev}
        disabled={index === 0}
        className={` absolute left-0 top-1/2  z-10 px-4 py-3 bg-white border-2 rounded-md -ml-10  ${
          index === 0 ? " cursor-not-allowed" : ""
        }`}
      >
        <MoveLeftIcon/>
      </button>

      <div ref={containerRef} className="overflow-hidden">
        <div className="flex gap-4 transition-all duration-300">
          {legendsData.map((item) => {
            const unit = getUnit(item.weight);
            const quantityValue =
              quantities[item.id] || getQuantityOptions(unit)[0];
            const numericQty = parseInt(quantityValue);
            const totalPrice = item.price * (numericQty / 1);
            const totalSavings = item.savings * (numericQty / 1);

            return (
              <div
                key={item.id}
                className="min-w-[calc(25%-1rem)] bg-white rounded border shadow-sm overflow-hidden flex flex-col"
              >
                <div className="relative group h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src={item.HoverImage}
                    alt={`${item.name} hover`}
                    className="absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />

                  {/* Save Tag with polygon cut */}
                  {item.originalPrice > item.price && (
                    <div
                      className="absolute top-2 left-2 text-white text-[11px] font-bold px-4 py-1 uppercase shadow-md z-10"
                      style={{
                        backgroundColor: "#d32f2f",
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 85%, 90% 85%, 85% 100%, 15% 100%, 10% 85%, 0 85%)",
                      }}
                    >
                      Save {Math.round((1 - item.price / item.originalPrice) * 100)}%
                    </div>
                  )}

                  <div
                    className={`absolute top-0 right-0 flex items-center gap-1 ${item.badgeColor} ${item.txtColor} text-xs px-2 py-1 rounded-bl-xl`}
                  >
                    {item.badge}
                    <Heart className="w-3 h-3" />
                  </div>
                </div>

                <div className="p-3 flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-md line-clamp-2 w-[65%]">
                      {item.name}
                    </h3>
                    <div className="text-right grid">
                      <span className="text-lg font-bold text-gray-800">
                        ₹{totalPrice.toLocaleString()}
                      </span>
                      <span className="text-sm line-through text-gray-400">
                        ₹{item.originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs leading-tight font-medium">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(item.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span>{item.reviews}+ reviews</span>
                  </div>

                  <div className="text-xs text-gray-600">
                    <strong>Weight:</strong> {item.weight}
                  </div>

                  {/* Quantity & Savings */}
                  <div className="w-full h-9 border border-black rounded-md flex justify-between items-center">
                    <div className="w-20 bg-[#117748] text-white text-center text-xs py-[5px] rounded-md leading-tight font-semibold">
                      <p className="text-[8px]">Your Savings</p>
                      ₹{totalSavings}
                    </div>
                    <select
                      value={quantityValue}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="text-xs border-l h-full w-[60%] text-[#117748] mx-2 border-none"
                    >
                      {getQuantityOptions(unit).map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button className="mt-auto bg-[#117748] text-white font-semibold py-2 rounded hover:bg-green-700 transition">
                    ADD TO CART
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleNext}
    
        className={` absolute right-0 top-1/2  z-10 px-4 py-3 bg-white border-2 rounded-md -mr-8
         
        `}
      >
    <MoveRightIcon/>
      </button>

      <div className="flex justify-center mt-6">
        <button className="bg-[#2a431c]  text-stone-200 px-4 py-2  rounded-md">SHOP ALL</button>
      </div>
    </section>
  );
};

export default ProductCardSlider;
