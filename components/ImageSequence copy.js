"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const ImageSequence = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const canvas = canvasRef.current;
		if (!canvas) return;

		const context = canvas.getContext("2d");
		if (!context) return;

		// Configuración inicial ajustada a 94 frames
		canvas.width = 1600;
		canvas.height = 1100;

		const frameCount = 204; // 0-94 = 95 imágenes
		const scrollableFrames = 50; // Ajustado para una transición más larga
		const images = [];
		let imagesLoaded = 0;

		const position = {
			frame: 0,
			mergingFrame: 0,
		};

		let isLooping = false;

		// Función de renderizado
		const render = () => {
			context.clearRect(0, 0, canvas.width, canvas.height);
			const currentImage = images[position.frame];
			if (
				currentImage &&
				currentImage.complete &&
				currentImage.naturalHeight !== 0
			) {
				try {
					context.drawImage(currentImage, 0, 0);
				} catch (error) {
					console.error("Error al dibujar imagen:", error);
				}
			}
		};

		// Carga de imágenes
		const loadImage = (index) => {
			return new Promise((resolve, reject) => {
				if (typeof window === 'undefined') {
					reject(new Error('Window is not defined'));
					return;
				}

				const img = new window.Image(); 

				img.onload = () => {
					images[index] = img;
					imagesLoaded++;
					if (
						imagesLoaded === 1 ||
						imagesLoaded === frameCount ||
						imagesLoaded % 10 === 0
					) {
						console.log(`Cargando imágenes: ${imagesLoaded}/${frameCount}`);
					}
					resolve(img);
				};

				img.onerror = (err) => {
					console.error(`Error cargando imagen ${index}:`, err);
					reject(err);
				};

				img.src = `/video/video_${index.toString().padStart(3, "0")}.webp`;
				// img.src = `https://moonbase.nyc3.cdn.digitaloceanspaces.com/lvdv-brick-dev/webp/frame_${index.toString().padStart(3, '0')}.webp`;
				// img.src = `/video/video_${index.toString().padStart(3, '0')}.webp`;
			});
		};

		const positionTo = gsap.quickTo(position, "mergingFrame", {
			onUpdate: () => {
				position.frame = Math.round(position.mergingFrame);
				render();
			},
			duration: 0.5,
			onComplete: () => (isLooping = false),
		});

		let scrollAnimation;
		let loop;

		const initAnimations = () => {
			scrollAnimation = gsap.to(position, {
				frame: scrollableFrames - 1,
				snap: "frame",
				ease: "none",
				onUpdate: () => {
					if (isLooping) {
						loop.paused() && positionTo(position.frame);
					} else {
						render();
					}
				},
				scrollTrigger: {
					scrub: 0.5,
					trigger: ".track",
					start: "top top",
					end: "bottom bottom",
					pin: ".brick-wrap",
					markers: false,
					onLeave: function () {
						isLooping = true;
						positionTo.tween.pause();
						loop.play(0);
					},
					onEnterBack: function () {
						loop.pause();
						positionTo(position.frame);
					},
				},
			});

			loop = gsap.fromTo(
				position,
				{ frame: scrollableFrames },
				{
					frame: frameCount - 1,
					duration: 10, // Ajustado para más frames
					repeat: -1,
					snap: "frame",
					ease: "none",
					onUpdate: () => {
						position.mergingFrame = position.frame;
						positionTo.tween.invalidate();
						render();
					},
					paused: true,
				}
			);
		};

		// Carga inicial de imágenes
		const loadAllImages = async () => {
			try {
				// console.log('Iniciando carga de imágenes...');
				await Promise.all(
					Array.from({ length: frameCount }, (_, i) => loadImage(i))
				);
				// console.log('✅ Todas las imágenes cargadas correctamente');
				render();
				initAnimations();
			} catch (error) {
				console.error("❌ Error cargando las imágenes:", error);
			}
		};

		loadAllImages();

		// Cleanup
		return () => {
			if (scrollAnimation) scrollAnimation.kill();
			if (loop) loop.kill();
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<div className="track">
			<div className="brick-wrap">
				<div className="container position-absolute top-40 start-50 translate-middle mt-5 z-2">
					<div className="container mb-45">
						<div className="d-block justify-content-center mb-40 text-center">
						<Image
                src="/images/logotipo-viveclaro-white.png"
                alt="Vive Claro Logo"
                width={256}
                height={144}
                priority
              />
							<h2 className="section-title large mb-20 lh-1">
								¡TE DAMOS LA BIENVENIDA!
							</h2>
							<p className="responsive--description fw-medium mb-4 color-white">
								El primer y más versátil espacio multipropósito para la cultura y el entretenimiento en Colombia.
							</p>
						</div>
					</div>
				</div>
				<canvas
					ref={canvasRef}
					style={{
						display: "block",
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			</div>
		</div>
	);
};

export default ImageSequence;
