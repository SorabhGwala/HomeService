import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import {  X, MapPin, MenuIcon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchLocation(value);

    // Fetch location suggestions from Google Places API
    if (value) {
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&types=(cities)&key=YOUR_GOOGLE_MAPS_API_KEY`);
      const data = await response.json();
      selectedLocation(data.predictions);
    } else {
      setLocationSuggestions([]);
    }
  };

  const handleSuggestionClick = (place) => {
    setSearchLocation(place.description);
    setLocationSuggestions([]);
    setSelectedLocation(place.description);
  };

  const NavItems = () => (
    <>
      <li className="hover:shadow-sm  hover:shadow-[#bc98fd8c] p-2 active:bg-[#bc98fd8c] hover:text-purple-600  hover:font-semibold ">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:shadow-sm hover:shadow-[#bc98fd8c] p-2 active:bg-[#bc98fd8c] hover:text-purple-600  hover:font-semibold ">
        <Link to="/About">About</Link>
      </li>
      <li className="hover:shadow-sm hover:shadow-[#bc98fd8c] p-2 active:bg-[#bc98fd8c] hover:text-purple-600  hover:font-semibold ">
        <Link to="/ServicePage">Service</Link>
      </li>
      <li className="hover:shadow-sm hover:shadow-[#bc98fd8c] p-2 active:bg-[#bc98fd8c] hover:text-purple-600  hover:font-semibold  border-b-2 border-[#5428a58c] transform translate-x-0 hover:translate-x-1 transition-all duration-300">
      <Link to="/Become a Partner">Partner</Link>
      </li>
    </>
  );

  const SearchInput = () => (
    <div className="relative">
      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Enter your location"
        value={searchLocation}
        onChange={handleSearchChange}
        aria-label="Search location"
        className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
      {locationSuggestions.length > 0 && (
        <ul className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {locationSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-semibold font-serif bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] bg-clip-text text-transparent">
                <span className="text-3xl">H</span>ome<span className="text-3xl">C</span>are
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              <NavItems />
            </ul>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchInput />
            <Link
              to="/Login"
              className="border-2  px-5 py-1 rounded-2xl border-stone-800 hover:shadow-xl "
            >
              Login
            </Link>
   <Link
  to="/Signup"
  className="px-5 py-2 text-white bg-purple-600 rounded-none md:rounded-3xl lg:rounded-sm hover:shadow-xl"
>
  Signup
</Link>


          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2" aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-40">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <ul className="flex flex-col space-y-4">
              <NavItems />
            </ul>
            <div className="w-full space-y-4">
              <SearchInput />
              <Link
                to="/Login"
                className="block text-center py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Login
              </Link>
              <Link
                to="/Signup"
                className="block text-center py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Signup
              </Link>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
