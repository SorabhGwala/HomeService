import React, { useEffect, useState } from 'react';
import { 
  Home, 
  Wrench, 
  PaintBucket, 
  Plug, 
  Hammer, 
  Scissors 
} from 'lucide-react';

const LoadingAnimation = ({ isLoading = true }) => {
  const [currentToolIndex, setCurrentToolIndex] = useState(0);
  const tools = [Home, Wrench, PaintBucket, Plug, Hammer, Scissors];
  const CurrentTool = tools[currentToolIndex];

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setCurrentToolIndex((prev) => (prev + 1) % tools.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoading, tools.length]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          {/* Outer spinning circle */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-100 border-t-blue-500 animate-spin-slow shadow-lg" />

          {/* Middle pulsing circle */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] animate-pulse-scale flex items-center justify-center shadow-xl">
            <CurrentTool className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
        </div>

        <div className="mt-4 text-blue-600 font-semibold tracking-wider animate-pulse">
          Loading<span className="animate-pulse">...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
