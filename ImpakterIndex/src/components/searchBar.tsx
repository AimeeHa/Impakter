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
          className="relative w-[20rem] p-[1rem] border-solid border-[2px] border-blue-500
        border-r-0 rounded-l-button"
        >
          <label
            htmlFor="company"
            className={`absolute z-10 left-[12px] translate-y-[-50%] duration-200
              ${
                isFocused
                  ? 'top-0 text-[0.7rem] animate-labelSlide bg-gray-100 p-1'
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
          className="p-[1rem_2rem] bg-blue-600 rounded-r-button border-[2px]
        border-blue-600 text-white"
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
        border-l-[1px] border-r-0 border-blue-500 p-[1rem] ${
          showList ? 'border-b-[transparent]' : ''
        }`}
      onClick={() => setShowList(!showList)}
    >
      <label
        htmlFor={id}
        className={
          showList || chosenValue !== ''
            ? 'absolute z-10 left-[12px] translate-y-[-50%] duration-200 top-0 text-[0.7rem] animate-labelSlide bg-gray-100 p-1'
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
          className="absolute top-full right-0 h-[10rem] overflow-scroll w-full
        flex flex-col gap-2 mt-[1rem]"
        >
          {itemList.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:bg-gray-200 px-[1rem]"
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
