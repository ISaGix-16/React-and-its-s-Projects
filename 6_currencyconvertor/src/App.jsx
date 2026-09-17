import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="
        w-full
        min-h-screen
        flex
        flex-wrap
        justify-center
        items-center
        bg-cover
        bg-center
        bg-no-repeat
        px-4
        py-8
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1920&q=80')",
      }}>
      <div className="w-full">
        <div
          className="
            w-full
            max-w-md
            mx-auto
            rounded-2xl
            p-5
            sm:p-6
            bg-gray-900/90
            border
            border-gray-700
            shadow-2xl
            backdrop-blur-md
          ">
          <div className="text-center mb-6">
            <h1
              className="
                text-3xl
                sm:text-4xl
                font-bold
                text-white
                tracking-tight
              ">
              Currency Converter
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Convert currencies quickly and easily
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="relative w-full h-6">
              <button
                type="button"
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  z-10
                  border-4
                  border-gray-900
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-500
                  text-white
                  px-4
                  py-1.5
                  text-sm
                  font-semibold
                  shadow-lg
                  shadow-blue-900/30
                  transition-all
                  duration-200
                  hover:scale-105
                  active:scale-95
                "
                onClick={swap}>
                ⇅ Swap
              </button>
            </div>

            <div className="w-full mt-1 mb-5">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                bg-blue-600
                hover:bg-blue-500
                text-white
                px-4
                py-3
                rounded-xl
                font-semibold
                text-base
                shadow-lg
                shadow-blue-900/30
                transition-all
                duration-200
                hover:-translate-y-0.5
                active:translate-y-0
                active:scale-[0.98]
              ">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
