import video from "../assets/hero.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
            <video src={video} className="h-full w-full object-cover" muted autoPlay loop playsInline>

            </video>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
        <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full p-4 text-center text-8xl font-serif text-white relative text-[350px]"
  >
    Celestia
    {/* Animated line cutting the word */}
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute left-0 top-1/2 h-[3px] bg-white -translate-y-1/2"
    />
  </motion.h1>
  <p className="p-4 text-lg tracking-tighter text-white">Sri Lanka</p>
</div>


    </section>
  );
}

export default HeroSection;