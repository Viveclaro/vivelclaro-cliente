import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const movies = [
	{
		id: 1,
		title: "Fase 1",
		image: "/images/location/fase-1.png",
		icono: "/images/location/fase-1.png",
		details: [
			{
				text: "2 Bebederos para aves",
				icon: "/images/bebederos.svg",
			},
			{
				text: "2 Hoteles de insectos",
				icon: "/images/insectos.svg",
			},
			{
				text: "Más de 40 especies y 300 individuos arbóreos",
				icon: "/images/arboles.svg",
			},
			{
				text: "12 Especies herbáceas terrestres",
				icon: "/images/hiervas.svg",
			},
		],
		modalDetails: [
			"2 bebederos para aves",
			"2 hoteles de insectos",
			"40 especies: 11 árboles, 11 arbolitos, 14 arbustos y 12 herbáceas.",
			"363 individuos arbóreos: 75 árboles, 132 arbolitos, 156 arbustos.",
			"12 especies herbáceas terrestres, 4720 individuos.",
			"3 especies herbáceas acuáticas, 48 individuos.",
		],
		modalImages: ["/images/fase1/fase-1.jpg", "/images/fase1/fase-2.jpg"],
		buttonText: "Conoce más detalles aquí",
		color: "#cfd952",
	},
	{
		id: 2,
		title: "Fase 2",
		image: "/images/location/fase-2.png",
		details: [
			{
				text: "Más de 40 especies de árboles y arbustos",
				icon: "/images/arbustos.svg",
			},
			{
				text: "Más 400 individuos arbóreos",
				icon: "/images/arboles.svg",
			},
			{
				text: "4 Especies herbáceas terrestres",
				icon: "/images/hiervas.svg",
			},
			{
				text: "2 Bebederos para aves",
				icon: "/images/bebederos.svg",
			},
		],
		modalDetails: [
			"41 especies: 15 árboles, 10 arbolitos, 12 arbustos y 4 herbáceas.",
			"402 individuos arbóreos: 144 árboles, 136 arbolitos, 122 arbustos.",
			"4 especies herbáceas terrestres, 172 individuos",
			"2 bebederos para aves",
			"2 hoteles de insectos",
		],
		modalImages: ["/images/fase2/fase-1.jpg", "/images/fase2/fase-2.jpg"],
		buttonText: "Conoce más detalles aquí",
		color: "#cfd952",
	},
	{
		id: 3,
		title: "Fase 3",
		image: "/images/location/fase-3.png",
		details: [
			{
				text: "Más de 50 especies entre árboles, arbustos",
				icon: "/images/arbustos.svg",
			},
			{
				text: "Más de 700 individuos arbóreos",
				icon: "/images/arboles.svg",
			},
		],
		modalDetails: [
			"51 especies: 18 árboles, 12 arbolitos, 17 arbustos, 4 herbáceas.",
			"705 individuos arbóreos: 233 árboles, 244 arbolitos, 228 arbustos.",
			"702 herbáceas.",
		],
		modalImages: [
			"/images/fase3/fase-1.jpg",
			"/images/fase3/fase-2.jpg",
			"/images/fase3/fase-3.jpg",
			"/images/fase3/fase-4.jpg",
			"/images/fase3/fase-5.jpg",
		],
		buttonText: "Conoce más detalles aquí",
		color: "#cfd952",
	},
	{
		id: 4,
		title: "Fase 4",
		image: "/images/location/fase-4.png",
		details: [
			{
				text: "2 Bebederos para aves",
				icon: "/images/bebederos.svg",
			},
			{
				text: "2 Hoteles de insectos",
				icon: "/images/insectos.svg",
			},
			{
				text: "Más de 35 especies y 390 individuos arbóreos",
				icon: "/images/arboles.svg",
			},
			{
				text: "11 Especies herbáceas",
				icon: "/images/hiervas.svg",
			},
		],
		modalDetails: [
			"2 bebederos para aves",
			"2 hoteles de insectos",
			"35 especies: 13 árboles, 11 arbolitos, 11 arbustos.",
			"390 individuos arbóreos: 111 árboles, 164 arbolitos, 130 arbustos.",
			"11 especies herbáceas terrestres, 1027 individuos.",
			"3 especies herbáceas acuáticas, 132 individuos.",
		],
		modalImages: [
			"/images/fase4/fase-1.jpg",
			"/images/fase4/fase-2.jpg",
			"/images/fase4/fase-3.jpg",
		],
		buttonText: "Conoce más detalles aquí",
		color: "#cfd952",
	},
];

