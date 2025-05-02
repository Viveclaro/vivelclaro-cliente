import Script from 'next/script'
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Autoplay,
	Pagination,
	EffectCoverflow,
} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Data Array
const shows = [
	{
		id: 1,
		image: "/images/location/fase-1.png",
		badge: "01",
		title: "Conciertos",
		rating: "Mayo 16",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
	},
	{
		id: 2,
		image: "/images/location/fase-2.png",
		badge: "02",
		title: "Eventos deportivos",
		rating: "Octubre 10",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Action", "Comedy", "Crime"],
	},
	{
		id: 3,
		image: "/images/location/fase-3.png",
		badge: "03",
		title: "The Shadow",
		rating: "Noviembre 6",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
	},
	{
		id: 4,
		image: "/images/location/fase-4.png",
		badge: "04",
		title: "PÁRAMO PRESENTA",
		rating: "8.8",
		duration: "6PM - 10PM",
		rating: "Noviembre 16",
		genres: ["Action", "Comedy", "Crime"],
	},
	{
		id: 5,
		image: "/images/location/fase-1.png",
		badge: "01",
		title: "Conciertos",
		rating: "Mayo 16",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
	},
	{
		id: 6,
		image: "/images/location/fase-2.png",
		badge: "02",
		title: "Eventos deportivos",
		rating: "Octubre 10",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Action", "Comedy", "Crime"],
	},
	{
		id: 7,
		image: "/images/location/fase-3.png",
		badge: "03",
		title: "The Shadow",
		rating: "Noviembre 6",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
	},
	{
		id: 8,
		image: "/images/location/fase-4.png",
		badge: "04",
		title: "PÁRAMO PRESENTA",
		rating: "8.8",
		duration: "6PM - 10PM",
		rating: "Noviembre 16",
		genres: ["Action", "Comedy", "Crime"],
	},
];

const Location = () => {
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
		<div className="location-area" id="section-5">
			<div className="col-md-6 m-auto">
				<div className="center-title">
					<div className="d-block justify-content-start mb-40">
						<h3 className="section-title small mb-20 lh-1 bckg-000000 color-white">
							¡Aquí se encuentra vive claro!
						</h3>
					</div>
				</div>
			</div>
			<div className="section-bckg pb-50 pb-lg-100">
				<div className="container">
					<div className="row">
						<div className="col-xl-5 col-lg-5 d-flex flex-column justify-content-center">
							<div className="section-headeng position-relative">
								<Image
									src="/images/logo-white.png"
									alt="clock"
									width={190}
									height={80}
								/>
								<h2
									className="section-title large mb-20 lh-1 color-white mt-30 color--a91141"
									data-cs-stagger="0.07"
								>
									Ubicación
								</h2>
								<p className="section-description-2 mb-xl-4 mb-3 pb-2 fade-slide bottom color-white">
									Nos encontramos en una ubicación estratégica en la zona de
									Salitre de Bogota,
									<strong>entre la Calle 53, Calle 26 y Cra 60.</strong>
								</p>
								<div className="mb-30"></div>
								<p className="section-description-2 mb-xl-4 mb-3 pb-2 fade-slide bottom color-white">
									<strong>¡Te esperamos!</strong>
								</p>
							</div>
						</div>
						<div className="position-relative col-xl-7 col-lg-7 col-md-12 overflow-hidden border-radius-50 pt-30 pt-lg-0">
							<Image
								src="/images/location/fase-1-new.png"
								alt=""
								width={805}
								height={598}
								style={{
									height: "auto",
									objectPosition: "center",
								}}
								className="w-100 flow-hidden border-radius-50"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;
