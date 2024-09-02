import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { motion } from "framer-motion"


export default function Illumination({ mode, changeMode }) {
  return (
    <div className="illumination-mode">
      <motion.span
       onClick={changeMode}
       whileHover={{ scale: 1.2 }}
       >
        {mode 
        ? 
        <DarkModeIcon /> 
        : 
        <LightModeIcon />}
      </motion.span>
    </div>
  );
}
