import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [bgColor, setBgColor] = useState("bg-white");

	const images = [
		"/images/logo-black.png",
		"/images/logo-white.png",
		"/images/logo-red.png",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % images.length);
		}, 200);

		const handleScroll = () => {
			const scroll = window.scrollY;
			if (scroll < 300) setBgColor("bg-white");
			else if (scroll < 600) setBgColor("bg-blue-100");
			else if (scroll < 900) setBgColor("bg-purple-100");
			else setBgColor("bg-pink-100");
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			clearInterval(interval);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="flex">
			<div className="position-relative gift">
				{images.map((img, idx) => (
					<img
						key={idx}
						src={img}
						width={313}
						height={131}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						alt={`Slide ${idx}`}
						className={`position-absolute top-0 left-0 ${
							idx === currentIndex ? "opacity-100" : "opacity-0"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageCarousel;
