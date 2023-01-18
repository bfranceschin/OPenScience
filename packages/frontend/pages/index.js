import NavbarLandPage from '../components/landPage/NavbarLandPage';

const github = "https://github.com/bfranceschin/encode-metaverse-hackathon#open-science-project"

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
          An NFT plataform for publishing and funding scientific research.
        </p>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px lg:px-8 lg:py-20">
    {/* <div className="px-4 py-16 mx-auto md:px lg:px-8 lg:py-20 bg-base-300"> */}
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 rounded-full bg-teal-accent-400">
          </p>
        </div>
        <h2 className="mb-6 font-sans text-6xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
          Take part in the open science revolution
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
              <SVGPaper />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Permissionless publishing</h6>
            <p className="mb-3 text-sm text-gray-900">
              Mint your paper as an NFT and make it available permanently on optimism/ipfs.
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
              <SVGOpenLock />
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
              <SVGDonate />
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
              <SVGGraph />
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

const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg">
        <div className="grid place-items-center">
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            src="https://avatars.githubusercontent.com/u/50725001?v=4;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Bernardo Franceschin</p>
            <p className="mb-4 text-xs text-gray-800">Fullstack / smart contracts</p>
            <p className="text-sm tracking-wide text-gray-800">
              bfranceschin@gmail.com
            </p>
          </div>
        </div>
        <div className="grid place-items-center">
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="https://avatars.githubusercontent.com/u/16672082?v=4;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Fernanda Duarte</p>
            <p className="mb-4 text-xs text-gray-800">Frontend</p>
            <p className="text-sm tracking-wide text-gray-800">
              fcduarte26@gmail.com
            </p>
          </div>
        </div>
        <div className="grid place-items-center">
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            // src="https://ipfs.io/ipfs/QmQmySEwVzpFgar9YTmdxvccYxXzaJo3Cbh6wZzrnJaqBG?filename=pedro_profile_pic.jpeg;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            src="https://avatars.githubusercontent.com/u/103785545?v=4;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ipfs-logo-1024-ice-text.png/600px-Ipfs-logo-1024-ice-text.png?20180220024806;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Pedro Franceschin</p>
            <p className="mb-4 text-xs text-gray-800">Smart contracts</p>
            <p className="text-sm tracking-wide text-gray-800">
              pbfranceschin@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-2 lg:max-w-screen-lg">
        <div className="grid place-items-center">
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            src="https://cryptologos.cc/logos/optimism-ethereum-op-logo.png?v=023;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Optimism</p>
          </div>
        </div>
        <div className="grid place-items-center">
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ipfs-logo-1024-ice-text.png/600px-Ipfs-logo-1024-ice-text.png?20180220024806;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">NFT.Storage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SVGLinked = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    id="magicoon-Filled"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <style>{"\n      .cls-1{fill:#41416e;}\n    "}</style>
    </defs>
    <title>{"link"}</title>
    <g id="link-Filled">
      <path
        id="link-Filled-2"
        data-name="link-Filled"
        className="cls-1"
        d="M20.545,10.467l-1.839,1.84a1,1,0,0,1-1.414-1.414l1.839-1.84a2.965,2.965,0,0,0,0-4.186,3.027,3.027,0,0,0-4.184,0l-3.36,3.36a2.046,2.046,0,0,0-.267.316,2.943,2.943,0,0,0,.268,3.87,1,1,0,0,1-1.415,1.414,4.915,4.915,0,0,1-.5-6.42,3.792,3.792,0,0,1,.5-.594l3.36-3.36a4.959,4.959,0,0,1,7.013,7.014Zm-8.132-.294a1,1,0,0,0,0,1.414,2.928,2.928,0,0,1,.688,3.1,2.827,2.827,0,0,1-.688,1.088l-3.36,3.36a3.027,3.027,0,0,1-4.184,0,2.965,2.965,0,0,1,0-4.186l1.839-1.84a1,1,0,1,0-1.414-1.414l-1.839,1.84a4.959,4.959,0,1,0,7.013,7.014l3.359-3.359a4.813,4.813,0,0,0,1.163-1.849,4.963,4.963,0,0,0-1.163-5.166A1,1,0,0,0,12.413,10.173Z"
      />
    </g>
  </svg>
);

