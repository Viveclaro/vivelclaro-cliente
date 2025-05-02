import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const categories = [
	{
		id: 1,
		image: "/images/clients/beneficio.png",
		title: "⁠Beneficios",
		detail: "⁠en alimentos y bebidas",
	},
	{
		id: 2,
		image: "/images/clients/preventa.png",
		title: "Preventa",
		detail: "de boletería",
	},
	{
		id: 3,
		image: "/images/clients/parqueadero.png",
		title: "Parqueadero",
		detail: "preferente",
	},
	{
		id: 4,
		image: "/images/clients/fila-rapida.png",
		title: "⁠Fila",
		detail: "rápida",
	},
	{
		id: 5,
		image: "/images/clients/vip.png",
		title: "⁠Zonas",
		detail: "VIP",
	},
	{
		id: 6,
		image: "/images/clients/beneficio.png",
		title: "⁠Beneficios",
		detail: "⁠en alimentos y bebidas",
	},
	{
		id: 7,
		image: "/images/clients/preventa.png",
		title: "Preventa",
		detail: "de boletería",
	},
	{
		id: 8,
		image: "/images/clients/parqueadero.png",
		title: "Parqueadero",
		detail: "preferente",
	},
	{
		id: 9,
		image: "/images/clients/fila-rapida.png",
		title: "⁠Fila",
		detail: "rápida",
	},
	{
		id: 10,
		image: "/images/clients/vip.png",
		title: "⁠Zonas",
		detail: "VIP",
	},
];

const CategoriesSlider = () => {
	return (
		<div className="beneficios pb-80" id="section-4">
			<div className="col-md-6 m-auto">
				<div className="position-relative center-title z-1">
					<div className="d-block justify-content-start mb-40">
						<h3 className="position-relative section-title small mb-20 lh-1 bckg-000000">VIVE BENEFICIOS POR SER CLIENTE CLARO</h3>
						<p className="responsive--description fw-medium mt-30 text-center color-white">
							Conoce los excelentes beneficios que tenemos para ti.
						</p>
					</div>
				</div>
			</div>
			<div className="section-bckg">
				<div className="category pt-0 pb-20">
					<Swiper
						modules={[Autoplay]}
						speed={7000}
						spaceBetween={30}
						loop={true}
						autoplay={{
							delay: 1,
							pauseOnMouseEnter: true,
							disableOnInteraction: false,
						}}
						breakpoints={{
							0: { slidesPerView: 2 },
							576: { slidesPerView: 2 },
							768: { slidesPerView: 2 },
							992: { slidesPerView: 3 },
							1200: { slidesPerView: 5 },
							1500: { slidesPerView: 5 },
							1700: { slidesPerView: 5, spaceBetween: 40 },
						}}
						className="categories-slider"
					>
						{categories.map((category) => (
							<SwiperSlide key={category.id} className="category-card">
								<div className="thumbnail">
									<Image
										src={category.image}
										alt={category.title}
										width={80}
										height={80}
										className=""
									/>
								</div>
								<div className="details">
									<h3 className="title">{category.title}</h3>
									<p className="detail">{category.detail}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
      {/* <p className="col-md-7 m-auto text-center">
        *Al ingresar esta información, autorizas que tus datos sean tratados para fines informativos exclusivos de nuestra actividad comercial. Tus datos personales serán tratados con confidencialidad.
      </p> */}
		</div>
	);
};

export default CategoriesSlider;
