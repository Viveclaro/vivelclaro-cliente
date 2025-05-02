import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const movies = [
	{
		id: 1,
		image: "/images/foro.jpg",
		title: "FORO",
		rating: "Mayo 16",
		duration: "6PM - 10PM",
		quality: "4k Quality",
		description:
			"Descubre un espacio diseñado para envolverte en la magia de la música y el show. Con una estructura de graderías temporales y modulares que se adaptan a cada evento, este foro garantiza una conexión única con tus artistas favoritos.",
		certificates: [
			"/images/icons/certificate-1.webp",
			"/images/icons/certificate-2.webp",
			"/images/icons/certificate-3.webp",
		],
	},
	{
		id: 2,
		image: "/images/foro-2.webp",
		title: "ARENA",
		rating: "Octubre 10 al 13",
		duration: "6PM - 10PM",
		quality: "4k Quality",
		description:
			"Si buscas un lugar donde la grandeza y la espectacularidad cobran vida, este es el sitio. Nuestra carpa central transforma cada evento en una experiencia memorable, alojando espectáculos circenses, exhibiciones de gran formato y eventos de alto impacto.",
		certificates: [
			"/images/icons/certificate-1.webp",
			"/images/icons/certificate-2.webp",
			"/images/icons/certificate-3.webp",
		],
	},
	{
		id: 3,
		image: "/images/foro-3.webp",
		title: "ZONAS VERDES",
		rating: "Noviembre 6",
		duration: "6PM - 10PM",
		quality: "4k Quality",
		description:
			"Diseñadas para ser el epicentro de la diversión, los festivales y la cultura. Aquí, podrás disfrutar de una variedad de opciones gastronómicas, recreativas y de entretenimiento al aire libre, creando un entorno perfecto para explorar y relajarte en medio de la naturaleza.",
		certificates: [
			"/images/icons/certificate-1.webp",
			"/images/icons/certificate-2.webp",
			"/images/icons/certificate-3.webp",
		],
	},
	{
		id: 4,
		image: "/images/foro.jpg",
		title: "FORO",
		rating: "Mayo 16",
		duration: "6PM - 10PM",
		quality: "4k Quality",
		description:
			"Descubre un espacio diseñado para envolverte en la magia de la música y el show. Con una estructura de graderías temporales y modulares que se adaptan a cada evento, este foro garantiza una conexión única con tus artistas favoritos.",
		certificates: [
			"/images/icons/certificate-1.webp",
			"/images/icons/certificate-2.webp",
			"/images/icons/certificate-3.webp",
		],
	},
	{
		id: 5,
		image: "/images/foro-2.webp",
		title: "ARENA",
		rating: "Octubre 10 al 13",
		duration: "6PM - 10PM",
		quality: "4k Quality",
		description:
			"Si buscas un lugar donde la grandeza y la espectacularidad cobran vida, este es el sitio. Nuestra carpa central transforma cada evento en una experiencia memorable, alojando espectáculos circenses, exhibiciones de gran formato y eventos de alto impacto.",
		certificates: [
			"/images/icons/certificate-1.webp",
			"/images/icons/certificate-2.webp",
			"/images/icons/certificate-3.webp",
		],
	},
	{
		id: 6,
		image: "/images/foro-3.webp",
		title: "ZONAS VERDES",
		rating: "Noviembre 6",
		duration: "6PM - 10PM",
		quality: "4k Quality",
		description:
			"Diseñadas para ser el epicentro de la diversión, los festivales y la cultura. Aquí, podrás disfrutar de una variedad de opciones gastronómicas, recreativas y de entretenimiento al aire libre, creando un entorno perfecto para explorar y relajarte en medio de la naturaleza.",
		certificates: [
			"/images/icons/certificate-1.webp",
			"/images/icons/certificate-2.webp",
			"/images/icons/certificate-3.webp",
		],
	},
];

const RotateMovieSlider = () => {
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
		<div className="movie-slider rotate-movie-slider py-80 position-relative" id="section-3">
			{/* <Image
				src="/images/aro.png"
				alt=""
				width={1300}
				height={1080}
				quality={75}
				className="position-absolute aro"
				style={{
					objectFit: "cover",
				}}
			/> */}

			{/* <Image className="position-absolute logo" src="/images/logo-green.png" alt="logo" width={249} height={95} /> */}

			<div className="container pt-100 z-1">
				<div className="d-flex flex-column justify-content-center align-items-center">
					<h2 className="section-title large lh-1 z-1 text-center color-cfd952">
						UN LUGAR <br /> PARA TODOS
					</h2>
					<p className="responsive--description fw-medium col-md-5 color-white text-center color-cfd952">
						Vive Claro te sumergirá en un universo vibrante de emociones, con
						lugares versátiles diseñados para vivir momentos inolvidables.
					</p>
				</div>
			</div>
		</div>
	);
};

export default RotateMovieSlider;
