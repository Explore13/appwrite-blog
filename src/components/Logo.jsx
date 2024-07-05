// import React from 'react'

// function Logo({width = '100px'}) {
//   return (
//     <div>Explorer</div>
//   )
// }

// export default Logo
import React from 'react';

function Logo({ width = '100px' }) {
    return (
        <div className="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 0 0-6.485 12.485l7.392 7.392a1 1 0 0 0 1.414 0l7.392-7.392A8 8 0 0 0 10 2zm-4.95 7.535a1 1 0 1 0 1.414 1.414 1 1 0 0 0-1.414-1.414zm6.364 6.364a1 1 0 1 0 1.414 1.414 1 1 0 0 0-1.414-1.414zm-1.414-4.95a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414z"
                />
            </svg>
            <span className="ml-2 text-xl font-bold text-blue-500">Explorer-Blog</span>
        </div>
    );
}

export default Logo;
