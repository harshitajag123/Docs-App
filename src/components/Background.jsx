import React from 'react'

export const Background = () => {
  return (
		<>
    <div className='fixed z-[2] w-full h-screen'></div>
			<div className=" absolute w-full py-10 top-[5%]  flex justify-center text-zinc-600 text-xl font-semiBold">
				Documents.
			</div>
			<h1 className="text-[13vw] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 ">
				Docs.
			</h1>
		</>
	);
}
