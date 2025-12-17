'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMusic, FaTrophy, FaGifts, FaHandsHelping } from 'react-icons/fa';

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timelineItems: TimelineItem[] = [
    {
      time: '10:00 AM',
      title: 'Opening Ceremony',
      description: 'Welcome address and inauguration of Celeste 2.0',
      icon: <FaHandsHelping className="text-2xl" />,
    },
    {
      time: '10:30 AM',
      title: 'Competition Rounds Begin',
      description: 'Carol singing, Santa competition, and other events commence',
      icon: <FaMusic className="text-2xl" />,
    },
    {
      time: '12:00 PM',
      title: 'Crib Judging',
      description: 'Evaluation of crib making competition entries',
      icon: <FaTrophy className="text-2xl" />,
    },
    {
      time: '12:45 PM',
      title: 'Prize Distribution',
      description: 'Announcement of winners and award ceremony',
      icon: <FaGifts className="text-2xl" />,
    },
  ];

  return (
    <section id="schedule" className="relative py-20 bg-gradient-to-b from-white to-christmas-cream">
      <div className="section-container" ref={ref}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="heading-secondary mb-4"
          >
            Event Schedule
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-green mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            Join us for a day filled with joy, creativity, and celebration
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-christmas-red via-christmas-gold to-christmas-green transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                    <div className="card p-6 hover:scale-105 transition-transform duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-christmas-red to-christmas-gold rounded-full flex items-center justify-center text-white">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-christmas-red font-bold text-lg mb-1">{item.time}</p>
                          <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-christmas-gold rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            * Detailed schedule will be updated soon. Stay tuned for more information!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

