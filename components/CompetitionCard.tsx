'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';

interface CompetitionCardProps {
  title: string;
  icon: string;
  biblicalQuote?: string;
  description: string;
  venue?: string;
  date?: string;
  prize1: string;
  prize2: string;
  registrationLink: string;
  posterImage?: string;
  onViewRules: () => void;
  index: number;
}

export default function CompetitionCard({
  title,
  icon,
  biblicalQuote,
  description,
  venue,
  date,
  prize1,
  prize2,
  registrationLink,
  posterImage,
  onViewRules,
  index,
}: CompetitionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="card group w-full max-w-md mx-auto md:max-w-none"
    >
      {/* Poster Image */}
      {posterImage && (
        <div className="relative w-full h-80 bg-gradient-to-br from-christmas-red/20 to-christmas-green/20">
          <Image
            src={posterImage}
            alt={`${title} Poster`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6 space-y-4 text-center md:text-left">
        {/* Title and Icon */}
        <div className="flex items-center justify-center md:justify-between flex-col md:flex-row space-y-2 md:space-y-0">
          <h3 className="font-playfair text-2xl font-bold text-gray-900 flex-1 text-center md:text-left">
            {title}
          </h3>
          <span className="text-4xl md:ml-2">{icon}</span>
        </div>

        {/* Biblical Quote */}
        {biblicalQuote && (
          <div className="bg-christmas-cream/50 p-3 rounded-lg border-l-4 border-christmas-gold">
            <p className="text-sm italic text-gray-700">{biblicalQuote}</p>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{description}</p>

        {/* Venue and Date */}
        {(venue || date) && (
          <div className="space-y-1 text-sm">
            {venue && (
              <p className="text-gray-700">
                <span className="font-semibold">Venue:</span> {venue}
              </p>
            )}
            {date && (
              <p className="text-gray-700">
                <span className="font-semibold">Date:</span> {date}
              </p>
            )}
          </div>
        )}

        {/* Prizes */}
        <div className="bg-gradient-to-r from-christmas-gold/10 to-christmas-red/10 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <FaTrophy className="text-christmas-gold text-xl" />
            <h4 className="font-bold text-gray-900">Prizes</h4>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-gray-600">1st Prize</p>
              <p className="font-bold text-christmas-red text-lg">{prize1}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600">2nd Prize</p>
              <p className="font-bold text-christmas-green text-lg">{prize2}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
          <button
            onClick={onViewRules}
            className="flex-1 px-4 py-2 text-sm font-semibold text-christmas-green border-2 border-christmas-green rounded-lg hover:bg-christmas-green hover:text-white transition-all duration-300"
          >
            View Rules
          </button>
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-christmas-red rounded-lg hover:bg-christmas-darkRed hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Register Now</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

