'use client'
import { useEffect, useRef, useState } from 'react';
import ThreeAnimation from '@/component/ThreeAnimation';
import Link from "next/link"
import Image from "next/image"
import { FaSearch , FaCode , FaShare , FaCheck, FaStar, FaGithub ,  FaLinkedin, FaInstagram ,FaMars , FaFacebookMessenger , FaTwitter , FaFacebook} from "react-icons/fa";
import { Menu, X } from 'lucide-react';


export default function infonet(){



  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.5, // Trigger when 50% visible
      }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, []);



    const [menuOpen, setMenuOpen] = useState(false);



  return (
    <div className="">
         {/* herosec */}
         <div className="w-full h-auto min-h-screen flex flex-col items-center gap-16 relative px-4 sm:px-6 md:px-8">

      {/* Background */}
      <div className="absolute w-full h-full inset-0 bg-[url('/background2.jpg')] bg-center bg-cover brightness-[0.2] opacity-95 z-0"></div>

      {/* Header */}
      <header className="xl:w-[65%] sm:w-[75%] w-85% mx-auto bg-white/60 backdrop-blur-md z-50 fixed top-4 left-0 right-0 shadow-md rounded-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          
          {/* Logo */}
          <div className="font-bold text-blue-950 text-xl sm:text-2xl">
            <span>Infonet</span>
            <span className="text-orange-700 ml-1">Services</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link className="hover:font-bold" href="#">Home</Link>
            <Link className="hover:font-bold" href="#">Services</Link>
            <Link className="hover:font-bold" href="#">Portfolio</Link>
            <Link className="hover:font-bold" href="#">Testimonials</Link>
            <Link className="hover:font-bold" href="#">Contact</Link>
            <button className="w-[120px] h-10 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition">Get Started</button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-blue-950" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 space-y-4 text-sm font-medium text-blue-950 rounded-b-2xl transition-all duration-300">
            <Link className="block hover:font-bold" href="#">Home</Link>
            <Link className="block hover:font-bold" href="#">Services</Link>
            <Link className="block hover:font-bold" href="#">Portfolio</Link>
            <Link className="block hover:font-bold" href="#">Testimonials</Link>
            <Link className="block hover:font-bold" href="#">Contact</Link>
            <button className="w-full h-10 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition">Get Started</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="w-full max-w-screen-xl z-10 flex flex-col items-center xl:items-start text-center md:text-left pt-40 sm:pt-44 px-4 sm:px-6">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-semibold text-white leading-tight">
            Transform Your <br /> Business With Expert <br /> Digital Solutions
          </h1>

          <p className="text-lg sm:text-xl font-sans text-white font-medium leading-relaxed">
            Professional web development, SEO, and digital marketing services <br className="hidden md:block" />
            tailored to drive your business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:justify-start">
            <button className="w-[250px] sm:w-[270px] h-12 font-semibold text-white hover:text-black bg-orange-600 rounded-md hover:bg-white/35 hover:border hover:border-white/50 transition">
              Get a Free Consultation
            </button>
            <button className="w-[250px] sm:w-[270px] h-12 font-semibold text-black hover:text-white bg-white/35 border border-white/50 hover:bg-orange-600 hover:border-transparent rounded-md transition">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>

    </div>



         {/* section 2 */}


         <div className="w-full sm:h-[120vh] h-[150vh] flex flex-col items-center gap-16 px-4 md:px-8">

  {/* <!-- About Infonet Section --> */}
  <div className="flex flex-col items-center gap-6 mt-28 text-center">
    <span className="text-4xl md:text-5xl font-serif font-semibold text-blue-950">About Infonet Services</span>
    <span className="text-lg md:text-xl font-semibold font-sans">
      We are a dedicated team of digital experts committed to empowering businesses with cutting-edge digital solutions.
    </span>
  </div>

  {/* <!-- Get to Know Us Section --> */}
  <div className="flex flex-col md:flex-row w-full h-auto md:h-[60vh] justify-center gap-6 md:gap-12">
    <div className="w-full md:w-[50%] flex flex-col gap-7">
      <span className="text-2xl md:text-3xl font-serif font-semibold text-blue-950">Get to Know Us</span>
      <span className="text-lg md:text-xl font-semibold font-sans">
        Infonet is a full-service digital agency, specializing in web development, SEO, and Digital Marketing. Our mission is to help businesses establish a strong online presence and achieve sustainable growth.
      </span>

      <div className="flex flex-col gap-7">
        <span className="text-2xl md:text-3xl font-serif font-semibold text-blue-950">Our Expert Team</span>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
          <div className="text-lg md:text-xl font-semibold font-serif">Hasnain <div className="text-sm text-gray-600 font-sans">SEO Specialist</div></div>
          <div className="text-lg md:text-xl font-semibold font-serif">Hassan <div className="text-sm text-gray-600 font-sans">Web Developer</div></div>
          <div className="text-lg md:text-xl font-semibold font-serif">Shahzaib <div className="text-sm text-gray-600 font-sans">Graphics Designer</div></div>
          <div className="text-lg md:text-xl font-semibold font-serif">Arham <div className="text-sm text-gray-600 font-sans">Data Entry Specialist</div></div>
        </div>
      </div>
    </div>

    {/* <!-- Image Section --> */}
    <div className="w-full md:w-[40%] flex justify-center">
      <Image 
        src="/bg3.jpg"
        alt="pic of laptop"
        width={500}
        height={500}
        className="rounded-xl"
      />
    </div>
  </div>

</div>


        {/* section 3 */}
<div className="w-full sm:h-[210vh] h-auto flex flex-col items-center gap-16 mt-4 px-4 md:px-8">

  {/* Title Section */}
  <div className="flex flex-col items-center gap-6 mt-28 text-center">
    <span className="text-4xl md:text-5xl font-serif font-semibold text-blue-950">Our Services</span>
    <span className="text-lg md:text-xl font-semibold font-sans">
      We offer comprehensive digital solutions tailored to meet your business needs and drive growth
    </span>
  </div>

  {/* Service Cards Section */}
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 h-auto">
    
    {/* Service Card 1 */}
    <div className="bg-gray-100 flex flex-col gap-3 p-6 rounded-xl hover:border transition-all duration-300 hover:shadow-2xl">
      <div className="w-[55px] h-[55px] bg-gray-200 text-black rounded-lg flex justify-center items-center mx-auto">
        <FaSearch />
      </div>
      <span className="text-xl md:text-2xl font-serif font-semibold text-center">Web Development</span>
      <span className="text-sm md:text-base text-center">
        Boost your website's visibility and drive organic traffic with our Expert SEO services
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Local SEO
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Priority Support
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Real-time Analytics
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Custom Integration
      </span>
      <button className="h-12 w-[150px] bg-white rounded-lg mt-2 mx-auto hover:bg-blue-900 hover:text-white transition-all duration-300">
        Learn More
      </button>
    </div>

    {/* Service Card 2 */}
    <div className="bg-gray-100 flex flex-col gap-3 p-6 rounded-xl hover:border transition-all duration-300 hover:shadow-2xl">
      <div className="w-[55px] h-[55px] bg-gray-200 text-black rounded-lg flex justify-center items-center mx-auto">
        <FaCode />
      </div>
      <span className="text-xl md:text-2xl font-serif font-semibold text-center">Search Engine Optimization</span>
      <span className="text-sm md:text-base text-center">
        Boost your website's visibility and drive organic traffic with our Expert SEO services
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Local SEO
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Priority Support
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Real-time Analytics
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Custom Integration
      </span>
      <button className="h-12 w-[150px] bg-white rounded-lg mt-2 mx-auto hover:bg-blue-900 hover:text-white transition-all duration-300">
        Learn More
      </button>
    </div>

        {/* Service Card 2 */}
    <div className="bg-gray-100 flex flex-col gap-3 p-6 rounded-xl hover:border transition-all duration-300 hover:shadow-2xl">
      <div className="w-[55px] h-[55px] bg-gray-200 text-black rounded-lg flex justify-center items-center mx-auto">
        <FaCode />
      </div>
      <span className="text-xl md:text-2xl font-serif font-semibold text-center">Search Engine Optimization</span>
      <span className="text-sm md:text-base text-center">
        Boost your website's visibility and drive organic traffic with our Expert SEO services
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Local SEO
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Priority Support
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Real-time Analytics
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Custom Integration
      </span>
      <button className="h-12 w-[150px] bg-white rounded-lg mt-2 mx-auto hover:bg-blue-900 hover:text-white transition-all duration-300">
        Learn More
      </button>
    </div>

        {/* Service Card 2 */}
    <div className="bg-gray-100 flex flex-col gap-3 p-6 rounded-xl hover:border transition-all duration-300 hover:shadow-2xl">
      <div className="w-[55px] h-[55px] bg-gray-200 text-black rounded-lg flex justify-center items-center mx-auto">
        <FaCode />
      </div>
      <span className="text-xl md:text-2xl font-serif font-semibold text-center">Search Engine Optimization</span>
      <span className="text-sm md:text-base text-center">
        Boost your website's visibility and drive organic traffic with our Expert SEO services
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Local SEO
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Priority Support
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Real-time Analytics
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Custom Integration
      </span>
      <button className="h-12 w-[150px] bg-white rounded-lg mt-2 mx-auto hover:bg-blue-900 hover:text-white transition-all duration-300">
        Learn More
      </button>
    </div>

        {/* Service Card 2 */}
    <div className="bg-gray-100 flex flex-col gap-3 p-6 rounded-xl hover:border transition-all duration-300 hover:shadow-2xl">
      <div className="w-[55px] h-[55px] bg-gray-200 text-black rounded-lg flex justify-center items-center mx-auto">
        <FaCode />
      </div>
      <span className="text-xl md:text-2xl font-serif font-semibold text-center">Search Engine Optimization</span>
      <span className="text-sm md:text-base text-center">
        Boost your website's visibility and drive organic traffic with our Expert SEO services
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Local SEO
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Priority Support
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Real-time Analytics
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Custom Integration
      </span>
      <button className="h-12 w-[150px] bg-white rounded-lg mt-2 mx-auto hover:bg-blue-900 hover:text-white transition-all duration-300">
        Learn More
      </button>
    </div>

    {/* Service Card 3 */}
    <div className="bg-gray-100 flex flex-col gap-3 p-6 rounded-xl hover:border transition-all duration-300 hover:shadow-2xl">
      <div className="w-[55px] h-[55px] bg-gray-200 text-black rounded-lg flex justify-center items-center mx-auto">
        <FaShare />
      </div>
      <span className="text-xl md:text-2xl font-serif font-semibold text-center">Graphics Designing</span>
      <span className="text-sm md:text-base text-center">
        Boost your website's visibility and drive organic traffic with our Expert SEO services
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Local SEO
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Priority Support
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Real-time Analytics
      </span>
      <span className="flex gap-2 text-sm md:text-base">
        <FaCheck className="text-gray-600" /> Custom Integration
      </span>
      <button className="h-12 w-[150px] bg-white rounded-lg mt-2 mx-auto hover:bg-blue-900 hover:text-white transition-all duration-300">
        Learn More
      </button>
    </div>

  </div>

  {/* View All Services Button */}
  <div className="flex justify-center">
    <button className="w-[250px] h-16 bg-blue-900 rounded-xl text-white font-semibold hover:bg-gradient-to-t hover:from-blue-800 hover:to-blue-500 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl border-4 border-blue-900 relative overflow-hidden">
      View All Services
      <style jsx>{`
        button {
          position: relative;
          z-index: 0;
        }
        button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #ffffff, #0000ff, #ff00ff, #00ff00, #ff0000);
          background-size: 400% 400%;
          animation: borderAnimation 4s linear infinite;
          z-index: -1;
        }
        @keyframes borderAnimation {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          100% {
            transform: translateX(100%) translateY(100%);
          }
        }
      `}</style>
    </button>
  </div>

</div>

                  

                 {/* section 4 */}

<div className="w-full m:w-[1590px] sm:h-[135vh] h-auto bg-orange-400 flex flex-col items-center gap-16 mt-4 z-10">
  <div className="flex flex-col items-center gap-6 mt-28">
    <span className="text-5xl font-serif font-semibold text-blue-950">Our Work</span>
    <span className="text-xl font-semibold font-sans text-center max-w-[800px]">
      Explore Our recent projects and see how we've helped businesses to achieve their digital goals
    </span>
  </div>

  <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
    <div className="bg-gray-100 flex flex-col gap-5 p-6 rounded-xl hover:border transition-all duration-300 hover:shadow-2xl">
      <div>
        <Image
          src="/card1.jpg"
          alt="pic"
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>
      <span className="h-7 w-[160px] bg-gray-200 font-semibold flex justify-center items-center rounded-sm">Web Development</span>
      <span className="text-xl font-serif font-semibold">E-commerce Platform</span>
      <span>A custom online store with integrated payment solutions and inventory management</span>
      <div className="flex gap-5">
        <span>Result: 67% sales increase</span>
        <span>View Case Study</span>
      </div>
    </div>

    <div className="bg-gray-100 flex flex-col gap-5 p-6 rounded-xl hover:border transition-all duration-300 hover:shadow-2xl">
      <div>
        <Image
          src="/card3.jpg"
          alt="pic"
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>
      <span className="h-7 w-[60px] bg-gray-200 font-semibold flex justify-center items-center rounded-sm">SEO</span>
      <span className="text-xl font-serif font-semibold">Local Business SEO</span>
      <span>A custom online store with integrated payment solutions and inventory management</span>
      <div className="flex gap-5">
        <span>Result: 67% sales increase</span>
        <span>View Case Study</span>
      </div>
    </div>

    <div className="bg-gray-100 flex flex-col gap-5 p-6 rounded-xl hover:border transition-all duration-300 hover:shadow-2xl">
      <div>
        <Image
          src="/card2.jpg"
          alt="pic"
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>
      <span className="h-7 w-[140px] bg-gray-200 font-semibold flex justify-center items-center rounded-sm">Social Media</span>
      <span className="text-xl font-serif font-semibold">Brand Awareness Campaign</span>
      <span>A custom online store with integrated payment solutions and inventory management</span>
      <div className="flex gap-5">
        <span>Result: 67% sales increase</span>
        <span>View Case Study</span>
      </div>
    </div>
  </div>

  <div>
    <button className="w-[250px] h-16 bg-blue-900 rounded-xl text-white font-semibold hover:bg-gradient-to-t hover:from-blue-800 hover:to-blue-500 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl border-4 border-blue-900 relative overflow-hidden">
      Discuss Your Project
      <style jsx>{`
        button {
          position: relative;
          z-index: 0;
        }
        button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #ffffff, #0000ff, #ff00ff, #00ff00, #ff0000);
          background-size: 400% 400%;
          animation: borderAnimation 4s linear infinite;
          z-index: -1;
        }
        @keyframes borderAnimation {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          100% {
            transform: translateX(100%) translateY(100%);
          }
        }
      `}</style>
    </button>
  </div>
</div>




                {/* section 5 */}
<div className="w-full mb-10 mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48 h-auto flex flex-col items-center gap-24">
  <div className="flex flex-col items-center gap-6 mt-28">
    <span className="text-5xl font-serif font-semibold text-blue-950">Clients Testimonials</span>
    <span className="text-xl font-semibold font-sans text-center">
      Don't just take our words for it, here's what our clients have to say about our services
    </span>
  </div>

  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
    {/* Testimonial 1 */}
    <div className="flex flex-col gap-5 p-6 rounded-xl hover:border transition-all duration-300 shadow-lg hover:shadow-2xl">
      <span className="h-7 w-[140px] font-semibold flex justify-center items-center rounded-sm text-orange-400 gap-3">
        <FaStar className="w-8 h-8" /><FaStar className="w-8 h-8" />
        <FaStar className="w-8 h-8" /><FaStar className="w-8 h-8" />
        <FaStar className="w-8 h-8" />
      </span>
      <span className="text-lg italic font-sans">
        "Infonet Services helped our business rank #1 on google in 3 months! Their SEO strategy completely transformed our online presence"
      </span>
      <div className="flex gap-5 items-center">
        <div className="w-[65px] h-16 bg-gray-400 font-bold text-2xl rounded-full flex justify-center items-center">JD</div>
        <div className="flex flex-col">
          <span className="font-semibold">Jhon Doe</span>
          <span>Owner, local Butique</span>
        </div>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="flex flex-col gap-5 p-6 rounded-xl hover:border transition-all duration-300 shadow-lg hover:shadow-2xl">
      <span className="h-7 w-[140px] font-semibold flex justify-center items-center rounded-sm text-orange-400 gap-3">
        <FaStar className="w-8 h-8" /><FaStar className="w-8 h-8" />
        <FaStar className="w-8 h-8" /><FaStar className="w-8 h-8" />
        <FaStar className="w-8 h-8" />
      </span>
      <span className="text-lg italic font-sans">
        "The Website they built for our company perfectly captures our brand and significantly increased our conversion rate. Highly recommended!"
      </span>
      <div className="flex gap-5 items-center">
        <div className="w-[65px] h-16 bg-gray-400 font-bold text-2xl rounded-full flex justify-center items-center">JS</div>
        <div className="flex flex-col">
          <span className="font-semibold">Jame Smith</span>
          <span className="text-sm">Marketing Director, tech startup</span>
        </div>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="flex flex-col gap-5 p-6 rounded-xl hover:border transition-all duration-300 shadow-lg hover:shadow-2xl">
      <span className="h-7 w-[140px] font-semibold flex justify-center items-center rounded-sm text-orange-400 gap-3">
        <FaStar className="w-8 h-8" /><FaStar className="w-8 h-8" />
        <FaStar className="w-8 h-8" /><FaStar className="w-8 h-8" />
      </span>
      <span className="text-lg italic font-sans">
        "Their Social Media management has been a game changer for our brand. We've seen a 200% increase in engagement, and our sales have never been better."
      </span>
      <div className="flex gap-5 items-center">
        <div className="w-[65px] h-16 bg-gray-400 font-bold text-2xl rounded-full flex justify-center items-center">RJ</div>
        <div className="flex flex-col">
          <span>Robert Jhonson</span>
          <span>CEO - Ecommerce store</span>
        </div>
      </div>
    </div>
  </div>
</div>



               {/* section 6 */}
<div className='w-full h-[50vh] bg-blue-900 flex flex-col items-center justify-center gap-7 px-4 sm:px-6 md:px-12 lg:px-24'>
  <span className='text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold font-serif text-center'>
    Ready to Grow Your Business?
  </span>
  <span className='text-base sm:text-lg lg:text-xl text-white text-center'>
    Let's work together to create a digital strategy that drives results and helps you achieve your business goals.
  </span>

  <span>
    <button
      className={`relative overflow-hidden w-[200px] sm:w-[270px] h-12 font-semibold text-white bg-orange-600 rounded-md
        transform transition-all duration-300 ease-in-out
        hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,115,0,0.6)]`}
    >
      Get Started Today
      <span className="shine" />
    </button>

    <style jsx>{`
      .shine {
        position: absolute;
        top: 0;
        left: -75%;
        height: 100%;
        width: 50%;
        background: linear-gradient(
          120deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.4) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        transform: skewX(-20deg);
        pointer-events: none;
        animation: shine-move 2.5s ease-in-out infinite;
      }

      @keyframes shine-move {
        0% {
          left: -75%;
        }
        100% {
          left: 125%;
        }
      }
    `}</style>
  </span>
</div>


                {/* section 7 */}
{/* 


                <div className='w-full m:w-[1590px] h-[210vh] flex flex-col  items-center gap-16 mt-4'>
                      

                      <div className="flex flex-col items-center gap-6 mt-28">
                            <span className="text-5xl font-serif font-semibold text-blue-950">Clients Testimonials</span>
                            <span className="text-xl font-semibold font-sans text-center">Don't just take our words for it, here's what our clients have to say about our services</span>
                      </div>

                      <div>
                          <form>
                              
                          </form>
                      </div>


                </div> */}








                <div className='w-full m:w-[1590px] sm:h-[100vh] h-[145vh]  flex flex-col  items-center gap-16 mt-4'>

                     <div className="flex flex-col items-center gap-6 mt-28">
                            <span className="text-5xl font-serif font-semibold text-blue-950">Get In Touch </span>
                            <span className="text-xl font-semibold font-sans text-center">Don't just take our words for it, here's what our clients have to say about our services</span>
                      </div>


              <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 p-7 sm:grid-rows-1 text-black sm:gap-5">
                    <div className="sm:w-[50%] flex flex-col gap-8 mt-5">
                             <h1 className="text-2xl font-semibold">Conatact Information</h1>
                           <p className="flex flex-col gap-4">
                             <span className="flex gap-3"> <FaFacebookMessenger className="text-purple-600" /> Support.infonetservices@gmail.com</span>
                             <span className="flex gap-3">< FaMars className="text-purple-600" /> www.agentiaworld.com</span>
                           </p>
                             <ol className="flex gap-3 ">
                                <li><FaGithub/></li>
                                <li><FaLinkedin/></li>
                                <li><FaInstagram/></li>
                             </ol>
                         </div>

                         <div className="sm:w-[100%]  p-5"> 
                         <form className="space-y-4">
                                   <div className="flex space-x-4">
                                     <input
                                       type="text"
                                       name="firstName"
                                       placeholder="First Name"
                                       className="w-1/2 p-3   rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 border border-[#200f2b]"
                                       required
                                     />
                                     <input
                                       type="text"
                                       name="lastName"
                                       placeholder="Last Name"
                                       className="w-1/2 p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 border border-[#200f2b]"
                                       required
                                     />
                                   </div>
                                   <input
                                     type="email"
                                     name="email"
                                     placeholder="Email Address"
                                     className="w-full p-3   rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 border border-[#200f2b]"
                                     required
                                   />
                                   <textarea
                                     name="message"
                                     placeholder="Your Message"
                                     className="w-full p-3   rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 border border-[#200f2b]"
                                     rows={4}
                                     required
                                   ></textarea>


                                   {/* button  */}


                                   <span>
                              <button
                                className={`relative overflow-hidden w-full h-12 font-semibold text-white bg-blue-600 rounded-md
                                  transform transition-all duration-300 ease-in-out
                                  hover:scale-80 hover:-translate-y-1 `}
                              >
                                Get Started Today
                                <span className="shine" />
                              </button>

                              <style jsx>{`
                                .shine {
                                  position: absolute;
                                  top: 0;
                                  left: -75%;
                                  height: 100%;
                                  width: 50%;
                                  background: linear-gradient(
                                    120deg,
                                    rgba(255, 255, 255, 0) 0%,
                                    rgba(255, 255, 255, 0.4) 50%,
                                    rgba(255, 255, 255, 0) 100%
                                  );
                                  transform: skewX(-20deg);
                                  pointer-events: none;
                                  animation: shine-move 2.5s ease-in-out infinite;
                                }

                                @keyframes shine-move {
                                  0% {
                                    left: -75%;
                                  }
                                  100% {
                                    left: 125%;
                                  }
                                }
                              `}</style>
                            </span>



                          </form>
                         </div>
                    </div>


            </div>



            {/* section 8 */}



             <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Infonet Services */}
        <div className='flex flex-col gap-3'>
          <h2 className="text-2xl font-bold">
            Infonet <span className="text-red-400">Services</span>
          </h2>
          <p className="mt-2 text-sm">
            Empowering Your Business with Digital Solutions
          </p>
          <p className="mt-4 text-xs text-gray-300">
            © 2025 Infonet Services. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Portfolio</a></li>
            <li><a href="#" className="hover:text-gray-300">Testimonials</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-300">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>




    

    </div>
  )
}


