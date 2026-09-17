export default function Contact() {
  return (
    <div className="min-h-screen bg-black py-12 text-white sm:py-16 lg:py-24">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10 text-center">

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
            "
          >
            Contact
          </span>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Get in touch
          </h1>

          <p className="mt-2 text-gray-400">
            We'd love to hear from you.
          </p>

        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 shadow-2xl">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Contact Information */}

            <div className="border-b border-gray-800 bg-gray-900 p-6 sm:p-8 md:border-b-0 md:border-r lg:p-10">

              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Get in touch:
              </h1>

              <p className="mt-2 text-base text-gray-400 sm:text-lg">
                Fill in the form to start a conversation
              </p>

              {/* Address */}

              <div className="mt-10 flex items-start text-gray-400">

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 shrink-0 text-orange-500"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <div className="ml-4 text-sm font-medium leading-6 text-gray-400">
                  Acme Inc, Street, State, Postal Code
                </div>

              </div>

              {/* Phone */}

              <div className="mt-6 flex items-start text-gray-400">

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 shrink-0 text-orange-500"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>

                <div className="ml-4 text-sm font-medium text-gray-400">
                  +44 1234567890
                </div>

              </div>

              {/* Email */}

              <div className="mt-6 flex items-start text-gray-400">

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 shrink-0 text-orange-500"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <div className="ml-4 break-all text-sm font-medium text-gray-400">
                  info@acme.org
                </div>

              </div>

              <div className="mt-10 h-px w-full bg-gray-800" />

              <p className="mt-6 text-sm leading-6 text-gray-500">
                We usually respond as soon as possible. Feel free to reach out
                with any questions or feedback.
              </p>

            </div>

            {/* Form */}

            <form className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">

              <div className="flex flex-col">

                <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-700
                    bg-gray-900
                    px-4
                    py-3
                    text-gray-200
                    placeholder-gray-600
                    outline-none
                    transition-all
                    duration-200
                    focus:border-orange-500
                    focus:ring-2
                    focus:ring-orange-500/10
                  "
                />

              </div>

              <div className="mt-5 flex flex-col">

                <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-700
                    bg-gray-900
                    px-4
                    py-3
                    text-gray-200
                    placeholder-gray-600
                    outline-none
                    transition-all
                    duration-200
                    focus:border-orange-500
                    focus:ring-2
                    focus:ring-orange-500/10
                  "
                />

              </div>

              <div className="mt-5 flex flex-col">

                <label htmlFor="tel" className="mb-2 text-sm font-medium text-gray-300">
                  Number
                </label>

                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-700
                    bg-gray-900
                    px-4
                    py-3
                    text-gray-200
                    placeholder-gray-600
                    outline-none
                    transition-all
                    duration-200
                    focus:border-orange-500
                    focus:ring-2
                    focus:ring-orange-500/10
                  "
                />

              </div>

              <button
                type="submit"
                className="
                  mt-6
                  w-full
                  rounded-lg
                  bg-orange-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-orange-900/20
                  transition-all
                  duration-200
                  hover:bg-orange-500
                  hover:-translate-y-0.5
                  active:translate-y-0
                  active:scale-[0.98]
                  sm:w-36
                "
              >
                Submit
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}