const SVGHandShake = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 -2.4 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.47 4.796l-1.785 -1.785A2.109 2.109 0 0 0 16.2 2.4H7.695c-0.555 0 -1.091 0.221 -1.485 0.611L4.425 4.796H0v9.589h2.4c0.66 0 1.192 -0.532 1.196 -1.189h0.341l3.172 2.865c1.159 0.941 2.767 0.964 3.96 0.142 0.469 0.405 0.975 0.596 1.541 0.596 0.682 0 1.324 -0.278 1.83 -0.9 0.829 0.326 1.808 0.098 2.4 -0.63l0.982 -1.211c0.21 -0.259 0.341 -0.555 0.409 -0.862h2.171c0.004 0.656 0.54 1.189 1.196 1.189h2.4V4.796H19.47zM1.8 13.185c-0.33 0 -0.6 -0.27 -0.6 -0.6s0.27 -0.6 0.6 -0.6 0.6 0.27 0.6 0.6c0 0.334 -0.27 0.6 -0.6 0.6zm14.625 -0.259l-0.979 1.208c-0.105 0.128 -0.292 0.15 -0.424 0.045l-0.896 -0.727 -1.125 1.369c-0.225 0.274 -0.563 0.18 -0.675 0.09l-1.38 -1.181 -0.585 0.72c-0.521 0.641 -1.47 0.739 -2.074 0.247l-3.649 -3.3H3.6V6.593h1.571l2.314 -2.31c0.075 -0.03 0.139 -0.056 0.214 -0.086H9.825l-1.451 1.331c-1.102 1.009 -1.166 2.711 -0.165 3.799 0.555 0.607 2.295 1.545 3.806 0.165l0.307 -0.281 4.058 3.292c0.128 0.105 0.146 0.296 0.045 0.424zm3.975 -1.53h-2.595c-0.086 -0.105 -0.184 -0.203 -0.289 -0.289l-3.851 -3.127 0.469 -0.427c0.244 -0.225 0.263 -0.604 0.037 -0.848L13.762 6.266c-0.225 -0.244 -0.604 -0.259 -0.848 -0.037l-2.07 1.897c-0.356 0.326 -0.964 0.352 -1.298 0 -0.349 -0.371 -0.319 -0.941 0.045 -1.271l2.46 -2.254c0.278 -0.255 0.637 -0.394 1.012 -0.394l3.139 -0.007c0.079 0 0.154 0.03 0.206 0.086l2.314 2.31H20.4v4.8zm1.8 1.789c-0.33 0 -0.6 -0.27 -0.6 -0.6s0.27 -0.6 0.6 -0.6 0.6 0.27 0.6 0.6c0 0.334 -0.27 0.6 -0.6 0.6z" />
  </svg>
);

const SVGRobot = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 0.75C11.171 0.75 10.5 1.421 10.5 2.25C10.5 2.804 10.802 3.278 11.25 3.539L11.25 5.25L7.5 5.25C5.438 5.25 3.75 6.938 3.75 9L3.75 10.5L1.5 10.5L1.5 16.5L3.75 16.5L3.75 20.25L20.25 20.25L20.25 16.5L22.5 16.5L22.5 10.5L20.25 10.5L20.25 9C20.25 6.938 18.563 5.25 16.5 5.25L12.75 5.25L12.75 3.539C13.198 3.278 13.5 2.804 13.5 2.25C13.5 1.421 12.829 0.75 12 0.75ZM7.5 6.75L16.5 6.75C17.751 6.75 18.75 7.749 18.75 9L18.75 18.75L17.25 18.75L17.25 15L6.75 15L6.75 18.75L5.25 18.75L5.25 9C5.25 7.749 6.249 6.75 7.5 6.75ZM9 9.75C8.171 9.75 7.5 10.421 7.5 11.25C7.5 12.079 8.171 12.75 9 12.75C9.829 12.75 10.5 12.079 10.5 11.25C10.5 10.421 9.829 9.75 9 9.75ZM15 9.75C14.171 9.75 13.5 10.421 13.5 11.25C13.5 12.079 14.171 12.75 15 12.75C15.829 12.75 16.5 12.079 16.5 11.25C16.5 10.421 15.829 9.75 15 9.75ZM3 12L3.75 12L3.75 15L3 15ZM20.25 12L21 12L21 15L20.25 15ZM8.25 16.5L9.75 16.5L9.75 18.75L8.25 18.75ZM11.25 16.5L12.75 16.5L12.75 18.75L11.25 18.75ZM14.25 16.5L15.75 16.5L15.75 18.75L14.25 18.75Z" />
  </svg>
);

