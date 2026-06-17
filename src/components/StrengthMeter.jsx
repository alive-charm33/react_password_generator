const StrengthMeter = ({ length }) => {
  const getStrength = () => {
    if (length < 8) return "Weak";
    if (length < 12) return "Medium";
    return "Strong";
  };

  return (
    <div className="strength">
      Strength:
      <span className={getStrength().toLowerCase()}>
        {" "}
        {getStrength()}
      </span>
    </div>
  );
};

export default StrengthMeter;