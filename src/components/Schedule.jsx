import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Schedule() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const date = new Date();
    const checkTime = date.getHours();

    const checkSchedule = () => {
      if (
        (checkTime >= 7 && checkTime < 12) ||
        (checkTime >= 13 && checkTime < 18)
      ) {
        return "open";
      } else if (checkTime >= 12 && checkTime < 13) {
        return "lunch";
      } else {
        return "closed";
      }
    };

    setTime(checkSchedule());
  }, []); // El array vacío asegura que esto se ejecute una vez al cargar el componente

  const renderMessage = () => {
    switch (time) {
      case "open":
        return "Open😊";
      case "lunch":
        return " having lunch🍉, back soon!";
      case "closed":
        return "Closed😴";
      default:
        return "";
    }
  };

  return (
    <div className="schedule-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1  }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        key={time} // Asegura que la animación se ejecute al cambiar el estado
      >
        <motion.p>
          We're currently {renderMessage()}
        </motion.p>
      </motion.div>
    </div>
  );
}