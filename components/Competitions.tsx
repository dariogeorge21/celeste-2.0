'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CompetitionCard from './CompetitionCard';
import RulesModal from './RulesModal';
import Image from 'next/image';

interface Competition {
  id: string;
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
  rules: string[];
}

export default function Competitions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);

  const competitions: Competition[] = [
    {
      id: 'carol',
      title: 'Carol Competition',
      icon: '🎤',
      biblicalQuote: '"Sing to the Lord a new song." — Psalm 96:1',
      description: 'Celebrate the joy of Christmas through melodious carols and harmonious voices',
      prize1: '₹1,500',
      prize2: '₹1,000',
      registrationLink: 'https://forms.gle/dp654AuQhBJdxSqn6',
      posterImage: '/competition/carol.jpeg',
      rules: [
        'Team size: 5-9 members (strictly enforced)',
        'Performance duration: 3-5 minutes (strict time limit)',
        'Each team must have a unique team name',
        'Designate one team leader for communication',
        'Teams must report 15 minutes before start time',
        'Minimum 3 teams required for competition to proceed',
        'Single carol or medley of carols allowed',
        'Parody songs are strictly prohibited',
        'No karaoke or pre-recorded vocals allowed (live singing only)',
        'Any language permitted',
        'Judging criteria: vocal quality, harmony, creativity, stage presence, overall impact',
        'Results are final and based on judges\' decision',
      ],
    },
    {
      id: 'santa',
      title: 'Santa Competition',
      icon: '🎅',
      biblicalQuote: '"The joy of the Lord is your strength." — Nehemiah 8:10',
      description: 'Embody the spirit of Santa Claus and spread joy and festive cheer through creative portrayals',
      prize1: '₹800',
      prize2: '₹500',
      registrationLink: 'https://forms.gle/rxf8SxZX2S8twA437',
      posterImage: '/competition/santa.jpeg',
      rules: [
        'Individual event (solo participation)',
        'Maximum 3 participants allowed per class',
        'Participants must report 15 minutes before start time',
        'Stop performance immediately when music stops',
        'Creativity and originality given higher weightage',
        'Proper Santa Claus attire is mandatory (dress code violation = immediate disqualification)',
        'Judging criteria: creativity, performance quality, characterization, audience appeal',
        'Results are final and based on judges\' decision',
      ],
    },
    {
      id: 'solomon',
      title: 'സോളമനും ശോശന്നയും',
      icon: '✨',
      description: 'Showcase creativity and festive spirit through traditional Christian character portrayals',
      venue: 'Central Courtyard',
      date: '19th December 2024',
      prize1: '₹1,000',
      prize2: '₹500',
      registrationLink: 'https://forms.gle/TSDRqnZzE6dyQN828',
      posterImage: '/competition/fancy_dress.jpeg',
      rules: [
        'Maximum 3 participants allowed per class',
        'Individual or pair participation allowed',
        'Traditional Christian costumes are mandatory',
        'Participants must report 15 minutes before start time',
        'Competition format - Three rounds:',
        '  • Round 1: Entry/Ramp walk (showcase costume and presence)',
        '  • Round 2: Self-introduction (introduce yourself and character)',
        '  • Round 3: Q&A session (answer questions from judges)',
        'Minimum 3 participants required for competition to proceed',
        'Judging criteria: creativity, performance, characterization, costume authenticity, Q&A delivery',
        'Q&A Topics (participants should be prepared to answer questions on):',
        '  • Importance of family time during festivals',
        '  • Celebrating festivals together',
        '  • Strengthening relationships through celebrations',
        '  • Favorite festival memories',
        '  • Significance of gift-giving',
        '  • Meaning of decorations',
        '  • Traditional festival foods',
        '  • Cultural diversity in celebrations',
        '  • Helping the needy during festivals',
        '  • Inclusiveness and unity through festivals',
        '  • Respecting traditions',
        '  • Role of youth in festivals',
        '  • Community life and togetherness',
        '  • One-word/one-habit/one-change/one-value reflection questions',
        'Results are final and based on judges\' decision',
      ],
    },
    {
      id: 'crib',
      title: 'Crib Making Competition',
      icon: '🎄',
      biblicalQuote: '"She gave birth to her firstborn son and laid him in a manger." — Luke 2:7',
      description: 'Express creativity and devotion through beautiful Nativity-themed crib designs',
      prize1: '₹3,000',
      prize2: '₹2,000',
      registrationLink: 'https://forms.gle/TRDJnQtQKbWyjQac7',
      posterImage: '/competition/crib.jpeg',
      rules: [
        'Department-wise competition',
        'Competition time: 9:15 AM to 12:15 PM (19th December 2024)',
        'Team size: 8-12 members (strictly enforced - no exceptions)',
        'Teams must report 15 minutes before start time (9:00 AM)',
        'All teams must assemble at centre courtyard during inauguration',
        'Area allocation will be communicated by organizers on the day',
        'Minimum 3 teams required for competition to proceed',
        'Ready-made crib models are allowed',
        'Decorations should preferably be handmade and original',
        'No inappropriate, offensive, or disrespectful presentations (immediate disqualification)',
        'Judges will arrive at 12:15 PM for evaluation',
        'Teams must clean their assigned area after judgment (mandatory for prize eligibility)',
        'Results are final and based on judges\' decision',
      ],
    },
  ];

  return (
    <section id="competitions" className="relative py-20 bg-white">
      {/* Enhanced Foam Party Information */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-8 mb-12 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-sm"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 0],
              opacity: [0.2, 0.1, 0.2]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-4 right-4 w-20 h-20 bg-yellow-300/20 rounded-full blur-sm"
          />
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-300/10 rounded-full blur-lg"
          />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center">
            {/* Enhanced Header with Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring", bounce: 0.4 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <motion.span 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl"
              >
                
              </motion.span>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                  Special Event Alert!
                </h3>
              </div>
              <motion.span 
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="text-3xl"
              >
                
              </motion.span>
            </motion.div>

            {/* Enhanced Main Content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-3"
            >
              <p className="text-2xl font-bold leading-tight">
                Join the Epic{' '}
                <motion.span 
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(255, 255, 0, 0.8)',
                      '0 0 20px rgba(255, 255, 0, 0.6)',
                      '0 0 10px rgba(255, 255, 0, 0.8)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="font-black text-yellow-300 text-3xl"
                >
                  FOAM PARTY
                </motion.span>
              </p>
              <p className="text-lg font-medium bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 inline-block border border-white/20">
                Organized by Final Years of SJCET! 🎓
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm opacity-90 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🌊</span>
                  <span>Epic Foam Fun</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎵</span>
                  <span>Amazing Music</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🕺</span>
                  <span>Dance Floor</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📸</span>
                  <span>Photo Memories</span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Image with Hover Effects */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 relative group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <Image
                  src="/competition/foam.jpeg" 
                  alt="Foam Party Banner"
                  width={800}
                  height={400}
                  className="w-full max-w-2xl mx-auto h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Action Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg border border-white/50">
                    <span className="flex items-center gap-2">
                      <span className="text-lg">🎉</span>
                      Get Ready to Party!
                      <span className="text-lg">🎉</span>
                    </span>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-300 rounded-full animate-pulse" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-300" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-500" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-700" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="section-container" ref={ref}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="heading-secondary mb-4"
          >
            Competitions
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-green mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Competition Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto justify-items-center md:justify-items-stretch">
          {competitions.map((competition, index) => (
            <CompetitionCard
              key={competition.id}
              {...competition}
              onViewRules={() => setSelectedCompetition(competition)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Rules Modal */}
      <RulesModal
        isOpen={selectedCompetition !== null}
        onClose={() => setSelectedCompetition(null)}
        competition={selectedCompetition}
      />
    </section>
  );
}

