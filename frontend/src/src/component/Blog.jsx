import { ArrowRight, MoveRight } from 'lucide-react';
import React, { useState } from 'react';

const blogData = {
  featured: {
    title: 'A2 Ghee with Black Pepper: Monsoon Cold Remedy',
    desc: 'Embracing Traditional Wisdom in Modern Times. The arrival of the monsoon season brings relief...',
    image: 'https://twobrothersindiashop.com/cdn/shop/articles/Buy_A2_Ghee_with_Black_Pepper.jpg?v=1748431226&width=1600',
    link: '#'
  },
  blogs: [
    {
      title: 'Easy Ways to Add Ragi to Your Summer Diet',
      desc: 'Ragi, also known as finger millet, is one of the...',
      image: 'https://twobrothersindiashop.com/cdn/shop/articles/Best_Recipes_for_eat.jpg?v=1748425480&width=1600',
      link: '#'
    },
    {
      title: 'Ragi Breakfast Recipes for Busy Mornings',
      desc: 'In the hustle and bustle of modern life, instant options...',
      image: 'https://twobrothersindiashop.com/cdn/shop/articles/Organic_Ragi_Flour.jpg?v=1748423748&width=1600',
      link: '#'
    },
    {
      title: '5 Creative Ways to Add Moringa Powder to Your Daily Diet',
      desc: 'Moringa options extend from tea to smoothies...',
      image: 'https://twobrothersindiashop.com/cdn/shop/articles/Moringa_Powder_Daily_Use_d955d154-29cc-44fe-b146-7bcf95454e7f.jpg?v=1749210299&width=600',
      link: '#'
    }
  ]
};

const Blog = () => {
      const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false); // State to track focus
  return (
    <div className="w-full bg-[#fcfaf7] py-12 px-4 md:px-20">
      
      {/* Arrow animation CSS */}
      <style>
        {`
          @keyframes slideArrow {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(6px);
            }
          }
          .arrow-hover:hover .arrow-icon {
            animation: slideArrow 0.6s ease-in-out infinite;
          }
        `}
      </style>

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-xs tracking-wider uppercase text-gray-700">Food & Health</p>
        <h2 className="text-3xl font-bold text-[#2a421d]">Blogs</h2>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Featured Blog */}
        <div className="flex-1 group relative overflow-hidden rounded-md cursor-pointer">
          <div className="relative overflow-hidden">
            <img
              src={blogData.featured.image}
              alt={blogData.featured.title}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            {/* Arrow Box (image hover triggers it) */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="arrow-hover w-12 h-12 bg-blue-50 text-black rounded-md flex items-center justify-center shadow overflow-hidden cursor-pointer">
                <MoveRight size={20} className="arrow-icon" />
              </div>
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6">
            {blogData.featured.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-gray-600 mt-2">
            {blogData.featured.desc}
          </p>
          <span className="inline-block w-auto mt-3 bg-[#f9edd5] text-[#334721] font-bold text-sm py-1.5 px-4 rounded transition">
            READ MORE
          </span>
        </div>

        {/* Side Blogs */}
        <div className="flex flex-col gap-8 w-full lg:w-[40%]">
          {blogData.blogs.map((blog, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4 items-start group cursor-pointer">
              {/* Blog Image */}
              <div className="relative w-full sm:w-[170px] h-[130px] overflow-hidden rounded-md">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                {/* Hover Arrow */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="arrow-hover w-10 h-10 bg-white text-black rounded-md flex items-center justify-center shadow overflow-hidden cursor-pointer">
                    <MoveRight size={16} className="arrow-icon font-thin" />
                  </div>
                </div>
              </div>

              {/* Blog Text */}
              <div className="flex flex-col justify-start mt-1 w-full sm:w-[calc(100%-200px)]">
                <h4 className="text-sm md:text-base font-semibold text-gray-800">{blog.title}</h4>
                <p className="text-xs text-gray-500 mt-1 mb-2 md:mb-3">{blog.desc}</p>
             <span className="inline-block w-fit mt-3 bg-[#f9edd5] text-[#334721] font-bold text-md py-1.5 px-4 rounded transition">
            READ MORE
          </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
