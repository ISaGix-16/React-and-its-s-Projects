/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState({})

  // useEffect(() => {
  //     fetch('https://api.github.com/users/ISaGix-16')
  //     .then((res) => res.json())
  //     .then((data) =>{
  //         setData(data)
  //     })
  // }, [])

  return (
    <div className="min-h-screen bg-black px-4 py-12 text-white sm:py-16 lg:py-24">

      <div className="mx-auto max-w-2xl">

        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 p-6 shadow-2xl sm:p-10">

          {/* Header */}

          <div className="text-center">

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
              GitHub
            </span>

            <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              GitHub Repository
            </h1>

            <p className="mt-2 text-gray-400">
              Public repositories
            </p>

          </div>

          {/* Profile */}

          <div className="mt-8 flex flex-col items-center">

            <img
              src={data.avatar_url}
              alt="GitHub Profile"
              width={300}
              className="
                h-40
                w-40
                rounded-full
                border-4
                border-orange-500
                object-cover
                shadow-xl
                shadow-orange-900/20
                sm:h-52
                sm:w-52
              "
            />

            <div className="mt-8 rounded-xl border border-gray-800 bg-gray-900 px-8 py-5 text-center">

              <p className="text-sm uppercase tracking-widest text-gray-500">
                Public Repositories
              </p>

              <p className="mt-1 text-4xl font-bold text-orange-500">
                {data.public_repos}
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Github;

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/ISaGix-16"
  );

  return response.json();
};