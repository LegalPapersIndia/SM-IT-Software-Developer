// import { motion } from "framer-motion";
// import { Quote } from "lucide-react";

// // PLACEHOLDER — replace with real director photo once provided
// import directorImg from "../assets/director.jpeg";

// const DirectorMessage = () => {
//   return (
//     <section className="py-16 md:py-24 bg-gray-900 text-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-center">
//         {/* Photo */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="md:col-span-2 relative"
//         >
//           <div className="relative rounded-3xl overflow-hidden border border-white/10">
//             <img
//               src={directorImg}
//               alt="Santosh Marne — Director"
//               className="w-full h-[320px] sm:h-[380px] md:h-[420px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
//           </div>
//           <div className="hidden md:block absolute -bottom-5 -right-5 w-28 h-28 border-2 border-blue-500/40 rounded-3xl -z-10"></div>
//         </motion.div>

//         {/* Message */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="md:col-span-3"
//         >
//           <h4 className="text-blue-400 uppercase tracking-[0.4em] font-bold text-sm mb-4">
//             From the Director's Desk
//           </h4>

//           <Quote className="text-white/10 mb-4" size={44} />

//           <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
//             "Our commitment has always been simple — deliver technology
//             solutions that actually work for the business behind them.
//             Every project we take on carries that same standard."
//           </p>

//           <div>
//             <p className="text-white font-bold text-lg">Santosh Marne</p>
//             <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-[0.2em] mt-1">
//               Director, SM IT Software and Solutions
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default DirectorMessage;





import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// PLACEHOLDER — replace with real director photo once provided
import directorImg from "../assets/director.jpeg";

const DirectorMessage = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <img
              src={directorImg}
              alt="Santosh Marne — Director"
              className="w-full h-[320px] sm:h-[380px] md:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
          </div>
          <div className="hidden md:block absolute -bottom-5 -right-5 w-28 h-28 border-2 border-blue-500/40 rounded-3xl -z-10"></div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3"
        >
          <h4 className="text-blue-400 uppercase tracking-[0.4em] font-bold text-sm mb-4">
            From the Director's Desk
          </h4>

          <Quote className="text-white/10 mb-4" size={44} />

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
            "Our commitment has always been simple — deliver technology
            solutions that actually work for the business behind them.
            Every project we take on carries that same standard."
          </p>

          <div>
            <p className="text-white font-bold text-lg">Santosh Marne</p>
            <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-[0.2em] mt-1">
              Director, SM IT Software and Solutions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DirectorMessage;