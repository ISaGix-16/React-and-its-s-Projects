export default function Card() {
  return (
    <div className="w-full overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-xl dark:bg-zinc-900 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Image */}
      <a href="/" className="block overflow-hidden">
        <img
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
          src="https://images.unsplash.com/photo-1664204924910-36e0c2bb5c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Qk1XJTIwTTR8ZW58MHx8MHx8fDA%3D"
          alt="BMW M4"
        />
      </a>

      {/* Card Content */}
      <div className="px-6 py-5">
        {/* Title */}
        <a href="/">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            BMW M4, The Beauty
          </h5>
        </a>

        {/* Rating */}
        <div className="flex items-center mt-3 mb-5">
          <svg
            className="w-4 h-4 text-yellow-400 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <svg
            className="w-4 h-4 text-yellow-400 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <svg
            className="w-4 h-4 text-yellow-400 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <svg
            className="w-4 h-4 text-yellow-400 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <svg
            className="w-4 h-4 text-gray-300 dark:text-zinc-700 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <span className="ml-2 bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded-md dark:bg-orange-950 dark:text-orange-400">
            4.0
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            $89,999
          </span>

          <a
            href="/"
            className="text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-900 font-semibold rounded-lg text-sm px-4 py-2.5 text-center transition-all duration-200 hover:-translate-y-0.5">
            Add for test drive
          </a>
        </div>
      </div>
    </div>
  );
}
