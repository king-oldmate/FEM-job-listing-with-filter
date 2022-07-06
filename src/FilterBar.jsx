import React from "react";
import iconRemove from "./images/icon-remove.svg";

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className='flex flex-wrap p-5 mx-5 -translate-y-8 bg-white rounded-md font-spartan'>
      {filter.map((tag, index) => {
        return (
          <span
            key={index}
            className='pl-2 overflow-hidden font-extrabold rounded-md bg-Light-Grayish-Cyan text-desat-dark-cyan'
          >
            {tag}{" "}
            <button
              onClick={() =>
                setFilter(filter.filter((element) => element !== tag))
              }
              className='p-2 ml-2 bg-desat-dark-cyan hover:bg-[#2c3a3a]'
            >
              <img src={iconRemove} alt='remove' />
            </button>
          </span>
        );
      })}
      <button
        onClick={() => setFilter([])}
        className='ml-auto font-extrabold justify-self-end text-Dark-Grayish-Cyan hover:text-desat-dark-cyan hover:underline'
      >
        Clear
      </button>
    </div>
  );
};

export default FilterBar;
