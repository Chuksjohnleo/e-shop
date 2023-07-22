import React from "react";

interface statusComp{
  height: string;
  color: string;
}

const Progress: React.FC<statusComp> = ({ height, color }) => {
  return (
    <>
      {/* <svg height={height} fill={color} className={'animate-spin'} viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
          <path d="M320.006 960.032c0 352.866 287.052 639.974 640.026 639.974 173.767 0 334.093-69.757 451.938-188.072l-211.928-211.912h480.019v479.981l-155.046-155.114C1377.649 1672.883 1177.24 1760 960.032 1760 518.814 1760 160 1401.134 160 960.032ZM959.968 160C1401.186 160 1760 518.866 1760 959.968h-160.006c0-352.866-287.052-639.974-640.026-639.974-173.767 0-334.093 69.757-451.938 188.072l211.928 211.912H239.94V239.997L394.985 395.03C542.351 247.117 742.76 160 959.968 160Z" fillRule="evenodd"/>
      </svg> */}
      <svg
        height={height}
        width={30}
        stroke={color} className={'animate-[spin_0.2s_linear_infinite]'} 
        viewBox="0 0 24 24"
        fill='transparent'
      >
        <path
          d="M13.98 4.46997L12 2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.0899 7.79999C20.1999 9.27999 20.8899 11.11 20.8899 13.11C20.8899 18.02 16.9099 22 11.9999 22C7.08988 22 3.10986 18.02 3.10986 13.11C3.10986 8.19999 7.08988 4.21997 11.9999 4.21997C12.6799 4.21997 13.3399 4.31002 13.9799 4.46002"
  
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* <path
          d="M9.54004 15.92V10.5801L8.04004 12.2501"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        /> */}
        {/* <path
          d="M14 10.5801C15.1 10.5801 16 11.4801 16 12.5801V13.9301C16 15.0301 15.1 15.9301 14 15.9301C12.9 15.9301 12 15.0301 12 13.9301V12.5801C12 11.4701 12.9 10.5801 14 10.5801Z"
          
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        /> */}
      </svg>
    </>
  );
}

export default Progress;