const NewestReleases = () => {
	const [currentMovie, setCurrentMovie] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const openModal = (movie, index) => {
		setCurrentMovie(movie);
		setCurrentIndex(index);
		document.querySelector(".modal-overlay").classList.add("active");
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setCurrentMovie(null);
		document.querySelector(".modal-overlay").classList.remove("active");
		document.body.style.overflow = "auto";
	};

	const prevMovie = (e) => {
		e.stopPropagation();
		if (currentIndex > 0) {
			const newIndex = currentIndex - 1;
			setCurrentIndex(newIndex);
			setCurrentMovie(movies[newIndex]);
		}
	};

	const nextMovie = (e) => {
		e.stopPropagation();
		if (currentIndex < movies.length - 1) {
			const newIndex = currentIndex + 1;
			setCurrentIndex(newIndex);
			setCurrentMovie(movies[newIndex]);
		}
	};

	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === "Escape") {
				closeModal();
			}
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, []);

	return (
		<>
			<div className="design-area pt-80 bckg-004437" id="section-6">
				<div className="hl-container d-flex align-items-center justify-content-between mb--20">
					<div className="position-relative container z-1">
						<div className="d-block justify-content-start">
							<h2 className="section-title large mb-30 lh-1 text-center">
								CONOCE LA PROPUESTA DE DISEÑO <br /> PAISAJÍSTICO DE VIVE CLARO
							</h2>
							<p className="responsive--description fw-medium mb-4 col-md-10 color-white text-center m-auto">
								El diseño diseño paisajístico de Vive Claro{" "}
								<strong>
									busca consolidar un entorno natural que fomente la diversidad
									vegetal y la integración de la fauna urbana
								</strong>
								. Mediante la incorporación de{" "}
								<strong>herbáceas, arbustos y árboles</strong>, crearemos
								espacios visualmente atractivos que, además de{" "}
								<strong>
									embellecer el paisaje, ofrecen refugio y alimentación a la
									fauna
								</strong>
								, permitiendo su libre movilidad a lo largo del área. Este
								enfoque busca armonizar la naturaleza con el entorno urbano,
								creando un espacio sostenible y lleno de vida.
							</p>
						</div>
					</div>
				</div>
				<div className="pt-80">
					<div className="hl-container">
						<div className="row pb-80 gap-4 gap-lg-0">
							{movies.map((movie, index) => (
								<div
									className="col-md-3"
									onClick={() => openModal(movie, index)}
									style={{ cursor: "pointer" }}
								>
									<div className="thumb-title">{movie.title}</div>
									<div className="card">
										<ul>
											{movie.details.map((detail, index) => (
												<li key={index}>
													<span>
														{detail.icon && (
															<img
																src={detail.icon}
																alt="icon"
																width="20"
																height="20"
															/>
														)}
													</span>
													{detail.text}
												</li>
											))}
										</ul>
									</div>
									<span
										className="card-button"
										style={{ backgroundColor: movie.color }}
									>
										{movie.buttonText}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Modal */}
			<div className="modal-overlay" onClick={closeModal}>
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					{currentMovie && (
						<>
							<button
								className="modal-close"
								onClick={closeModal}
								style={{ backgroundColor: currentMovie.color }}
							>
								×
							</button>

							<div
								className="modal-info"
								style={{ backgroundColor: currentMovie.color }}
							>
								<h3 className="modal-title">
									Inventario {currentMovie.title}
									<span>
										<img
											src="/images/bebederos-green.svg"
											alt="icon"
											width="40"
											height="40"
										/>
										<img
											src="/images/insectos-green.svg"
											alt="icon"
											width="40"
											height="40"
										/>
										<img
											src="/images/arboles-green.svg"
											alt="icon"
											width="40"
											height="40"
										/>
										<img
											src="/images/hiervas-green.svg"
											alt="icon"
											width="40"
											height="40"
										/>
									</span>
								</h3>
								<ul>
									{currentMovie.modalDetails.map((detail, index) => (
										<li key={index}>{detail}</li>
									))}
								</ul>
							</div>

							{/* <div className="modal-image-container">
								<Swiper
									modules={[Navigation]}
									navigation
									spaceBetween={0}
									slidesPerView={1}
								>
									{currentMovie.modalImages.map((image, index) => (
										<SwiperSlide key={index}>
											<Image
												src={image}
												alt={`${currentMovie.title} imagen ${index + 1}`}
												width={570}
												height={408}
												style={{
													objectFit: "contain",
													objectPosition: "center",
												}}
												className="modal-slide-image"
											/>
										</SwiperSlide>
									))}
								</Swiper>
								{currentIndex > 0 && (
									<button
										className="modal-navigation modal-prev"
										onClick={prevMovie}
									>
										&#8249;
									</button>
								)}

								{currentIndex < movies.length - 1 && (
									<button
										className="modal-navigation modal-next"
										onClick={nextMovie}
									>
										&#8250;
									</button>
								)}
							</div> */}

							
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default NewestReleases;
