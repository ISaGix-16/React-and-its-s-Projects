import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}

      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <aside className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-950">
          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-12 sm:px-10 sm:py-20 lg:px-12">
            <div className="max-w-xl space-y-7 text-center sm:text-left">
              <div>
                <span
                  className="
                    inline-block
                    rounded-full
                    border
                    border-orange-500/30
                    bg-orange-500/10
                    px-4
                    py-1.5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-orange-500
                  ">
                  Welcome
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Download
                <span className="block text-orange-500">Now</span>
              </h2>

              <p className="max-w-md text-base leading-7 text-gray-400 sm:text-lg">
                Experience a simple, modern and powerful application designed to
                make your work easier.
              </p>

              <Link
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-orange-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-orange-900/30
                  transition-all
                  duration-200
                  hover:bg-orange-500
                  hover:-translate-y-0.5
                  active:translate-y-0
                  active:scale-95
                "
                to="/">
                <svg
                  fill="white"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 24 24">
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                Download now
              </Link>
            </div>
          </div>

          {/* Hero Image */}

          <div className="absolute bottom-0 right-0 hidden w-2/5 justify-end md:flex">
            <img
              src="https://images.unsplash.com/photo-1598688130667-aff9bba00312?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"
              alt="Laptop and city at night"
              className="..."
            />
          </div>
        </aside>

        {/* Second Image */}

        <div className="mt-12 grid place-items-center sm:mt-20">
          <img
            src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800"
            alt="Earth at night from space"
            className="..."
          />
        </div>

        {/* Heading */}

        <div className="py-10 text-center sm:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
            Simple. Modern. Powerful.
          </p>

          <h1 className="text-3xl font-bold text-white sm:text-5xl">
            Lorem Ipsum Yojo
          </h1>
        </div>
      </div>
    </div>
  );
}
