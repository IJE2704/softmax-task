import Image from 'next/image';
import logo from '@/assets/softmaxLogo.png';

import Navbar from '@/components/landingPage/Navbar';
import Header from '@/components/landingPage/Header';
import Course from '@/components/landingPage/Course';
import Categories from '@/components/landingPage/Categories';
import Instructor from '@/components/landingPage/Instructor';
import Achievement from '@/components/landingPage/Achievement';
import Join from '@/components/landingPage/Join';
import Footer from '@/components/landingPage/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='border-b border-[1px] border-[#E7E9EB] hidden lg:block'></div>
      <Header></Header>
      <div className='bg-[#E9F8F3B2]'>
        <Course></Course>
      </div>
      <Categories></Categories>
      <div className='bg-[#FFFAF5]'>
      <Instructor></Instructor>
      </div>
      <Achievement></Achievement>
      <div className='bg-[#E9F8F3B2]'>
       <Join></Join>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;