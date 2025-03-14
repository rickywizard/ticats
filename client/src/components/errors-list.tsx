import { ErrorsData } from '@/interfaces/errors';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';

export default function ErrorsList({ errors }: { errors: ErrorsData[] }) {
  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 flex flex-col gap-2">
      <AnimatePresence>
        {errors.length > 0 &&
          errors.map((err, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <div
                role="alert"
                className="w-96 rounded-sm border-s-4 border-red-500 bg-red-50 p-4 shadow-md"
              >
                <p className="text-sm text-red-700">{err.message}</p>
              </div>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}
