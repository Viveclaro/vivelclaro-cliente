import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const slides = [
	{
		id: 1,
		video: "/video/video-1.mp4",
		image: "/images/hero/hero-slidvideoe-2.webp",
		title: "Conectado",
		rating: "4.9",
		duration: "02h 30m",
		quality: "4k Quality",
		description: "A la vanguardia del entretenimiento local y global, con la mejor tecnología de Claro para una experiencia sin límites.",
	},
	{
		id: 2,
		video: "/video/video-3.mp4",
		image: "/images/hero/hero-slidvideoe-2.webp",
		title: "Metropolitano",
		rating: "4.9",
		duration: "02h 30m",
		quality: "4k Quality",
		description:"El epicentro que conecta y le da vida a Bogotá.",
	},
	{
		id: 3,
		video: "/video/video-4.mp4",
		image: "/images/hero/hero-slidvideoe-2.webp",
		title: "Cultural",
		rating: "4.9",
		duration: "02h 30m",
		quality: "4k Quality",
		description:"¡La escena vibrante de la capital, llena de momentos inolvidables, únicos y alucinantes!",
	},
	{
		id: 4,
		video: "/video/video-5.mp4",
		image: "/images/hero/hero-slidvideoe-2.webp",
		title: "VERSÁTIL",
		rating: "4.9",
		duration: "02h 30m",
		quality: "4k Quality",
		description:"El espacio que lo tiene todo, adaptable, único y en perfecta armonía con la naturaleza.",
	},
	{
		id: 5,
		video: "/video/video-2.mp4",
		image: "/images/hero/hero-slidvideoe-2.webp",
		title: "Social",
		rating: "4.9",
		duration: "02h 30m",
		quality: "4k Quality",
		description:"El impulso para una Bogotá inclusiva y próspera, que genera empleo y desarrollo para todos.",
	},
	{
		id: 6,
		video: "/video/video-6.mp4",
		image: "/images/hero/hero-slidvideoe-2.webp",
		title: "SOSTENIBLE",
		rating: "4.9",
		duration: "02h 30m",
		quality: "4k Quality",
		description:"Un ícono verde que transforma Bogotá, preservando y conectando con la naturaleza.",
	},
];

const HeroSlider = () => {
	const progressCircle = useRef(null);
	const swiperRef = useRef(null);
	const handlePrev = () => {
		if (swiperRef.current && !swiperRef.current.animating) {
			swiperRef.current.slidePrev(500);
		}
	};

	const handleNext = () => {
		if (swiperRef.current && !swiperRef.current.animating) {
			swiperRef.current.slideNext(500);
		}
	};

	return (
		<>
			<div className="video-area position-relative pt-100 bckg-cfd952 pb-80" id="section-7">
				<div className="section-bckg pt-80 pb-100">
				<div className="container mb-45 position-relative">
					<div className="d-flex flex-column align-items-center mb-40">
						<h2 className="section-title large mb-20 lh-1">En vive claro somos un espacio...</h2>
					</div>
				</div>
					<Swiper
						modules={[Navigation, Autoplay]}
						speed={1500}
						slidesPerView="auto"
						centeredSlides={true}
						slideToClickedSlide={true}
						allowTouchMove={false}
						loop={true}
						autoplay={{
							delay: 10000,
							disableOnInteraction: false,
						}}
						onSwiper={(swiper) => {
							swiperRef.current = swiper;
						}}
						onAutoplayTimeLeft={(s, time, progress) => {
							if (progressCircle.current) {
								progressCircle.current.style.setProperty(
									"--progress",
									1 - progress
								);
							}
						}}
						breakpoints={{
							1366: {
								spaceBetween: -50,
							},
							1600: {
								spaceBetween: -70,
							},
						}}
						className="hero-slider-one"
					>
						{slides.map((slide) => (
							<SwiperSlide
								key={slide.id}
								className="home-one-slider position-relative"
							>
								<video
									className="video-autoplay"
									src={slide.video}
									preload="auto"
									muted
									autoPlay
									loop
								/>
								<div className="thumb">
									<Image
										src={slide.image}
										alt="hero slide"
										width={1920}
										height={1080}
										className="w-100"
									/>
								</div>
								<div className="container position-absolute top-50 start-50 translate-middle mt-5">
									<div className="container mb-45">
										<div className="d-flex flex-column align-items-center mb-40">
											<h2 className="section-title large mb-20 lh-1">
												{slide.title}
											</h2>
											<p className="responsive--description fw-medium mb-4 col-md-5 text-center color-white">
												{slide.description}
											</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="hero-card-slider d-block">
						<div className="slider-btn-wrapper d-flex align-item-center justify-content-center gap-4 mt-xl-4 mt-3">
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
											<stop offset="0%" stopColor="#c1ed0b" />
											<stop offset="39%" stopColor="#c1ed0b" />
											<stop offset="100%" stopColor="#c1ed0b" />
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
				</div>
			</div>
		</>
	);
};

export default HeroSlider;
