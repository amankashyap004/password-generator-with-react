import React from "react";
import Btn from "../components/Btn";

const Home = () => {
   return (
      <main className="flex justify-center items-center text-white py-6 px-12 rounded-lg bg-slate-700 w-[60%]">
         <section className="flex justify-between items-center w-full">
            <h1>password</h1>
            <Btn value="copy" />
         </section>
      </main>
   );
};

export default Home;
