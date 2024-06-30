import React from "react";
import Card from "./Card";
import { useState } from "react";
import { useRef } from "react";

function Foreground() {
  const ref = useRef(null);
	//const data=[icon,description, closeOrDownload, tagdetails];
	const data = [
		{
			desc: " This is the description of the file.",
			filesize: "9mb",
			close: true,
			tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
		},
		{
			desc: " This is the description of the file.",
			filesize: "9mb",
			close: true,
			tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
		},
		{
			desc: " This is the description of the file.",
			filesize: "9mb",
			close: true,
			tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
		},
	];
	useState();
	return (
		<div>
			<div ref={ref} className=" fixed  top-0 left-0 z-[3] w-full h-full  flex gap-10 flexwrap p-10">
        {data.map((item,index)=>(
          <Card data = {item} reference ={ref}/>

        ))}
				
			</div>
		</div>
	);
}

export default Foreground;
