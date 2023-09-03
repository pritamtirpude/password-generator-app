import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import {
  generateRandomPassword,
  validatePasswordStrength,
  copyToClipboard,
} from "../../utils";
import {
  PasswordText,
  RangeSelection,
  Checkboxes,
  StrengthMeter,
  GenerateButton,
} from "../../components";
import { entryAnim } from "../../utils/animation";

const PasswordCard = () => {
  const [uppercaseCheck, setUppercaseCheck] = useState(false);
  const [lowercaseCheck, setLowercaseCheck] = useState(false);
  const [numbersCheck, setNumbersCheck] = useState(false);
  const [symbolsCheck, setSymbolsCheck] = useState(false);

  const [passwordLength, setPasswordLength] = useState(10);
  const [genratedPassword, setGeneratedPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("weak");
  const [stylePercentage, setStylePercentage] = useState();
  const [isCopied, setIsCopied] = useState(false);

  const matches = useMediaQuery("(max-width: 768px)");

  const rangeRef = useRef();

  const handleGeneratedPassword = () => {
    const generatedPasswordString = generateRandomPassword(
      passwordLength,
      uppercaseCheck,
      lowercaseCheck,
      numbersCheck,
      symbolsCheck
    );

    setGeneratedPassword(generatedPasswordString);
    setIsCopied(false);
  };

  const handleInputRange = (e) => {
    const strengthString = validatePasswordStrength(e.target.value);

    setPasswordLength(e.target.value);
    setPasswordStrength(strengthString);
  };

  const handleCopyToClipboard = () => {
    if (genratedPassword) {
      setIsCopied((prevState) => !prevState);

      copyToClipboard(genratedPassword);
    }
  };

  const trackStyle = {
    backgroundSize: `${stylePercentage}% 100%`,
  };

  useEffect(() => {
    let min = rangeRef?.current?.min;
    let max = rangeRef?.current?.max;

    let percentage = ((passwordLength - min) * 100) / (max - min);

    setStylePercentage(percentage);
  }, [rangeRef, passwordLength]);

  return (
    <motion.div
      initial={entryAnim.hidden}
      animate={entryAnim.show}
      className={`w-[540px] ${matches && "w-[90%]"} h-auto`}
    >
      <div
        className={`flex justify-center items-center ${
          matches ? "mb-4" : "mb-8"
        }`}
      >
        <h1
          className={`text-customGray ${
            matches ? "text-base" : "text-2xl"
          }  font-bold`}
        >
          Password Generator
        </h1>
      </div>
      {/* Password Text */}
      <PasswordText
        genratedPassword={genratedPassword}
        isCopied={isCopied}
        handleCopyToClipboard={handleCopyToClipboard}
      />
      <div
        className={`bg-customDarkGray mt-6 ${
          matches ? "py-4 px-4" : "px-8 py-6"
        }`}
      >
        {/* Character length selection */}
        <RangeSelection
          passwordLength={passwordLength}
          rangeRef={rangeRef}
          trackStyle={trackStyle}
          handleInputRange={handleInputRange}
        />

        {/* Checkboxes */}
        <Checkboxes
          uppercaseCheck={uppercaseCheck}
          setUppercaseCheck={setUppercaseCheck}
          lowercaseCheck={lowercaseCheck}
          setLowercaseCheck={setLowercaseCheck}
          numbersCheck={numbersCheck}
          setNumbersCheck={setNumbersCheck}
          symbolsCheck={symbolsCheck}
          setSymbolsCheck={setSymbolsCheck}
        />

        {/* Strength Meter*/}
        <StrengthMeter passwordStrength={passwordStrength} />

        {/* Generate */}
        <GenerateButton handleGeneratedPassword={handleGeneratedPassword} />
      </div>
    </motion.div>
  );
};

export default PasswordCard;
