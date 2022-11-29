import NavbarLandPage from '../components/NavbarLandPage';

const github = "https://github.com/bfranceschin/encode-metaverse-hackathon#open-science-project"

const Content1 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <a
          href="/"
          aria-label="View"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </a>
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none uppercase">
          Open Science for All
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
        <hr className="w-full my-20 border-gray-300" />
      </div>
    </div>
  );
};

const Content1_2 = () => {
  return (
    <div className="hero min-h-screen bg-black">
      <div className="hero-content text-center">
        <div className="max-w-md">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <a
          href="/"
          aria-label="View"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          {/* <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50"> */}
            {/* <svg
              className="w-12 h-12 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg> */}
            {/* <svg className="mr-2" width="22px" height="22px" viewBox="0 0 22 22" fill="#FFFFFF" stroke="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.875 13.75h0.515v0.688c0 0.379 0.308 0.688 0.688 0.688h1.719c0.379 0 0.688 -0.308 0.688 -0.688v-0.688h0.515c0.759 0 1.375 -0.616 1.375 -1.375V2.75c0 -0.759 -0.616 -1.375 -1.375 -1.375V0.688c0 -0.379 -0.308 -0.688 -0.688 -0.688h-2.75c-0.379 0 -0.688 0.308 -0.688 0.688v0.688c-0.759 0 -1.375 0.616 -1.375 1.375v9.625c0 0.759 0.616 1.375 1.375 1.375zm13.063 5.5h-0.056C21.194 17.789 22 15.865 22 13.75c0 -4.549 -3.701 -8.25 -8.25 -8.25v2.75c3.033 0 5.5 2.467 5.5 5.5s-2.467 5.5 -5.5 5.5H2.063c-1.139 0 -2.063 0.923 -2.063 2.063 0 0.379 0.308 0.688 0.688 0.688h20.625c0.379 0 0.688 -0.308 0.688 -0.688 0 -1.139 -0.923 -2.063 -2.063 -2.063zm-15.469 -1.375h8.938c0.19 0 0.344 -0.154 0.344 -0.344v-0.688c0 -0.19 -0.154 -0.344 -0.344 -0.344H4.469c-0.19 0 -0.344 0.154 -0.344 0.344v0.688c0 0.19 0.154 0.344 0.344 0.344z"/></svg> */}
            
          {/* </div> */}
          {/* <span className="relative inline-block mr-24">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                width="52"
                height="24"
              />
            </svg>
          </span> */}
        </a>
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-[#E9F1F7] sm:text-8xl sm:leading-none uppercase">
          Open Science <span className="text-[#767B91]">for All</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          Open access. Permissionless publishing. Graph-Funding.
        </p>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export const Content2 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          {/* <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div> */}
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            Mission
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            The Open Science Project's mission is to make access to scientific information free and accessible to everyone while enabling scientists to receive funding for their endeavors.
          </p>
        </div>
        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ullamco laboris aliquip ex ea.
        </p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export const Content3 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d9d7687a-355f-4502-8ec4-7945db034688"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          quick, brown fox jumps over a lazy dog
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">The doctor said</h6>
          <p className="text-sm text-gray-900">
            Baseball ipsum dolor sit amet cellar rubber win hack tossed.
            Slugging catcher slide bench league, left fielder nubber.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">That is the true</h6>
          <p className="text-sm text-gray-900">
            We meet at one of those defining moments - a moment when our nation
            is at war, our economy is in turmoil, and the American promise has
            been threatened once more.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Those options</h6>
          <p className="text-sm text-gray-900">
            Strategic high-level 30,000 ft view. Drill down re-inventing the
            wheel at the end of the day but curate imagineer, or to be inspired
            is to become creative.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Swearem ipsum</h6>
          <p className="text-sm text-gray-900">
            Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.
            Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et
            tortor diam, id tempor elit.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Webtwo ipsum</h6>
          <p className="text-sm text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
            perspiciatis unde omnis.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Lookout flogging</h6>
          <p className="text-sm text-gray-900">
            Flatland! Hypatia. Galaxies Orion's sword globular star cluster?
            Light years quasar as a patch of light gathered by gravity Vangelis
            radio telescope.
          </p>
        </div>
      </div>
      <hr className="w-full my-8 border-gray-300" />
    </div>
  );
};


const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 rounded-full bg-teal-accent-400">
            OPenScience
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Take</span>
          </span>{' '}
          part in the open science revolution
        </h2>
        {/* <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p> */}
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Open access</h6>
            <p className="mb-3 text-sm text-gray-900">
               Don't get stuck behind paywalls owned by a few big platforms. Explore all the latest published research.
            </p>
          </div>
          <a
            href={github}
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Permissionless publishing</h6>
            <p className="mb-3 text-sm text-gray-900">
              Mint your paper as an NFT and make it available permanently on ethereum/ipfs.
            </p>
          </div>
          <a
            href={github}
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Donate</h6>
            <p className="mb-3 text-sm text-gray-900">
              Invest in what you believe in. Contribute to the scientific achievements that you find most relevant.
            </p>
          </div>
          <a
            href={github}
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Graph-Funding</h6>
            <p className="mb-3 text-sm text-gray-900">
              Link your NFT with its research references and be part of retroactive public goods funding.
            </p>
          </div>
          <a
            href={github}
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};


const LandingPageComponent = () => {
  return (
    <div>
      <NavbarLandPage/>   
      <Content1_2 />
      <Feature />
      {/* <Content2 />
      <Content3 /> */}
    </div>
  )
}

export default LandingPageComponent;
