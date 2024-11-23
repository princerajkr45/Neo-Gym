import React from 'react';
import { FaDumbbell, FaRunning, FaHeartbeat } from 'react-icons/fa';
import { GrYoga } from 'react-icons/gr';

const Classes = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-12 text-gray-100">Our Premium Fitness Classes</h2>

        {/* Class Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Strength Training */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="mb-6">
              <FaDumbbell size={60} className="text-gray-400 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">Strength Training</h3>
            <p className="text-lg text-gray-400 mb-6">Build muscle and strength with a focus on proper technique and form.</p>
            <button className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300">Join Now</button>
          </div>

          {/* Running & Endurance */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="mb-6">
              <FaRunning size={60} className="text-gray-400 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">Running & Endurance</h3>
            <p className="text-lg text-gray-400 mb-6">Increase stamina and cardiovascular health with high-intensity interval training.</p>
            <button className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300">Join Now</button>
          </div>

          {/* Yoga */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="mb-6">
              <GrYoga size={60} className="text-gray-400 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">Yoga</h3>
            <p className="text-lg text-gray-400 mb-6">Focus on flexibility, relaxation, and mindfulness with our guided yoga sessions.</p>
            <button className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300">Join Now</button>
          </div>

          {/* Cardio & Heart Health */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="mb-6">
              <FaHeartbeat size={60} className="text-gray-400 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-200">Cardio & Heart Health</h3>
            <p className="text-lg text-gray-400 mb-6">Boost your cardiovascular health with heart-pumping cardio workouts.</p>
            <button className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300">Join Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
