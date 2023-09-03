import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

const GenerateButton = ({ handleGeneratedPassword }) => {
  return (
    <div className="mt-8 group">
      <motion.button
        whileTap={{ scale: 0.8 }}
        type="button"
        className="w-full h-auto border-transparent border-2 transition-all flex justify-center items-center gap-6 py-5 text-lg bg-customNeonGreen font-bold text-customDarkGray uppercase hover:border-customNeonGreen hover:bg-transparent hover:border-2 hover:text-customNeonGreen"
        onClick={handleGeneratedPassword}
      >
        Generate
        <span>
          <ArrowRightIcon
            size={20}
            className="text-customDarkGray group-hover:text-customNeonGreen"
          />
        </span>
      </motion.button>
    </div>
  );
};

export default GenerateButton;
