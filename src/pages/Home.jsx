import React, { useState } from "react";
import Btn from "../components/Btn";
import Checkbox from "../components/Checkbox";
import PasswordStrengthIndicator from "../components/PasswordStrengthIndicator";

const Home = () => {
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

   return (
      <main className="flex justify-center items-center flex-col text-white text-xl font-extrabold py-6 px-12 rounded-lg bg-slate-700 w-1/2">
         <section className="flex justify-between items-center w-full my-2">
            <h1>password</h1>
            <Btn value="copy" />
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
               <span>Strength</span>
               <PasswordStrengthIndicator password="password" />
            </div>
         </section>
      </main>
   );
};

export default Home;
