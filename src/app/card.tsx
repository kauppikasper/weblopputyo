'use client'
import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-violet-50 flex flex-col items-center justify-start lg:h-screen">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border p-4 text-center">
            <p className="text-gray-700 text-base" style={{ fontSize: '1.2rem' }}>Tämä tunti:</p>
          </div>
          <div className="bg-white rounded-lg border p-4 text-center">
            <p className="text-gray-700 text-base" style={{ fontSize: '1.2rem' }}>Seuraava tunti:</p>
          </div>
          <div className="bg-white rounded-lg border p-4 text-center">
            <p className="text-gray-700 text-base" style={{ fontSize: '1.2rem' }}>Keskiarvo tänään:</p>
          </div>
          <div className="bg-white rounded-lg border p-4 text-center">
            <p className="text-gray-700 text-base" style={{ fontSize: '1.2rem' }}>Keskiarvo huomenna:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;