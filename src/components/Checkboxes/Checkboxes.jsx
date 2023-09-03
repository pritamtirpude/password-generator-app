import iconCheck from "../../assets/icon-check.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnim } from "../../utils/animation";

const Checkboxes = ({
  uppercaseCheck,
  setUppercaseCheck,
  lowercaseCheck,
  setLowercaseCheck,
  numbersCheck,
  setNumbersCheck,
  symbolsCheck,
  setSymbolsCheck,
}) => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <div className="mt-8">
      <div className="flex items-center gap-6">
        <div
          className={`w-5 h-5 border-2 border-customWhite relative cursor-pointer ${
            uppercaseCheck && "bg-customNeonGreen border-0 border-transparent"
          } hover:border-customNeonGreen`}
          onClick={() => setUppercaseCheck((prevState) => !prevState)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {uppercaseCheck && (
              <motion.div
                key="uppercase"
                variants={fadeAnim}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute w-full h-full flex justify-center items-center"
              >
                <img src={iconCheck} alt="check" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <h4 className={`text-customWhite ${matches ? "text-base" : "text-lg"}`}>
          Include Uppercase Letters
        </h4>
      </div>

      <div className="flex items-center gap-6 mt-5">
        <div
          className={`w-5 h-5 border-2 border-customWhite relative cursor-pointer ${
            lowercaseCheck && "bg-customNeonGreen border-0 border-transparent"
          } hover:border-customNeonGreen`}
          onClick={() => setLowercaseCheck((prevState) => !prevState)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {lowercaseCheck && (
              <motion.div
                key="lowercase"
                variants={fadeAnim}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute w-full h-full flex justify-center items-center"
              >
                <img src={iconCheck} alt="check" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <h4 className={`text-customWhite ${matches ? "text-base" : "text-lg"}`}>
          Include Lowercase Letters
        </h4>
      </div>

      <div className="flex items-center gap-6 mt-5">
        <div
          className={`w-5 h-5 border-2 border-customWhite relative cursor-pointer ${
            numbersCheck && "bg-customNeonGreen border-0 border-transparent"
          } hover:border-customNeonGreen`}
          onClick={() => setNumbersCheck((prevState) => !prevState)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {numbersCheck && (
              <motion.div
                key="numbers"
                variants={fadeAnim}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute w-full h-full flex justify-center items-center"
              >
                <img src={iconCheck} alt="check" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <h4 className={`text-customWhite ${matches ? "text-base" : "text-lg"}`}>
          Include Numbers
        </h4>
      </div>

      <div className="flex items-center gap-6 mt-5">
        <div
          className={`w-5 h-5 border-2 border-customWhite relative cursor-pointer ${
            symbolsCheck && "bg-customNeonGreen border-0 border-transparent"
          } hover:border-customNeonGreen`}
          onClick={() => setSymbolsCheck((prevState) => !prevState)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {symbolsCheck && (
              <motion.div
                key="symbol"
                className="absolute w-full h-full flex justify-center items-center"
              >
                <img src={iconCheck} alt="check" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <h4 className={`text-customWhite ${matches ? "text-base" : "text-lg"}`}>
          Include Symbols
        </h4>
      </div>
    </div>
  );
};

export default Checkboxes;
