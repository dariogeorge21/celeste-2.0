'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Competition {
  title: string;
  icon: string;
  rules: string[];
}

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  competition: Competition | null;
}

export default function RulesModal({ isOpen, onClose, competition }: RulesModalProps) {
  if (!competition) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                {/* Header */}
                <div className="bg-gradient-to-r from-christmas-red to-christmas-green p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-4xl">{competition.icon}</span>
                      <Dialog.Title
                        as="h3"
                        className="font-playfair text-2xl font-bold"
                      >
                        {competition.title}
                      </Dialog.Title>
                    </div>
                    <button
                      onClick={onClose}
                      className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                      aria-label="Close modal"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                  </div>
                  <p className="mt-2 text-white/90">Competition Rules & Guidelines</p>
                </div>

                {/* Rules Content */}
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                  <div className="space-y-3">
                    {competition.rules.map((rule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="flex items-start space-x-3 group"
                      >
                        <FaCheckCircle className="text-christmas-green text-lg mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                        <p className="text-gray-700 leading-relaxed">{rule}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Important Note */}
                  <div className="mt-6 p-4 bg-christmas-gold/10 border-l-4 border-christmas-gold rounded-r-lg">
                    <p className="text-sm font-semibold text-gray-800">
                      ⚠️ Important: Please read all rules carefully before registering. Non-compliance may result in disqualification.
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    Close
                  </button>
                  <a
                    href={`#competitions`}
                    onClick={onClose}
                    className="px-6 py-2 text-sm font-semibold text-white bg-christmas-red rounded-lg hover:bg-christmas-darkRed transition-colors duration-200"
                  >
                    Register Now
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

