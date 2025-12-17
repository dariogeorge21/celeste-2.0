'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contacts = [
    {
      name: 'Dony Simon Babu',
      role: 'Jesus Youth SJCET',
      phone: '+91 90616 99871'},
    {
      name: 'Alent Siby',
      role: 'Student Representative',
      phone: '+91 92070 91862',
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-christmas-cream to-white">
      <div className="section-container" ref={ref}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="heading-secondary mb-4"
          >
            Contact Us
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
            Have questions? We're here to help! Reach out to us for any inquiries about Celeste 2.0
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-6 text-center lg:text-left">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="card p-6 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-playfair text-xl font-bold text-christmas-red mb-1">
                  {contact.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{contact.role}</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-christmas-green" />
                    <a href={`tel:${contact.phone}`} className="text-gray-700 hover:text-christmas-red transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card p-6"
            >
              <h3 className="font-playfair text-xl font-bold text-christmas-green mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/jysjcet/"
                  className="w-12 h-12 bg-gradient-to-br from-christmas-red to-christmas-gold rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                {/* Whatsapp Group */}
                <a
                  href="https://chat.whatsapp.com/HNeyFnFYhcJAht4APRGr2S"
                  className="w-12 h-12 bg-gradient-to-br from-christmas-red to-christmas-gold rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  aria-label="Whatsapp Group"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* College Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="card p-8 space-y-6 text-center"
          >
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="relative h-20 w-20">
                <Image
                  src="/sjcet.png"
                  alt="SJCET Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-20 w-20">
                <Image
                  src="/jy.png"
                  alt="Jesus Youth Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center space-y-4">
              <h3 className="font-playfair text-2xl font-bold text-gray-900">
                St. Joseph's College of Engineering and Technology, Palai
              </h3>
              {/* <div className="flex items-start justify-center space-x-2 text-gray-600">
                <FaMapMarkerAlt className="text-christmas-red mt-1 flex-shrink-0" />
                <p className="text-left">
                  Choondacherry, Palai<br />
                  Kottayam District, Kerala<br />
                  India - 686579
                </p>
              </div> */}
            </div>
            <div className="pt-6 border-t border-gray-200 text-center">
              <p className="font-playfair text-lg font-semibold text-christmas-green">
                Organized by Jesus Youth SJCET
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Spreading love, joy, and the spirit of Christmas
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

