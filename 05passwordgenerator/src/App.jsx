import "./App.css";
import { useCallback, useState, useEffect, useRef } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChar = "!@#$%^&*()_+";
    let password = "";
    let charSet = char;
    if (numbersAllowed) {
      charSet += numbers;
    }
    if (charAllowed) {
      charSet += specialChar;
    }
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charSet.length - 1);
      password += charSet.charAt(randomIndex);
    }
    setPassword(password);
  }, [length, numbersAllowed, charAllowed]);

  const copyPasswordToChlipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, charAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md border border-2-red rounded-lg px-4 py-8 bg-gray-800  text-blue-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden">
        <input
          type="text"
          value={password}
          className="outline-none  w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToChlipboard}
          className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length"> Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            onChange={(e) => setNumbersAllowed((prev) => !prev)}
            name=""
            id=""
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={(e) => setCharAllowed((prev) => !prev)}
            name=""
            id=""
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
