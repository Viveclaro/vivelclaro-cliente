import Image from "next/image";
import React, { useState, useEffect } from "react";

const LoadingCounter = () => {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const duration = 2000;
		const steps = 100;
		const increment = duration / steps;

		let currentCount = 0;
		const timer = setInterval(() => {
			if (currentCount < 100) {
				currentCount += 1;
				setCount(currentCount);
			} else {
				clearInterval(timer);
				setTimeout(() => setIsVisible(false), 500);
			}
		}, increment);

		return () => clearInterval(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<div className="loading-container">
			<div className="counter-container">
				<svg width="200" height="120" style={{ transform: "scale(1.5)" }}>
					<text
						x="50%"
						y="50%"
						textAnchor="middle"
						dominantBaseline="middle"
						className="counter-text"
						fill="none"
						stroke="white"
						strokeWidth="1"
					>
						{count}%
					</text>
					<text
						x="50%"
						y="50%"
						textAnchor="middle"
						dominantBaseline="middle"
						className="counter-text counter-fill"
						fill="white"
						strokeWidth="0"
						style={{
							clipPath: `inset(0 ${100 - count}% 0 0)`,
						}}
					>
						{count}%
					</text>
				</svg>
			</div>
			{/* <div className="loading-text-container">
				{Array.from("VIVECLARO").map((letter, index) => (
					<span
						key={index}
						className="loading-letter"
						style={{
							animationDelay: `${index * 0.1}s`,
						}}
					>
						{letter}
					</span>
				))}
			</div> */}
			<Image
				src="/images/logotipo-viveclaro-red.png"
				x="50%"
				y="50%"
				width="256"
				height="144"
				transform="translate(-50, -50)"
				style={{
					clipPath: `inset(0 ${100 - count}% 0 0)`,
				}}
			/>
		</div>
	);
};

export default LoadingCounter;
