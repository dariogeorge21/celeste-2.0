'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 text-6xl opacity-10">❄️</div>
        <div className="absolute bottom-20 left-10 text-6xl opacity-10">⭐</div>
        <div className="absolute top-1/2 right-10 text-5xl opacity-10">🎄</div>
        <div className="absolute bottom-10 right-1/4 text-5xl opacity-10">❄️</div>
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="heading-secondary mb-4"
            >
              About Celeste 2.0
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-green mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6 text-lg leading-relaxed text-gray-700"
          >
            <p>
              <span className="font-playfair text-2xl text-christmas-red font-bold">Celeste 2.0</span> is more than just an event—it's a celebration of the true spirit of Christmas: love, peace, hope, and togetherness. As we gather to commemorate the birth of Jesus Christ, we embrace the profound significance of this holy season and the joy it brings to our hearts.
            </p>

            <p>
              Christmas is a time when we come together as a community to reflect on the blessings we've received and to share the warmth of fellowship with one another. At SJCET Palai, we believe in creating moments that bring students, faculty, and staff closer, fostering a sense of unity and belonging that transcends the classroom.
            </p>

            <p>
              Organized by <span className="font-semibold text-christmas-green">Jesus Youth SJCET</span>, Celeste 2.0 promises to be a grand celebration filled with vibrant competitions, creative expressions, and heartfelt moments. From melodious carols that echo the joy of the season to beautifully crafted cribs that depict the Nativity, every activity is designed to honor the birth of our Savior and celebrate the values He taught us.
            </p>

            <p>
              This event is an opportunity for everyone to participate, showcase their talents, and experience the magic of Christmas in a meaningful way. Whether you're singing carols, creating art, or simply enjoying the festivities, Celeste 2.0 invites you to be part of a celebration that touches the soul and uplifts the spirit.
            </p>

            <div className="bg-gradient-to-r from-christmas-green/10 via-christmas-gold/10 to-christmas-red/10 p-8 rounded-xl border-2 border-christmas-gold/30 mt-8">
              <p className="text-center font-playfair text-xl text-gray-800 italic">
                "We warmly welcome all members of the SJCET community to join us in this joyous celebration. Let us come together to spread love, share happiness, and make this Christmas truly memorable!"
              </p>
            </div>
          </motion.div>

          {/* Decorative Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="font-playfair text-3xl sm:text-4xl font-bold text-gradient-christmas">
              Celebrate • Rejoice • Unite
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

