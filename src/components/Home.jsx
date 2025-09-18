import React, { useState } from "react";

export default function Home({ user }) {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="bg-white px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-green-600 text-4xl font-bold mt-4">Meet EcoHealth.</h1>
        <h2 className="text-black text-3xl sm:text-4xl font-bold mb-2">
          Health Made Easy <br /> With AI.
        </h2>
        <p className="text-center font-semibold font-serif text-lg">
          “Eat right, live light — on your body and the planet.”
        </p>
      </div>

      {/* Cards Container */}
      <div className="space-y-8 flex flex-col items-center">

        {/* Smart Nutrition Analysis */}
        <div className="flex flex-col md:flex-row bg-slate-200 rounded-xl shadow-lg p-4 gap-4 transition-transform hover:scale-105 duration-300 max-w-4xl w-full">
          
          <div className="flex-1 bg-slate-300 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Smart Nutrition Analysis
            </h3>
            <p className="text-slate-600 mt-6 font-medium">
              📸 Upload a photo of your meal and instantly get a detailed breakdown of calories, proteins, carbs, fats, and essential vitamins — making healthy eating easier than ever.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-3">
            <div className="bg-white w-full h-40 rounded-lg flex items-center justify-center overflow-hidden transition duration-500 ease-in-out">
              {image ? (
                <img
                  src={image}
                  alt="food"
                  className="object-contain w-full h-full rounded-lg transform transition duration-500 ease-in-out hover:scale-110"
                />
              ) : (
                <p className="text-black font-semibold">Your Picture</p>
              )}
            </div>

            <label className="cursor-pointer bg-green-400 text-black font-semibold px-4 py-2 rounded-lg shadow hover:bg-green-500 transition duration-300">
              Analyse Your Food
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>

        {/* Visualize Your Progress */}
        <div className="flex flex-col md:flex-row bg-slate-200 rounded-xl shadow-lg p-4 gap-4 transition-transform hover:scale-105 duration-300 max-w-4xl w-full">
          <div className="flex-1 bg-slate-300 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Visualize Your Progress</h3>
            <p className="text-slate-600 mb-6">
              🌱 Stay motivated with a personalized dashboard that tracks your weekly calorie and carbon goals. Visual progress charts make it easy to build healthier and more sustainable habits over time.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-40 rounded-lg flex items-center justify-center overflow-hidden transition duration-500 ease-in-out">
              <img
                src="dashboard.png"
                alt="analysis"
                className="object-contain w-full h-full rounded-lg transform transition duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Track Your Carbon Footprint */}
        <div className="flex flex-col md:flex-row bg-slate-200 rounded-xl shadow-lg p-4 gap-4 transition-transform hover:scale-105 duration-300 max-w-4xl w-full">
          <div className="flex-1 bg-slate-300 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Track Your Carbon Footprint</h3>
            <p className="text-slate-600 mb-6">
              🌍 Log your daily activities like travel, energy use, and diet to understand your environmental impact. The tracker highlights how your choices add up and shows where small changes can make a meaningful difference.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-40 rounded-lg flex items-center justify-center overflow-hidden transition duration-500 ease-in-out">
              <img
                src="carbon.png"
                alt="carbon footprint"
                className="object-contain w-full h-full rounded-lg transform transition duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
