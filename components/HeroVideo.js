"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeroVideo = () => {
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    
    if (video) {
      // Intenta reproducir el video automáticamente
      const playVideo = async () => {
        try {
          await video.play();
        } catch (err) {
          console.log("Autoplay prevented:", err);
          setShowPlayButton(true);
        }
      };

      // Configuraciones adicionales para iOS
      video.playsInline = true;
      video.muted = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('muted', '');
      video.setAttribute('autoplay', '');
      
      // Intenta reproducir
      playVideo();

      // Event listener para cuando el video se pausa
      video.addEventListener('pause', () => {
        setShowPlayButton(true);
      });

      return () => {
        video.removeEventListener('pause', () => {
          setShowPlayButton(true);
        });
      };
    }
  }, []);

  const handlePlayClick = () => {
    const video = document.querySelector('video');
    if (video) {
      video.play();
      setShowPlayButton(false);
    }
  };

  return (
    <div className="track track-video" id="section-0">
      <div className="brick-wrap">
        <div className="text-video container position-absolute top-40 start-50 translate-middle mt-5 z-2">
          <div className="container mb-45">
            <div className="d-block justify-content-center mb-40 text-center">
              {/* <Image
                src="/images/logotipo-viveclaro-white.png"
                alt="Vive Claro Logo"
                width={256}
                height={144}
                priority
              />
              <h2
                className="section-title large mb-20 lh-1"
                data-cs-delay="0.8"
                data-cs-stagger="0.07"
              >
                ¡TE DAMOS LA BIENVENIDA!
              </h2>
              <p className="responsive--description fw-medium mb-4 color-white col-md-10 m-auto">
                El primer y más versátil espacio multipropósito para la cultura
                y el entretenimiento en Colombia.
              </p> */}
            </div>
          </div>
        </div>
        
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/poster-hero.jpg" // Asegúrate de añadir una imagen de poster
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            zIndex: 1
          }}
        >
          <source src="/video/video-hero-new.mp4" type="video/mp4" />
          <source src="/video/video-hero-new.webm" type="video/webm" /> {/* Opcional: formato alternativo */}
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Botón de reproducción que aparece si falla el autoplay */}
        {showPlayButton && (
          <button
            onClick={handlePlayClick}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-4 cursor-pointer hover:bg-opacity-70 transition-all"
            style={{
              zIndex: 3
            }}
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="white"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroVideo;