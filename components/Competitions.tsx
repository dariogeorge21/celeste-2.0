'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CompetitionCard from './CompetitionCard';
import RulesModal from './RulesModal';

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
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

