import React from 'react';

const ProjectCard = () => {
  return (
    <div className="max-w-sm mx-auto rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-2 text-center text-sm font-semibold text-gray-700 border-b">
        BOOKING OPEN: LIMITED TIME ONLY
      </div>
      <div className="p-4 text-center bg-white">
        <h2 className="text-2xl font-bold text-gray-800">Balaji Krishna</h2>
        <p className="text-sm text-gray-500 mt-1">At Khambhalpada, Thakurli,  Dombivli East <span className="text-gray-400">By</span> <span className="font-medium text-gray-700">SS Lifespaces</span></p>
        <div className="mt-4 bg-gray-100 p-3 rounded-md text-left text-sm">
          <p><span className="font-semibold text-gray-700">About:</span> <span className="font-bold">23 Storey</span></p>
          <p><span className="font-semibold text-gray-700">Rera No:</span> <span className="font-bold">P5170006423</span></p>
          <p><span className="font-semibold text-gray-700">Tower:</span> <span className="font-bold">Tower 1</span></p>
        </div>

        <div className="bg-gradient-to-r from-lime-600 to-black text-white mt-4 p-4 rounded-md border-dashed border border-white text-sm font-semibold space-y-1">
          <p>Spot Booking Offers</p>
          <p>Early Buy Discounts</p>
          <p>Flexi Payment Plan</p>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Apartments <span className="font-bold text-black">1 & 2 BHK</span> Starts At
        </div>
        <div className="text-2xl font-bold text-black mt-1">₹ 45 Lacs<sup className="text-sm">*</sup></div>
        <div className="text-sm text-gray-500 mt-1">Onwards</div>
      </div>
    </div>
  );
};

export default ProjectCard;
