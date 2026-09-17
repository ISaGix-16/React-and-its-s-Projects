import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`
        bg-white
        p-4
        rounded-xl
        text-sm
        flex
        gap-4
        border
        border-gray-200
        shadow-sm
        transition-all
        duration-200
        focus-within:border-blue-400
        focus-within:shadow-md
        ${className}
      `}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="
            text-gray-500
            mb-2
            inline-block
            text-xs
            font-semibold
            uppercase
            tracking-wide
          ">
          {label}
        </label>

        <input
          id={amountInputId}
          className="
            outline-none
            w-full
            bg-transparent
            py-2
            text-xl
            font-semibold
            text-gray-800
            placeholder:text-gray-300
            disabled:cursor-not-allowed
            disabled:text-gray-400
          "
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div
        className="
          w-1/2
          flex
          flex-wrap
          justify-end
          text-right
          border-l
          border-gray-200
          pl-4
        ">
        <p
          className="
            text-gray-500
            mb-2
            w-full
            text-xs
            font-semibold
            uppercase
            tracking-wide
          ">
          Currency Type
        </p>

        <select
          className="
            rounded-lg
            px-3
            py-2
            bg-gray-100
            text-gray-800
            font-semibold
            uppercase
            cursor-pointer
            outline-none
            border
            border-gray-200
            hover:bg-gray-200
            focus:border-blue-400
            focus:ring-2
            focus:ring-blue-100
            transition-all
            duration-200
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
