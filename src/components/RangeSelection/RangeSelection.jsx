import { useMediaQuery } from "../../hooks/useMediaQuery";

const RangeSelection = ({
  passwordLength,
  rangeRef,
  trackStyle,
  handleInputRange,
}) => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1
          className={`font-bold ${
            matches ? "text-base" : "text-lg"
          } text-customWhite`}
        >
          Character Length
        </h1>
        <h2
          className={`${
            matches ? "text-2xl" : "text-[32px]"
          } text-customNeonGreen font-bold`}
        >
          {passwordLength}
        </h2>
      </div>
      <div className="w-full h-2 relative mt-4">
        <input
          ref={rangeRef}
          style={trackStyle}
          type="range"
          name="passwordlength"
          value={passwordLength}
          min={0}
          max={20}
          className="transition-all"
          onChange={handleInputRange}
        />
      </div>
    </div>
  );
};

export default RangeSelection;
