import React from "react";
import Image from "next/image";
import demoProduct from '@/assets/favicon.jpg';


const Services: React.FC = () =>{
    return(
        <>
         <section className="my-2 mx-1 pb-12">
            <h1 className="text-3xl font-bold my-8 mx-5">
              <span>  Benefits of buying </span> <span className="text-primaryColor"> our products </span></h1>
            <div className="grid grid-cols-2 text-center  text-[8px] xSm:p-6 xSm:text-[12px] sm:text-[16.1px] p-1">
                <div className="flex border flex-col shadow-xl rounded-md p-2 m-1 items-center">
                <svg width="30" height="30" viewBox="0 -6.11 63.999 63.999" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(-621.981 -741.117)">
    <g>
      <path d="M681.869,792.887H624.11a2.131,2.131,0,0,1-1.883-3.128l15.641-29.62a2.13,2.13,0,0,1,3.51-.382l9.287,10.975,11.891-17.688a2.132,2.132,0,0,1,3.691.266l17.544,36.524a2.132,2.132,0,0,1-1.922,3.053Zm-56.318-3h54.937L664.2,755.977l-12.152,18.076a1.5,1.5,0,0,1-2.39.132l-9.738-11.508Z" fill="black"/>
    </g>
    <g id="Group_40" >
      <path d="M676.736,759.607a9.241,9.241,0,1,1,9.244-9.245A9.255,9.255,0,0,1,676.736,759.607Zm0-15.49a6.253,6.253,0,1,0,4.413,1.832A6.252,6.252,0,0,0,676.736,744.117Z" fill="black"/>
    </g>
  </g>
</svg>
                  <h2 className="xSm:text-[13px] text-[8px] sm:text-2xl font-bold"> Genuine </h2>
                  <p> 
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    {/* exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? */}
                  </p>
                </div>
                <div className="flex border flex-col translate-y-8 shadow-xl rounded-md p-2 m-1 items-center">
                <svg height="30" width="30" version="1.1" id="Capa_1" 
	 viewBox="0 0 495.622 495.622" >
<g>
	<path style={{fill:'#030104'}} d="M495.622,113.089v150.03c0,0-32.11,6.326-38.725,7.158c-6.594,0.83-27.316,7.521-42.334-6.914
		c-23.16-22.197-105.447-104.03-105.447-104.03s-14.188-13.922-36.969-1.89c-20.912,11.022-51.911,27.175-64.859,33.465
		c-24.477,13.028-44.764-7.642-44.764-23.387c0-12.213,7.621-20.502,18.515-26.598c29.524-17.898,91.752-52.827,117.67-66.598
		c15.754-8.379,27.105-9.097,48.734,9.124c26.638,22.403,50.344,42.824,50.344,42.824s7.732,6.453,20.063,3.854
		C448.13,123.725,495.622,113.089,495.622,113.089z M168.098,367.3c3.985-10.238,2.653-21.689-4.987-29.545
		c-6.865-7.027-16.888-8.879-26.445-6.689c2.673-9.479,1.197-19.568-5.705-26.688c-6.886-7.009-16.89-8.898-26.446-6.688
		c2.653-9.465,1.181-19.553-5.725-26.652c-10.814-11.092-29.519-10.616-41.807,1.097c-12.223,11.729-20.053,32.979-9.144,45.487
		c10.891,12.445,23.405,4.873,32.945,2.699c-2.654,9.465-10.606,18.269-0.813,30.658c9.784,12.395,23.404,4.875,32.954,2.721
		c-2.663,9.429-10.268,19.117-0.851,30.604c9.502,11.522,25.065,5.383,35.344,2.19c-3.967,10.199-12.458,21.193-1.549,33.513
		c10.892,12.409,36.063,6.668,48.358-5.063c12.262-11.729,13.439-30.318,2.654-41.445
		C189.435,365.865,178.335,364.089,168.098,367.3z M392.442,289.246c-88.88-88.881-47.075-47.058-94.906-94.992
		c0,0-14.375-14.311-33.321-5.998c-13.3,5.828-30.423,13.771-43.307,19.835c-14.158,7.424-24.347,9.722-29.131,9.69
		c-27.37-0.179-49.576-22.178-49.576-49.521c0-17.738,9.417-33.181,23.462-41.947c19.75-13.667,65.21-37.847,65.21-37.847
		s-13.849-17.549-44.187-17.549c-30.329,0-93.695,41.512-93.695,41.512s-17.976,11.514-43.601,1.143L0,96.373V268.05
		c0,0,14.103,4.082,26.775,9.258c2.862-8.162,7.48-15.699,13.886-21.924c21.023-20.024,55.869-20.232,74.996-0.537
		c5.762,5.987,9.783,13.129,11.835,21.024c7.707,2.379,14.688,6.593,20.298,12.373c5.779,5.947,9.785,13.129,11.854,20.984
		c7.698,2.381,14.669,6.611,20.298,12.395c6.339,6.537,10.562,14.433,12.534,22.988c8.047,2.344,15.319,6.705,21.176,12.693
		c11.495,11.807,15.575,27.826,13.103,43.278c0.02,0,0.058,0,0.076,0.035c0.188,0.246,7.122,7.976,11.446,12.336
		c8.474,8.482,22.311,8.482,30.811,0c8.444-8.479,8.481-22.289,0-30.811c-0.304-0.303-30.572-31.963-28.136-34.418
		c2.418-2.438,40.981,37.688,41.699,38.422c8.463,8.465,22.291,8.465,30.792,0c8.481-8.479,8.463-22.289,0-30.791
		c-0.416-0.396-2.152-2.059-2.796-2.721c0,0-38.234-34.06-35.324-36.97c2.946-2.928,50.438,41.392,50.515,41.392
		c8.537,7.688,21.687,7.631,29.9-0.586c7.991-7.99,8.162-20.629,1.078-29.146c-0.15-0.453-36.194-38.121-33.381-40.955
		c2.854-2.871,38.519,33.853,38.594,33.929c8.444,8.463,22.291,8.463,30.792,0c8.463-8.464,8.463-22.291,0-30.83
		C392.706,289.396,392.555,289.32,392.442,289.246z"/>
</g>
</svg>
                  <h2 className="xSm:text-[13px] text-[8px] sm:text-2xl font-bold"> Satisfaction </h2>
                  <p> 
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    {/* exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? */}
                  </p>
                </div>
                <div className="flex border flex-col shadow-xl rounded-md p-2 m-1 items-center">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
<path d="M10.7516 16.8604V18.8904C10.7516 20.6104 9.15158 22.0004 7.18158 22.0004C5.21158 22.0004 3.60156 20.6104 3.60156 18.8904V16.8604C3.60156 18.5804 5.20158 19.8004 7.18158 19.8004C9.15158 19.8004 10.7516 18.5704 10.7516 16.8604Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.7501 14.11C10.7501 14.61 10.6101 15.07 10.3701 15.47C9.78006 16.44 8.57004 17.05 7.17004 17.05C5.77004 17.05 4.56003 16.43 3.97003 15.47C3.73003 15.07 3.59009 14.61 3.59009 14.11C3.59009 13.25 3.99007 12.48 4.63007 11.92C5.28007 11.35 6.17003 11.01 7.16003 11.01C8.15003 11.01 9.04006 11.36 9.69006 11.92C10.3501 12.47 10.7501 13.25 10.7501 14.11Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.7516 14.11V16.86C10.7516 18.58 9.15158 19.8 7.18158 19.8C5.21158 19.8 3.60156 18.57 3.60156 16.86V14.11C3.60156 12.39 5.20158 11 7.18158 11C8.17158 11 9.06161 11.35 9.71161 11.91C10.3516 12.47 10.7516 13.25 10.7516 14.11Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 10.9699V13.03C22 13.58 21.56 14.0299 21 14.0499H19.0399C17.9599 14.0499 16.97 13.2599 16.88 12.1799C16.82 11.5499 17.0599 10.9599 17.4799 10.5499C17.8499 10.1699 18.36 9.94995 18.92 9.94995H21C21.56 9.96995 22 10.4199 22 10.9699Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 10.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H13.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                  <h2 className="xSm:text-[13px] text-[8px] sm:text-2xl font-bold"> Affordable </h2>
                  <p> 
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    {/* exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? */}
                  </p>
                </div>
                <div className="flex border flex-col translate-y-8 shadow-xl rounded-md p-2 m-1 items-center">
                <svg fill="#000000" height="30" width="30" version="1.1" id="Layer_1" 
	 viewBox="0 0 512.003 512.003">
<g>
	<g>
		<path d="M102.403,0.002c-42.351,0-76.8,34.449-76.8,76.8c0,42.351,34.449,76.8,76.8,76.8c42.351,0,76.8-34.449,76.8-76.8
			C179.203,34.451,144.754,0.002,102.403,0.002z M102.403,128.002c-28.279,0-51.2-22.921-51.2-51.2s22.921-51.2,51.2-51.2
			s51.2,22.921,51.2,51.2S130.683,128.002,102.403,128.002z"/>
	</g>
</g>
<g>
	<g>
		<path d="M384.003,0.002c-42.351,0-76.8,34.449-76.8,76.8c0,42.351,34.449,76.8,76.8,76.8s76.8-34.449,76.8-76.8
			C460.803,34.451,426.354,0.002,384.003,0.002z M384.003,128.002c-28.279,0-51.2-22.921-51.2-51.2s22.921-51.2,51.2-51.2
			c28.279,0,51.2,22.921,51.2,51.2S412.283,128.002,384.003,128.002z"/>
	</g>
</g>
<g>
	<g>
		<path d="M486.403,325.122h-3.302l-22.707-124.894c-2.219-12.177-12.817-21.026-25.19-21.026h-102.4
			c-5.811,0-11.452,1.98-15.991,5.606L255.73,233.67l-89.429-51.106c-3.866-2.202-8.243-3.362-12.698-3.362h-102.4
			c-12.373,0-22.972,8.849-25.19,21.026l-25.6,140.8c-1.357,7.467,0.666,15.155,5.53,20.983c4.872,5.82,12.066,9.19,19.661,9.19
			h16.358l9.327,117.231c1.058,13.303,12.169,23.569,25.515,23.569h51.2c13.355,0,24.465-10.266,25.515-23.569l11.196-140.8
			l6.485-63.394l63.778,21.606c2.688,0.913,5.461,1.357,8.226,1.357c4.437,0,8.738-1.408,12.638-3.652
			c3.994,2.355,8.448,3.652,12.962,3.652c3.678,0,7.364-0.794,10.795-2.389l35.985-16.742l6.153,60.134l11.145,140.22
			c1.058,13.312,12.169,23.578,25.523,23.578h51.2c13.355,0,24.465-10.266,25.523-23.569l4.233-53.231h47.044
			c14.14,0,25.6-11.46,25.6-25.6v-58.88C512.003,336.582,500.543,325.122,486.403,325.122z M243.203,281.602l-94.191-31.915
			l-9.813,95.915l-11.196,140.8h-51.2l-11.196-140.8H25.603l25.6-140.8h38.4v77.875c0,7.074,5.726,12.8,12.8,12.8
			c7.074,0,12.8-5.726,12.8-12.8v-77.875h38.4l89.6,51.2V281.602z M409.603,486.402h-51.2l-11.196-140.8l-9.813-95.915
			l-68.591,31.915v-25.6l64-51.2h38.4v77.875c0,7.074,5.726,12.8,12.8,12.8c7.074,0,12.8-5.726,12.8-12.8v-77.875h38.4
			l21.879,120.32h-52.599c-14.14,0-25.6,11.46-25.6,25.6v58.88c0,14.14,11.46,25.6,25.6,25.6h9.19L409.603,486.402z
			 M486.403,409.602h-81.92v-58.88h81.92V409.602z"/>
	</g>
</g>
</svg>
                  <h2 className="xSm:text-[13px] text-[8px] sm:text-xl font-bold"> Fast Delivery </h2>
                  <p> 
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ad eum reprehenderit 
                    {/* exercitationem dolor in, itaque, iure non 
                    laborum officia, placeat earum pariatur
                     asperiores. Nobis blanditiis totam iusto 
                     repudiandae, similique ad? */}
                  </p>
                </div>
            </div>
         </section>
        </>
    )
}

export default Services;