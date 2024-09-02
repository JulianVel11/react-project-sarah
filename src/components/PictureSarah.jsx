import { motion } from "framer-motion";

export default function PictureSarah() {
  return (
    <motion.div
      className="coach-picture"
      whileHover={{
        rotate: -360,
        transition: { duration: 1 },
        scale: 0.5
      }}
    />
  );
}
