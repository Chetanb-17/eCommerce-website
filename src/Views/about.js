import Header from "../Layout/header";
import { people } from "../config/config";

export default function About() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                About the team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                We're a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              {people.map((person) => (
                <div
                  key={person.name}
                  className="flex items-center justify-center gap-x-6"
                >
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-100">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-100">
                      {person.role}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-100">
                      {person.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
