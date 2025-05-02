import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MobileMenu = ({ ctas, headerColor }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = !isOpen ? "hidden" : "unset";
	};

	const handleLinkClick = (e, id) => {
		e.preventDefault();
		const element = document.getElementById(`section-${id}`);
		if (element) {
			const elementPosition = element.offsetTop - 100;
			window.scrollTo({
				top: elementPosition,
				behavior: "smooth",
			});
			toggleMenu();
		}
	};

	return (
		<div
			className="visibleMobile menu-mobile bckg-5C0B0C"
			style={{
				backgroundColor: headerColor,
				transition: "background-color 0.3s ease",
			}}
		>
			<Image src="/images/logo-white.png" alt="logo" width={150} height={63} />
			{/* Hamburger Button */}
			<button
				onClick={toggleMenu}
				className="mnue-mobile-button"
				aria-label={isOpen ? "Close Menu" : "Open Menu"}
			>
				{!isOpen ? (
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="text-white"
					>
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</svg>
				) : (
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="text-white"
					>
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				)}
			</button>

			{/* Mobile Menu Overlay */}
			<div
				className={`menu-mobile-nav z-40 ${isOpen ? "show" : "hide"}`}
				style={{
					backgroundColor: headerColor,
					transition: "background-color 0.3s ease",
				}}
			>
				<div className="flex flex-col h-full">
					{/* Logo Area */}
					<div className="p-4 d-flex justify-content-between">
						<Image
							src="/images/logo-white.png"
							alt="logo"
							width={150}
							height={63}
						/>

						<button
							onClick={toggleMenu}
							className="mnue-mobile-button"
							aria-label={isOpen ? "Close Menu" : "Open Menu"}
						>
							{!isOpen ? (
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									className="text-white"
								>
									<line x1="3" y1="6" x2="21" y2="6" />
									<line x1="3" y1="12" x2="21" y2="12" />
									<line x1="3" y1="18" x2="21" y2="18" />
								</svg>
							) : (
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									className="text-white"
								>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							)}
						</button>
					</div>

					{/* Navigation Links */}
					<nav className="flex-1 overflow-y-auto px-4 py-6">
						<ul className="flex flex-col space-y-6">
							{Array.isArray(ctas) &&
								ctas.map((cta) => (
									<li key={cta.id}>
										<Link
											href={`#section-${cta.id}`}
											className="text-white text-xl block text-center"
											onClick={(e) => handleLinkClick(e, cta.id)}
										>
											{cta.link}
										</Link>
									</li>
								))}
						</ul>
					</nav>

					{/* Social Links */}
					<div className="p-4 border-t border-gray-800">
						<div className="d-flex gap-3">
							<Link
								href="https://www.instagram.com/viveclaro_co/"
								target="_blank"
							>
								<Image
									src="/images/icons/social/instagram.svg"
									alt="instagram"
									width={24}
									height={24}
								/>
							</Link>
							<Link href="https://www.tiktok.com/@viveclaro_co" target="_blank">
								<Image
									src="/images/icons/social/tiktok.svg"
									alt="tiktok"
									width={24}
									height={24}
								/>
							</Link>
							<Link
								href="https://www.youtube.com/@ViveClaro_Co"
								target="_blank"
							>
								<Image
									src="/images/icons/social/youtube.svg"
									alt="youtube"
									width={24}
									height={24}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
