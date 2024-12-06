import React, { memo } from 'react';
import { Leaf, Droplets, Wind } from 'lucide-react';

const EcoStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
      {[
        { icon: Leaf, title: 'Carbon Neutral', value: '100%' },
        { icon: Droplets, title: 'Water Saved', value: '500K Gallons' },
        { icon: Wind, title: 'Clean Energy', value: '75 MWh' },
      ].map(({ icon: Icon, title, value }) => (
        <div key={title} className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <Icon className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-2xl font-bold text-green-700 mt-2">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default memo(EcoStats);
