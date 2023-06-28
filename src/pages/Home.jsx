import React, { useState } from "react";
import Btn from "../components/Btn";
import Checkbox from "../components/Checkbox";
import PasswordStrengthIndicator from "../components/PasswordStrengthIndicator";
import usePasswordGenerator from "../hooks/usePasswordGenerator";

const Home = () => {
   const [copied, setCopied] = useState(false);
   const handleCopy = () => {
      navigator.clipboard.writeText(password);
      setCopied(true);

      setTimeout(() => {
         setCopied(false);
      }, 1000);
   };

   const [length, setLength] = useState(4);
   const [checkboxData, setCheckboxData] = useState([
      { title: "Include Uppercase Letters", state: false },
      { title: "Include Lowercase Letters", state: false },
      { title: "Include Numbers", state: false },
      { title: "Include Symbols", state: false },
   ]);

   const handleCheckboxChange = (i) => {
      const updatedCheckboxData = [...checkboxData];
      updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
      setCheckboxData(updatedCheckboxData);
   };

   const { password, errorMessage, generatePassword } = usePasswordGenerator();

   return (
      <main className="flex justify-center items-center flex-col text-white text-xl font-extrabold py-6 px-12 rounded-lg bg-slate-700 w-[45%]">
         <section className="flex justify-between items-center w-full my-2">
            <span>{password}</span>
            <div onClick={handleCopy}>
               <Btn value={copied ? "Copied" : "copy"} />
            </div>
         </section>
         <section className="flex justify-between items-center flex-col my-2 w-full">
            <div className="flex justify-between items-center w-full my-2">
               <span>Character Length</span>
               <span>{length}</span>
            </div>
            <div className="my-2 w-full">
               <input
                  type="range"
                  min="4"
                  max="20"
                  className="w-full cursor-pointer"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
               />
            </div>
         </section>
         <section className="grid grid-cols-2 my-2 w-full">
            {checkboxData.map((checkbox, index) => {
               return (
                  <Checkbox
                     key={index}
                     title={checkbox.title}
                     onChange={() => handleCheckboxChange(index)}
                     state={checkbox.state}
                  />
               );
            })}
         </section>
         <section className="flex justify-between items-center flex-col my-2 w-full">
            <div className="flex justify-between items-center w-full my-2">
               <span>Strength:</span>
               <PasswordStrengthIndicator password={password} />
            </div>
         </section>
         <section className="relative my-2 w-full flex justify-center items-center">
            {errorMessage && <div className="text-red-500 absolute">{errorMessage}</div>}
         </section>
         <section className="mb-2 mt-6" onClick={() => generatePassword(checkboxData, length)}>
            <Btn value="Generate Password" />
         </section>
      </main>
   );
};

export default Home;
