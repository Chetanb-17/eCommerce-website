// import Header from "../Layout/header";
// import { people } from "../config/config";

// export default function About() {
//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-black">
//         <div className="py-24 sm:py-32">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
// <div className="max-w-2xl mx-auto text-center">
// <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
//   About the team
// </h2>
//   <p className="mt-6 text-lg leading-8 text-gray-100">
// We're a dynamic group of individuals who are passionate about
// what we do and dedicated to delivering the best results for our
// clients.
//   </p>
// </div>

//   <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
//     {people.map((person) => (
//       <div
//         key={person.name}
//         className="flex items-center justify-center gap-x-6"
//       >
//         <img
//           alt=""
//           src={person.imageUrl}
//           className="h-20 w-20 rounded-lg object-cover"
//         />
//         <div>
//           <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-100">
//             {person.name}
//           </h3>
//           <p className="text-sm font-semibold leading-6 text-indigo-100">
//             {person.role}
//           </p>
//           <p className="mt-2 text-sm leading-6 text-gray-100">
//             {person.description}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//         </div>
//       </div>
//     </>
//   );
// }

import Header from "../Layout/header";
import { people } from "../config/config";
import aboutBg from "../images/aboutBg.jpg";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "1" },
  { name: "Full-time colleagues", value: "2+" },
  { name: "Hours per week", value: "8" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function Example() {
  return (
    // <div className="relative isolate overflow-hidden bg-gray-900 h-full py-24 sm:py-32">

    <>
      <Header />

      <div className="min-h-screen relative isolate overflow-hidden bg-gray-900">
        <div className="py-24 sm:py-32">
          <img
            alt=""
            src={aboutBg}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Work with us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We're a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">
                      {stat.name}
                    </dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                  About the team
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-100">
                  We're a dynamic group of individuals who are passionate about
                  what we do and dedicated to delivering the best results for
                  our clients.
                </p>
              </div> */}

              <div className="mt-16 mx-auto max-w-2xl lg:mx-0">
                <h4 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
                  About the team
                </h4>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                {people.map((person) => (
                  <div key={person.name} className="flex items-center  gap-x-6">
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
      </div>
    </>
  );
}
