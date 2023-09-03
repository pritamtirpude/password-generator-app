import { Files } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";
import { fadeAnim } from "../../utils/animation";

const PasswordText = ({
  genratedPassword,
  isCopied,
  handleCopyToClipboard,
}) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <div
      className={`bg-customDarkGray flex justify-between  items-center ${
        matches ? "py-4 px-4" : "py-5 px-8"
      }`}
    >
      <h1
        className={`text-customWhite w-96 truncate ${
          matches ? "text-2xl" : "text-[32px]"
        } font-bold ${!genratedPassword && "opacity-20"}`}
      >
        {genratedPassword || "P4$5W0rD!"}
      </h1>
      <div
        className={` ${
          isCopied ? "text-customNeonGreen" : "text-customWhite "
        } cursor-pointer flex items-center gap-4`}
        onClick={handleCopyToClipboard}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isCopied && (
            <motion.span
              variants={fadeAnim}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-customNeonGreen text-lg uppercase"
            >
              COPIED
            </motion.span>
          )}
        </AnimatePresence>

        <Files />
      </div>
    </div>
  );
};

export default PasswordText;
