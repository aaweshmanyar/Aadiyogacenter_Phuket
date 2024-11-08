import React from 'react';
import Hero from '../components/Hero/Hero';
import Cards from '../components/Cards/Cards';
import Ourinstructor from '../components/Team/Ourinstructor.jsx';
import MainLayout from '../Layouts/MainLayout';
import Facts from '../components/Facts/Facts';
import Courses from '../components/Courses/Courses';
import TeamComponent from '../components/Team/Team';
import Newsletter from '../components/Newslatter/Newsletter'
import Contact from '../components/Contact/Contact';
import About from '../components/Aboutyogacenter/Yogacenter';
import Reveiw from '../components/Reveiw/Reveiw';
import OurClasses from '../components/Classes/OurClasses.jsx';
import Aboutcenter from '../components/About/Aboutcenter.jsx';
import WhatsAppButton from '../components/Whatsapp/WhatsAppButton.jsx';
import ChatBot from '../components/Chatbot/Chatbot.jsx';





const Home = () => {
  return (
    <MainLayout>
    <Hero />
       {/* <Cards /> */}
       <WhatsAppButton/>
       <ChatBot/>
       <Aboutcenter/>
       <Facts />
       <OurClasses/>
       <Ourinstructor />
       <Reveiw/>
       <Newsletter />
       <Contact />
    </MainLayout>
  );
};

export default Home;
