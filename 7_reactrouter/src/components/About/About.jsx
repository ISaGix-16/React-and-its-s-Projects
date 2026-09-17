export default function About() {
  return (
    <div className="min-h-screen bg-black py-12 text-white sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}

          <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 p-4 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1781861799304-067d9d6a2461?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"
              alt="Person overlooking a cinematic mountain landscape"
              className="w-full h-105 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content */}

          <div className="space-y-6">
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
                About Us
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              React development is carried out by
              <span className="text-orange-500"> passionate developers</span>
            </h2>

            <div className="h-1 w-16 rounded-full bg-orange-600" />

            <p className="leading-7 text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>

            <p className="leading-7 text-gray-400">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-800 bg-gray-950 p-4">
                <p className="text-2xl font-bold text-orange-500">100%</p>
                <p className="mt-1 text-xs text-gray-500">Dedication</p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-950 p-4">
                <p className="text-2xl font-bold text-orange-500">React</p>
                <p className="mt-1 text-xs text-gray-500">Technology</p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-gray-950 p-4">
                <p className="text-2xl font-bold text-orange-500">Modern</p>
                <p className="mt-1 text-xs text-gray-500">Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
