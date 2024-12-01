import React, { useEffect, useState } from "react";
import { backend } from "../axios";

function Home() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("UZS");
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  function resetForm() {
    setFrom("USD");
    setTo("UZS");
    setInputValue(0);
    setResult(0);
  }

  async function convert() {
    if (!inputValue || inputValue <= 0) {
      alert("Iltimos, 0 dan katta qiymat kiriting!");
      return;
    }
    if (from === to) {
      alert("'Dan' va 'Ga' bir xil bo'lishi mumkin emas!");
      return;
    }
    try {
      const response = await backend.get(
        `fetch-one?from=${from}&to=${to}&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      if (response.status === 200) {
        const conversionRate = response.data.result[to];
        setResult(inputValue * conversionRate);
      }
    } catch (error) {
      console.error(error);
      alert("Valyuta kursini olishda xatolik yuz berdi!");
    }
  }

  return (
    <>
      <form className="p-5 h-full bg-blue-50 flex flex-col items-center gap-8">
        <h1 className="text-sky-900 text-2xl font-semibold mb-1">
          Bu valute xisoblagich
        </h1>
        <div className="flex flex-col gap-2 items-center">
          <label className="font-medium text-sky-950" htmlFor="input">
            Qiymat kiriting:
          </label>
          <input
            type="number"
            className="input px-4 py-2 outline-none rounded-xl"
            min={0}
            id="input"
            autoFocus
            value={inputValue}
            placeholder="Qiymat kiriting:"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center justify-between gap-14">
          <div className="flex flex-col gap-2">
            <label htmlFor="from" className="font-medium text-sky-950">
              Dan
            </label>
            <select
              className="rounded-lg px-2 py-1"
              name=""
              value={from}
              id="from"
              onChange={(e) => {
                e.preventDefault();
                setFrom(e.target.value);
              }}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="UZS">UZS</option>
              <option value="RUB">RUB</option>
              <option value="KZT">KZT</option>
              <option value="CNY">CNY</option>
            </select>
          </div>
          <div className="flex flex-col  gap-2">
            <label htmlFor="to" className="font-medium text-sky-950">
              Ga
            </label>
            <select
              name=""
              className="rounded-lg px-2 py-1"
              id="to"
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
              }}>
              <option value="UZS">UZS</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="RUB">RUB</option>
              <option value="KZT">KZT</option>
              <option value="CNY">CNY</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <button
            className="btn bg-white px-4 py-2 rounded"
            onClick={(e) => {
              e.preventDefault();
              convert();
            }}>
            Davam etish
          </button>

          <button
            className="btn bg-red-500 text-white px-4 py-2 rounded"
            onClick={(e) => {
              e.preventDefault();
              resetForm();
            }}>
            Reset
          </button>
        </div>
        <h2>
          {result
            ? `Natija: ${inputValue} ${from} = ${result.toFixed(2)} ${to}`
            : ""}
        </h2>
      </form>
    </>
  );
}

export default Home;