const SVGPaper = (props) => (
  <svg
    width="52px"
    height="52px"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.817 7.667C13.273 7.667 12.022 8.91 12.022 10.444V41.556C12.022 43.09 13.273 44.333 14.817 44.333H37.183C38.727 44.333 39.978 43.09 39.978 41.556V19.804C39.978 19.081 39.695 18.387 39.187 17.868L30.029 8.508C29.502 7.97 28.779 7.667 28.024 7.667H14.817ZM8.667 10.444C8.667 7.069 11.42 4.333 14.817 4.333H28.024C29.685 4.333 31.276 5.001 32.434 6.185L41.593 15.544C42.709 16.685 43.333 18.213 43.333 19.804V41.556C43.333 44.931 40.58 47.667 37.183 47.667H14.817C11.42 47.667 8.667 44.931 8.667 41.556V10.444Z"
      fill="#030D45"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.613 32.667C17.613 33.587 18.364 34.333 19.29 34.333H32.71C33.636 34.333 34.387 33.587 34.387 32.667C34.387 31.746 33.636 31 32.71 31H19.29C18.364 31 17.613 31.746 17.613 32.667Z"
      fill="#030D45"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.613 23.778C17.613 24.698 18.364 25.444 19.29 25.444H26C26.926 25.444 27.677 24.698 27.677 23.778C27.677 22.857 26.926 22.111 26 22.111H19.29C18.364 22.111 17.613 22.857 17.613 23.778Z"
      fill="#030D45"
    />
  </svg>
);

const SVGOpenLock = (props)  => (
  <svg
    width="36px"
    height="36px"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#030D45"
      d="M28.5 1.5h-1.5c-4.14 0 -7.5 3.36 -7.5 7.5v4.5H3c-1.65 0 -3 1.35 -3 3v16.5c0 1.65 1.35 3 3 3h21c1.65 0 3 -1.35 3 -3V16.5c0 -1.65 -1.35 -3 -3 -3h-1.5V9c0 -2.475 2.025 -4.5 4.5 -4.5h1.5c2.475 0 4.5 2.025 4.5 4.5v9c0 0.825 0.675 1.5 1.5 1.5s1.5 -0.675 1.5 -1.5V9c0 -4.14 -3.36 -7.5 -7.5 -7.5zm-5.25 15c0.42 0 0.75 0.33 0.75 0.75v15c0 0.405 -0.33 0.75 -0.75 0.75h-19.5c-0.42 0 -0.75 -0.33 -0.75 -0.75v-15c0 -0.405 0.33 -0.75 0.75 -0.75h19.5z"
    />
    <path
      fill="#030D45"
      d="M16.5 22.5c0 1.11 -0.6 2.07 -1.5 2.595V28.5c0 0.825 -0.675 1.5 -1.5 1.5s-1.5 -0.675 -1.5 -1.5v-3.405c-0.9 -0.525 -1.5 -1.485 -1.5 -2.595 0 -1.65 1.35 -3 3 -3s3 1.35 3 3z"
    />
  </svg>
);

