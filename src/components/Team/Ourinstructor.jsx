import React from "react";
import Deepakimg from './deepaksir.jpg';
import Aadiimg from './aadi.jpg';
import painteffect from '../../assets/img/About/effectimgnew.png';

const OurInstructor = () => {
  return (
    <div className="bg-blue-100 py-16 lg:py-20 bg-no-repeat bg-cover bg-center z-0" style={{ backgroundImage: `url(${painteffect})`, backgroundSize: 'contain', opacity: 0.8}}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-20">
          
          {/* Text Section */}
          <div className="lg:w-1/3 space-y-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-pink-600">Our Instructors</h3>
            <p className="text-white  text-lg lg:text-xl  leading-relaxed " style={{
    color: window.innerWidth < 640 ? '#000' : 'white' , "textShadow": "1px 1px #fff"
  }}>
              Meet our welcoming instructors who are here to provide you with all various practices for your best benefit and great experience in the class.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-green-200 to-green-300 text-white text-lg font-semibold rounded-lg hover:bg-pink-500 transition duration-300 shadow-md">
              LEARN MORE
            </button>
          </div>
          
          {/* Instructors Section */}
          <div className="lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* First Instructor */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src={Aadiimg} alt="Yogi Aadi" className="w-full h-64 object-cover rounded-lg mb-4"/>
              <p className="text-xl font-semibold text-blue-900">Yogi Aadi</p>
              <p className="text-gray-600">Founder & Lead Teacher</p>
            </div>
            
            {/* Second Instructor */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src={Deepakimg} alt="Yogi Deepak" className="w-full h-64 object-cover rounded-lg mb-4"/>
              <p className="text-xl font-semibold text-blue-900">Yogi Deepak</p>
              <p className="text-gray-600">Ashtanga Yoga & Sound Healing</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInstructor;