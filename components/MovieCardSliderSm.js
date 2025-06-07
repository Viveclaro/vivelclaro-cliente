import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import ImageCarousel from "./ImageCarousel";

// Data Array
const shows = [
	{
		id: 0,
		image: "/images/popular-show/Linkin-Park_Banner-Web_con-logos_Vertical.jpg",
		badge: "01",
		title: "LINKIN PARK",
		rating: "OCTUBRE 25, 2025",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
		link: "https://www.ticketmaster.co/event/linkin-park",
	},
	{
		id: 1,
		image: "/images/popular-show/Pieza-jw.png",
		badge: "01",
		title: "JURASSIC WORLD",
		rating: "A partir del 11 de abril",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
		link: "https://www.eticket.co/eventos.aspx?idartista=840",
	},
	{
		id: 2,
		image: "/images/popular-show/circo-del-sol.png",
		badge: "01",
		title: "CIRCO DEL SOL",
		rating: "Mayo 16, 2024",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
		link: "#",
	},
	{
		id: 3,
		image: "/images/popular-show/cocacola-fest.png",
		badge: "02",
		title: "Coca-Cola Food Fest",
		rating: "Septiembre 21, 2024",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
		link: "#",
	},
	{
		id: 4,
		image: "/images/popular-show/cervezas.png",
		badge: "03",
		title: "EXPOCERVEZAS",
		rating: "Octubre 10, 2024",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Action", "Comedy", "Crime"],
		link: "#",
	},
	{
		id: 5,
		image: "/images/popular-show/aurora.png",
		badge: "04",
		title: "AURORA",
		rating: "Noviembre 6, 2024",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
		link: "#",
	},
	{
		id: 6,
		image: "/images/popular-show/paramo.png",
		badge: "05",
		title: "PÁRAMO CELEBRA",
		rating: "8.8, 2024",
		duration: "6PM - 10PM",
		rating: "Noviembre 16, 2024",
		genres: ["Action", "Comedy", "Crime"],
		link: "#",
	},
	{
		id: 7,
		image: "/images/popular-show/Linkin-Park_Banner-Web_con-logos_Vertical.jpg",
		badge: "01",
		title: "LINKIN PARK",
		rating: "OCTUBRE 25, 2025",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
		link: "https://www.ticketmaster.co/event/linkin-park",
	},
	{
		id: 8,
		image: "/images/popular-show/Pieza-jw.png",
		badge: "01",
		title: "JURASSIC WORLD",
		rating: "A partir del 11 de abril",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
		link: "https://www.instagram.com/p/DFG5TaVR4n_/",
	},
	{
		id: 9,
		image: "/images/popular-show/circo-del-sol.png",
		badge: "01",
		title: "CIRCO DEL SOL",
		rating: "Mayo 16, 2024",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
		link: "#",
	},
	{
		id: 10,
		image: "/images/popular-show/cocacola-fest.png",
		badge: "02",
		title: "Coca-Cola Food Fest",
		rating: "Septiembre 21, 2024",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
		link: "#",
	},
	{
		id: 11,
		image: "/images/popular-show/cervezas.png",
		badge: "03",
		title: "EXPOCERVEZAS",
		rating: "Octubre 10, 2024",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Action", "Comedy", "Crime"],
		link: "#",
	},
	{
		id: 12,
		image: "/images/popular-show/aurora.png",
		badge: "04",
		title: "AURORA",
		rating: "Noviembre 6, 2024",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
		link: "#",
	},
	{
		id: 13,
		image: "/images/popular-show/paramo.png",
		badge: "05",
		title: "PÁRAMO CELEBRA",
		rating: "8.8, 2024",
		duration: "6PM - 10PM",
		rating: "Noviembre 16, 2024",
		genres: ["Action", "Comedy", "Crime"],
		link: "#",
	},
	{
		id: 14,
		image: "/images/popular-show/concierto-PaolaJara.webp",
		badge: "05",
		title: "CELEBRAMOS CON MAMÁ Y PAPÁ",
		rating: "8.8, 2024",
		duration: "6PM - 10PM",
		rating: "Julio 27, 2025",
		genres: ["Action", "Comedy", "Crime"],
		link: "https://www.claro.com.co/eventos/",
	},
	{
		id: 15,
		image: "/images/GREENDAY_POSTER_POST.webp",
		badge: "05",
		title: "GREEN DAY EN BOGOTÁ",
		rating: "8.8, 2024",
		duration: "6PM - 10PM",
		rating: "Agosto 24, 2025",
		genres: ["Action", "Comedy", "Crime"],
		link: "https://www.ticketmaster.co/event/green-day",
	},
	{
		id: 16,
		image: "/images/distrito-cultura/250605_Flyer_Guns-N-Roses.webp",
		badge: "05",
		title: "Guns N' Roses",
		rating: "8.8, 2024",
		duration: "6PM - 10PM",
		rating: "Octubre 07, 2025",
		genres: ["Action", "Comedy", "Crime"],
		link: "https://www.ticketmaster.co/event/guns-n-roses-bogota",
	},
	{
		id: 17,
		image: "/images/Blessd-mobile.webp",
		badge: "05",
		title: "Siempre Blessd",
		rating: "8.8, 2024",
		duration: "6PM - 10PM",
		rating: "Noviembre 22, 2025",
		genres: ["Action", "Comedy", "Crime"],
		link: "https://www.ticketmaster.co/event/siempre-blessd",
	},
];

const MovieCardSliderSm = () => {
	const progressCircle = useRef(null);

	const swiperRef = useRef(null);

	const handlePrev = () => {
		if (swiperRef.current && !swiperRef.current.animating) {
			// Verifica si no está en animación
			swiperRef.current.slidePrev(500); // Especifica una duración más corta
		}
	};

	const handleNext = () => {
		if (swiperRef.current && !swiperRef.current.animating) {
			// Verifica si no está en animación
			swiperRef.current.slideNext(500); // Especifica una duración más corta
		}
	};
	return (
		<div
			className="position-relative section-bckg -mt-100 mb-80 pt-80 pb-100 bckg-FFA131 z-2"
			id="section-1"
		>
			<div className="container mb-45">
				<div className="d-sm-flex text-lg-start text-center align-items-center justify-content-sm-between">
					<div className="d-inline-flex align-item-center section-header">
						{/* <span className="mb-2">👍</span> */}
						<h2 className="section-title mt-1 mt-lg-2 mb-0 lh-1 card-title text-uppercase lh-1">
							Eventos
						</h2>
					</div>
					{/* <ImageCarousel/> */}
					<Image
						src="/images/gift-viveclaro.gif"
						alt="clock"
						width={400}
						height={167}
						className="visibleDesktop"
					/>
				</div>
			</div>

			<Swiper
				modules={[Autoplay, EffectCoverflow]}
				speed={500}
				spaceBetween={10}
				loop={true}
				centeredSlides={true}
				preventClicks={true}
				preventClicksPropagation={true}
				touchRatio={1.5}
				watchSlidesProgress={true}
				autoplay={{
					delay: 10000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				className="movie-card-slider-sm"
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				slideToClickedSlide={true}
				observer={true}
				observeParents={true}
				onAutoplayTimeLeft={(s, time, progress) => {
					if (progressCircle.current) {
						progressCircle.current.style.setProperty(
							"--progress",
							1 - progress
						);
					}
				}}
				breakpoints={{
					0: {
						slidesPerView: 1.2,
					},
					576: {
						slidesPerView: 1.7,
						spaceBetween: 10,
					},
					992: {
						slidesPerView: 3.5,
						spaceBetween: 10,
					},
					1280: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1366: {
						slidesPerView: 3.3,
						spaceBetween: 30,
					},
					1440: {
						slidesPerView: 3.5,
						spaceBetween: 10,
					},
					1600: {
						slidesPerView: 3.9,
						spaceBetween: 30,
					},
				}}
			>
				{shows.map((show) => (
					<>
						<SwiperSlide key={show.link}>
							<Link
								href={show.link}
								target="_blank"
								className="text-decoration-none"
							>
								<div className="movie-card-small position-relative">
									<Image
										src={show.image}
										alt={show.title}
										width={377}
										height={450}
										style={{
											objectFit: "cover",
											objectPosition: "center",
										}}
										className="w-100"
									/>
									<div className="movie-badge position-absolute">
										<span>{show.badge}</span>
									</div>
									<div className="details text-center details-overlay">
										<h4 className="movie-name text-uppercase fw-normal">
											<span className="gradient-link fw-normal color-black">
												{show.title}
											</span>
										</h4>
										<ul className="movie-info">
											<li>
												<span className="color-white">{show.rating}</span>
											</li>
										</ul>
									</div>
								</div>
							</Link>
						</SwiperSlide>
					</>
				))}
			</Swiper>
			<div className="d-flex align-item-center justify-content-center gap-4 mt-4 pt-lg-1">
				<button
					onClick={handlePrev}
					className="slider-btn slider-btn--big prev-slide"
					aria-label="Previous slide"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="29"
						viewBox="0 0 40 29"
						fill="none"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12.91 1.5125V0.322754H15.2895V1.5125C15.2895 6.03007 12.7856 10.375 9.017 12.9489H38.3558V15.3284H9.01686C12.7856 17.9023 15.2895 22.2472 15.2895 26.7648V27.9545H12.91V26.7648C12.91 20.9162 7.71984 15.3487 1.50732 15.3285C1.496 15.3285 1.48468 15.3285 1.47336 15.3285H0.283611V15.3284V12.949V12.9489H0.284611H1.47336H1.519C7.72634 12.9217 12.91 7.35752 12.91 1.5125Z"
							fill="#fff"
						/>
					</svg>
				</button>
				<button
					onClick={handleNext}
					className="slider-btn slider-btn--big next-slide"
					aria-label="Next slide"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="90"
						height="90"
						className="linear-circle"
						ref={progressCircle}
					>
						<defs>
							<linearGradient id="bg_gradient">
								<stop offset="0%" stopColor="#AB1D44" />
								<stop offset="39%" stopColor="#AB1D44" />
								<stop offset="100%" stopColor="#AB1D44" />
							</linearGradient>
						</defs>
						<circle cx="24" cy="24" r="20" strokeLinecap="round"></circle>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="29"
						viewBox="0 0 40 29"
						fill="none"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M26.4206 1.7022V0.512451H24.0411V1.7022C24.0411 6.21977 26.5449 10.5647 30.3136 13.1386H0.974731V15.5181H30.3137C26.545 18.092 24.0411 22.4369 24.0411 26.9545V28.1442H26.4206V26.9545C26.4206 21.1059 31.6107 15.5384 37.8232 15.5181C37.8346 15.5182 37.8459 15.5182 37.8572 15.5182H39.047V15.5181V13.1387V13.1386H39.046H37.8572H37.8116C31.6042 13.1114 26.4206 7.54722 26.4206 1.7022Z"
							fill="#fff"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default MovieCardSliderSm;
