'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-christmas-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-christmas-red/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-christmas-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Event Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="heading-primary text-5xl sm:text-6xl lg:text-7xl"
              >
                Celeste 2.0
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl sm:text-3xl font-playfair text-christmas-green font-semibold"
              >
                Christmas Celebration
              </motion.p>
            </div>

            {/* Biblical Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gradient-to-r from-christmas-red/10 via-christmas-gold/10 to-christmas-green/10 p-6 rounded-lg border-l-4 border-christmas-gold"
            >
              <p className="text-lg sm:text-xl font-playfair italic text-gray-800 leading-relaxed">
                "For unto you is born this day in the city of David a Savior, who is Christ the Lord"
              </p>
              <p className="text-sm sm:text-base text-christmas-red font-semibold mt-2">
                — Luke 2:11
              </p>
            </motion.div>

            {/* Organizing Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex items-center justify-center space-x-8"
            >
              
              <div className="flex items-center space-x-2">
                <Image
                  src="/jy.png"
                  alt="Jesus Youth Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <span className="text-sm font-semibold text-gray-700">Jesus Youth SJCET</span>
                
        
                <Image
                  src="/sjcet.png"
                  alt="SJCET Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Event Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="card p-6 space-y-4"
            >
              <h3 className="text-xl font-bold text-christmas-green mb-4">Event Details</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-christmas-red text-xl flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-semibold text-gray-900">19th December 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaClock className="text-christmas-red text-xl flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="font-semibold text-gray-900">10:00 AM – 1:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-christmas-red text-xl flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Venue</p>
                    <p className="font-semibold text-gray-900">Center Courtyard, SJCET Palai</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('#competitions')}
                className="btn-primary"
              >
                View Competitions
              </button>
              <button
                onClick={() => scrollToSection('#competitions')}
                className="btn-secondary"
              >
                Register Now
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Event Banner */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/banner.png"
                alt="Celeste 2.0 Event Banner"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Decorative floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 text-6xl"
            >
              ⭐
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 text-6xl"
            >
              🎄
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

