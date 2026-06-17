import { useState } from "react";
import StrengthMeter from "./StrengthMeter";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNumbers) {
      chars += "0123456789";
    }

    if (includeSymbols) {
      chars += "!@#$%^&*()_+{}[]<>?";
    }

    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * chars.length
      );

      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  };

  return (
    <div className="card">
      <h1>Password Generator</h1>

      <div className="password-box">
        <input
          type="text"
          value={password}
          placeholder="Generated Password"
          readOnly
        />

        <button onClick={copyPassword}>
          📋 Copy
        </button>
      </div>

      <div className="setting">
        <label>
          Password Length: {length}
        </label>

        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) =>
            setLength(Number(e.target.value))
          }
        />
      </div>

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() =>
              setIncludeNumbers(!includeNumbers)
            }
          />
          Include Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() =>
              setIncludeSymbols(!includeSymbols)
            }
          />
          Include Symbols
        </label>
      </div>

      <button
        className="generate-btn"
        onClick={generatePassword}
      >
        Generate Password
      </button>

      <StrengthMeter length={length} />
    </div>
  );
};

export default PasswordGenerator;