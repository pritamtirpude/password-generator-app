import { useMediaQuery } from "../../hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnim } from "../../utils/animation";

const StrengthMeter = ({ passwordStrength }) => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className={`mt-8 flex justify-between items-center ${
        matches ? "px-4 py-4" : "py-6 px-8"
      } bg-customVeryDarkGray`}
    >
      <h4
        className={`uppercase text-customGray ${
          matches ? "text-base" : "text-lg"
        } `}
      >
        Strength
      </h4>
      <div className="flex items-center gap-4">
        <AnimatePresence mode="wait" initial={false}>
          {passwordStrength && (
            <motion.h4
              key={passwordStrength}
              variants={fadeAnim}
              initial="hidden"
              animate="show"
              exit="exit"
              className={`uppercase text-customWhite ${
                matches ? "text-lg" : "text-2xl"
              } font-bold`}
            >
              {passwordStrength}
            </motion.h4>
          )}
        </AnimatePresence>
        <div className="flex items-center gap-2">
          <div
            className={`w-[10px] h-7 border-2 border-customWhite transition-all ${
              passwordStrength === "too weak!"
                ? "bg-customRed"
                : passwordStrength === "weak"
                ? "bg-customOrange"
                : passwordStrength === "medium"
                ? "bg-customYellow"
                : passwordStrength === "strong"
                ? "bg-customNeonGreen"
                : ""
            }`}
          ></div>
          <div
            className={`w-[10px] h-7 border-2 border-customWhite transition-all ${
              passwordStrength === "weak"
                ? "bg-customOrange"
                : passwordStrength === "medium"
                ? "bg-customYellow"
                : passwordStrength === "strong"
                ? "bg-customNeonGreen"
                : ""
            }`}
          ></div>
          <div
            className={`w-[10px] h-7 border-2 border-customWhite transition-all ${
              passwordStrength === "medium"
                ? "bg-customYellow"
                : passwordStrength === "strong"
                ? "bg-customNeonGreen"
                : ""
            }`}
          ></div>
          <div
            className={`w-[10px] h-7 border-2 border-customWhite transition-all ${
              passwordStrength === "strong" ? "bg-customNeonGreen" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StrengthMeter;