const SVGDonate = (props) => (
  <svg
    width="36px"
    height="36px"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path fill="none" d="M0 0h36v36H0z" />
      <path
        fillRule="nonzero"
        d="M7.5 13.5a1.5 1.5 0 0 1 1.5 1.5 10.455 10.455 0 0 1 6.495 2.25h3.255c1.999 0 3.795 0.87 5.031 2.25H28.5a7.5 7.5 0 0 1 6.774 4.277C31.727 28.458 25.983 31.5 19.5 31.5c-4.185 0 -7.725 -0.904 -10.59 -2.487A1.497 1.497 0 0 1 7.5 30H3a1.5 1.5 0 0 1 -1.5 -1.5v-13.5a1.5 1.5 0 0 1 1.5 -1.5h4.5zm1.501 4.5L9 25.533l0.068 0.048C11.76 27.471 15.267 28.5 19.5 28.5c4.506 0 8.699 -1.734 11.752 -4.695l0.2 -0.2 -0.18 -0.15a4.491 4.491 0 0 0 -2.465 -0.945L28.5 22.5h-3.167c0.108 0.483 0.167 0.984 0.167 1.5v1.5H12v-3l10.185 -0.002 -0.051 -0.117a3.752 3.752 0 0 0 -3.138 -2.124L18.75 20.25H14.355A7.478 7.478 0 0 0 9.003 18zM6 16.5H4.5v10.5h1.5v-10.5zm21 -9a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0 -9zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0 -3zm-10.5 -7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0 -9zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0 -3z"
      />
    </g>
  </svg>
);

const SVGGraph = (props) => (
  <svg
    width="36px"
    height="36px"
    viewBox="0 0 36 36"
    id="icon"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <style>{".cls-1{fill:none;}"}</style>
    </defs>
    <title>{"network--2"}</title>
    <path d="M19.125 19.125h5.785a4.5 4.5 0 1 0 0 -2.25H19.125V7.875h5.785a4.5 4.5 0 1 0 0 -2.25H19.125a2.253 2.253 0 0 0 -2.25 2.25v9H11.09a4.5 4.5 0 1 0 0 2.25H16.875v9a2.253 2.253 0 0 0 2.25 2.25h5.785a4.5 4.5 0 1 0 0 -2.25H19.125Zm10.125 -3.375a2.25 2.25 0 1 1 -2.25 2.25A2.253 2.253 0 0 1 29.25 15.75ZM29.25 4.5a2.25 2.25 0 1 1 -2.25 2.25A2.253 2.253 0 0 1 29.25 4.5ZM6.75 20.25a2.25 2.25 0 1 1 2.25 -2.25A2.253 2.253 0 0 1 6.75 20.25Zm22.5 6.75a2.25 2.25 0 1 1 -2.25 2.25A2.253 2.253 0 0 1 29.25 27Z" />
  </svg>
);

const GraphFunding = () => {
  const filterCSS = { filter: `invert(1) grayscale(1)`}
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 rounded-full bg-teal-accent-400">
          </p>
        </div>
        <h2 className="mb-6 font-sans text-6xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl">
          Graph-Funding
        </h2>
        <p className="text-base text-gray-700 text-2xl">
          An efficient and unbiased form of retroactive funding
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <SVGLinked />
                {/* <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
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
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Linked NFTs
              </h6>
              <p className="text-sm text-gray-900">
                When minting NFTs, it is possible to add links to the NFTs used as research reference.
                A big graph emerges from this setup.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <SVGHandShake />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Shared revenue
              </h6>
              <p className="text-sm text-gray-900">
                A percentage of the donations received by an NFT is destined to its linked references.
                This happens recursively throug the graph. The most important / referenced works receive the most funds.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <SVGRobot />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Automatic funds propagation
              </h6>
              <p className="text-sm text-gray-900">
                Anyone can trigger the claim transaction that transfers funds from an NFT to its references and receive a reward for doing it.
                As soon as a claim transaction is profitable, it will be triggered by MEV searchers.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            // src="https://ipfs.io/ipfs/QmdwX4i6ySwauJZJoPJPwRiXPV4enQgigFAYrrZDnHtGJx?filename=grafo_obsidian.png;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            src="https://ipfs.io/ipfs/QmfUvLc1XjNpzEoSpBh5KfqopcMRh7HUXQVETmLpU3u4XX?filename=graph_animation3.gif;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
            style={filterCSS}
          />
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
      <GraphFunding />
      <Team />
      <Tech />
    </div>
  )
}

export default LandingPageComponent;
