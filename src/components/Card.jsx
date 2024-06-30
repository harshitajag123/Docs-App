import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
	return (
		<>
			<motion.div
				drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.1} dragTransition={{bounceStiffness: 100,bounceDamping:100}}
				className=" relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-8 px-10 overflow-hidden">
				{/* //icon */}
				<FaRegFileAlt />
				<p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
				<div className="footer absolute bottom-0 left-0 w-full   ">
					<div className="flex items-center justify-between h-4 py-5 px-8  ">
						<h5>{data.filesize}</h5>
						<span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
							{data.close ? (
								<IoClose size=".7em" color="#fff" />
							) : (
								<FiDownload size=".7em" color="#fff" />
							)}
						</span>
					</div>
					{data.tag.isOpen && (
						<div
							className={`tag w-full h-8 py-4 text-white ${
								data.tag.tagColor === "blue" ? `bg-blue-600` : `bg-green-600`
							} flex justify-center items-center `}>
							<h3 className="text-sm font-semibold cursor-pointer text-white">
								{data.tag.tagTitle}
							</h3>
						</div>
					)}
				</div>
			</motion.div>
		</>
	);
}

export default Card;

{
	/* icon
      text
      footer--data
              tag
       */
}
