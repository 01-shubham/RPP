/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbersAllowed) str += "0123456789";
    if(charAllowed) str += "~!@#$%^&*:"

    for (let i = 1; i <= length ; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbersAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,12)
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  },[length, numbersAllowed, charAllowed, setPassword]);


  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-600">
        <p className="my-2 text-center text-white font-bold mb-6">
          Password Generator
        </p>

        <div className="flex items-center">
          <input
            className="outline-none flex-grow py-1 px-3 rounded-lg"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button
          onClick={copyPasswordToClipboard}
           className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-2">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input className="cursor-pointer"
            type="range" 
            min={8}
            max={50}
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input className="cursor-pointer"
            type="checkbox" 
            defaultChecked = {numbersAllowed}
            id="numberInput"
            onChange={() => {
                setNumbersAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="">Numbers</label>
          </div>
        </div>
      
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input className="cursor-pointer"
            type="checkbox" 
            defaultChecked = {charAllowed}
            id="charInput"
            onChange={() => {
                setCharAllowed((prev) => !prev)
            }}
            />
            <label>Characters</label>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PasswordGenerator;
