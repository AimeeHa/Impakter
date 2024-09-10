import { useState } from 'react';
import countries from '../statics/countries';
import industries from '../statics/industries';

export default function SearchBar() {
  const ratings = [
    'A - Excellent',
    'B - Good',
    'C - Satisfactory',
    'D - Poor',
    'F - Fail',
  ];
  const [isFocused, setIsFocused] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [chosenCountry, setChosenCountry] = useState('');
  const [chosenIndustry, setChosenIndustry] = useState('');
  const [chosenRating, setChosenRating] = useState('');

  return (
    <>
      <form className="flex w-full justify-center items-center">
        <div
          className="relative w-[20rem] p-[1rem] border-solid border-[2px] border-orangeBrown
        border-r-0 rounded-l-button bg-white"
        >
          <label
            htmlFor="company"
            className={`absolute z-10 left-[12px] translate-y-[-50%] duration-200
              ${
                isFocused
                  ? '-top-0.5 text-[0.7rem] animate-labelSlide bg-[linear-gradient(180deg,_transparent_50%,_white_50%)] p-1'
                  : 'top-[50%] animate-reverse-labelSlide'
              }`}
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            className="flex flex-col items-start bg-inherit w-full focus:outline-none"
            onFocus={(e) => {
              e.preventDefault();
              setIsFocused(true);
            }}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <CustomSelect
          id="country"
          placeholder="Countries"
          itemList={countries}
          chosenValue={chosenCountry}
          setChosenValue={setChosenCountry}
        />

        <CustomSelect
          id="industry"
          placeholder="Industries"
          itemList={industries}
          chosenValue={chosenIndustry}
          setChosenValue={setChosenIndustry}
        />

        <CustomSelect
          id="rating"
          placeholder="Ratings"
          itemList={ratings}
          chosenValue={chosenRating}
          setChosenValue={setChosenRating}
        />

        <button
          className="p-[1rem_2rem] bg-orangeBrown rounded-r-button border-[2px]
        border-orangeBrown text-white hover:shadow-[0px_0px_6px_0px_#8f5147]
        transition duration-200 ease-in-out delay-75"
          onClick={(e) => {
            e.preventDefault();
            console.log(
              companyName,
              chosenCountry,
              chosenIndustry,
              chosenRating,
            );
          }}
        >
          Search
        </button>
      </form>
    </>
  );
}

interface CustomSelectProps {
  id: string;
  placeholder: string;
  itemList: string[];
  chosenValue: string;
  setChosenValue: (value: string) => void;
}

export function CustomSelect({
  id,
  itemList,
  placeholder,
  chosenValue,
  setChosenValue,
}: CustomSelectProps) {
  const [showList, setShowList] = useState(false);

  return (
    <div
      id={id}
      className={`appearance-none cursor-pointer relative w-[16rem] border-[2px]
        border-l-[1px] border-r-0 border-orangeBrown p-[1rem] bg-white ${
          showList ? 'border-b-[transparent]' : ''
        }`}
      onClick={() => setShowList(!showList)}
    >
      <label
        htmlFor={id}
        className={
          showList || chosenValue !== ''
            ? 'absolute z-10 left-[10px] translate-y-[-50%] duration-200 -top-0.5 text-[0.7rem] animate-labelSlide bg-[linear-gradient(180deg,_transparent_50%,_white_50%)] p-1'
            : 'absolute top-[50%] animate-reverse-labelSlide duration-200 -z-20 right-[50%] text-transparent'
        }
      >
        {placeholder}
      </label>

      <select
        value={chosenValue}
        className="appearance-none bg-inherit focus:outline-none"
      >
        <option value="" disabled hidden>
          {chosenValue || placeholder}
        </option>
      </select>
      {showList && (
        <ul
          className="absolute top-full right-0 h-[15rem] overflow-scroll w-full
        flex flex-col bg-white border-solid border-[1px] border-orangeBrown"
        >
          {itemList.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:bg-lightOrange p-[1rem] border-t-[1px]
              border-orangeBrown transition duration-200 ease-in-out delay-75"
              onClick={(e) => {
                e.preventDefault();
                setChosenValue(item);
                setShowList(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
