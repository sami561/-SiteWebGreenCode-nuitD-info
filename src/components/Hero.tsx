import React, { memo } from 'react';
import { Sprout } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-16 pb-16 sm:pb-24">
          <div className="text-center">
            <Sprout className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              <span className="block">Sustainable Solutions</span>
              <span className="block text-green-600">for a Better Tomorrow</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Join us in our mission to create a more sustainable future through eco-friendly practices
              and innovative green technologies.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="px-8 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-lg border-2 border-green-600 text-green-600 font-semibold hover:bg-green-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
