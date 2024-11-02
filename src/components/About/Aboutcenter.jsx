import React from 'react';
import aboutimg from '../../assets/img/About/Aboutus.jpg';
import painteffect from '../../assets/img/About/effectimgnew.png'; // Check the path
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Aboutcenter = () => {
  const navigate = useNavigate();

  return (
    <div 
      data-aos="fade-up"
      className=" text-white text-shadow relative min-h-screen flex items-center justify-center py-10 px-5 md:px-20 bg-gradient-to-br from-green-50 via-white to-green-300 bg-no-repeat bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${painteffect})`, backgroundSize: 'contain', opacity: 0.8 }}
    >
      <div className="relative container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10 z-10">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2 z-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xs tracking-widest text-green-600 uppercase mb-3">
            Aadi Yoga Center
          </h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-snug mb-6">
            Who We Are & What We Do
          </h1>
          <p className="text-md sm:text-lg leading-relaxed mb-6" style={{
    color: window.innerWidth < 640 ? '#000' : 'white' ,
    textShadow: window.innerWidth < 640 ? 'none' : '1px 1px 2px #000000'
  }}>
            At Aadi Yoga Center, we are dedicated to fostering holistic wellness
            and inner harmony. Through our diverse offerings including yoga
            classes, meditation, therapeutic practices, and wellness workshops,
            we empower individuals to cultivate a deeper connection with themselves
            and the world around them.
          </p>
          <p
  className="text-md sm:text-lg text-gray-700 leading-relaxed mb-6"
  style={{
    color: window.innerWidth < 640 ? '#000' : 'white',
    textShadow: window.innerWidth < 640 ? 'none' : '1px 1px 2px #000000'
  }}
>
            Our experienced instructors guide students of all levels on a journey
            of self-discovery, encouraging personal growth, physical vitality, and
            mental clarity. Join us as we embrace the transformative power of yoga
            and mindfulness, creating a space for healing, growth, and joy.
          </p>
          <motion.button
            onClick={() => navigate("/about")}
            className="px-6 py-3 bg-gradient-to-r from-green-200 to-green-300 text-white font-bold rounded-md shadow-lg hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={aboutimg}
            alt="Yoga Instructor"
            className="rounded-lg shadow-2xl max-w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutcenter;
