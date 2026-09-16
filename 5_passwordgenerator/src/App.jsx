import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*()-_+=[]{}";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 30);

    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenrator();
  }, [length, numberAllowed, charAllowed, passwordGenrator]);

  return (
    <>
      <div
        className="
          w-full max-w-md mx-auto
          px-5 py-6 my-8
          text-orange-400
          bg-gray-900
          border border-gray-700
          rounded-2xl
          shadow-2xl
        ">
        <h1
          className="
            text-amber-100
            text-center
            my-3
            text-2xl
            font-bold
            tracking-wide
          ">
          Password Generator
        </h1>

        <div
          className="
            flex
            shadow-lg
            rounded-lg
            overflow-hidden
            mb-5
            border border-gray-700
            bg-gray-800
          ">
          <input
            type="text"
            value={password}
            className="
              outline-none
              w-full
              min-w-0
              py-3
              px-4
              bg-gray-100
              text-gray-900
              font-mono
              text-sm
            "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
            className="
              outline-none
              bg-blue-500
              text-white
              px-5
              py-0.5
              shrink-0
              font-semibold
              transition-all
              duration-200
              hover:bg-blue-400
              active:scale-95
            "
            onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>

        <div
          className="
            text-sm
            bg-gray-800
            border border-gray-700
            rounded-xl
            p-5
            space-y-5
          ">
          {/* Length */}

          <div className="w-full">
            <div className="flex items-center justify-between mb-3">
              <label className="text-gray-300 font-medium">
                Password Length
              </label>

              <span
                className="
                  min-w-10
                  text-center
                  px-2
                  py-1
                  rounded-md
                  bg-gray-700
                  text-orange-400
                  font-bold
                ">
                {length}
              </span>
            </div>

            <input
              type="range"
              min={6}
              max={24}
              value={length}
              className="
                cursor-pointer
                w-full
                accent-orange-500
              "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>6</span>
              <span>24</span>
            </div>
          </div>

          {/* Options */}

          <div className="flex items-center gap-6 pt-2 border-t border-gray-700">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className="
                  w-4
                  h-4
                  cursor-pointer
                  accent-blue-500
                "
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />

              <label
                htmlFor="numberInput"
                className="
                  text-gray-300
                  cursor-pointer
                  hover:text-white
                  transition-colors
                  duration-200
                ">
                Numbers
              </label>
            </div>

            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                className="
                  w-4
                  h-4
                  cursor-pointer
                  accent-purple-500
                "
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />

              <label
                htmlFor="charInput"
                className="
                  text-gray-300
                  cursor-pointer
                  hover:text-white
                  transition-colors
                  duration-200
                ">
                Characters
              </label>
            </div>
          </div>

          {/* <div>
            <button 
            onClick={passwordGenrator}
            className="min-h-8 px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800"
            >Generate</button>
          </div>  */}
          {/* this is another method but we are learning hooks so we will not use this   */}
        </div>
      </div>
    </>
  );
}

export default App;
