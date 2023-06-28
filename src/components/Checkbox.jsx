const Checkbox = ({ title, state, onChange }) => {
   return (
      <div className="flex justify-start items-center">
         <input
            type="checkbox"
            className="w-4 h-4 cursor-pointer sm:w-[14px] sm:h-[14px]"
            onChange={onChange}
            checked={state}
         />
         <label className="ml-2 sm:ml-1 sm:text-lg">{title}</label>
      </div>
   );
};

export default Checkbox;
