import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Anton&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				></link>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="viveclaro.co" />
				<meta property="og:title" content="Viveclaro" />
				<meta property="og:description" content="Disfruta en familia y con amigos de espacios únicos, tanto cubiertos como al aire libre" />
				<meta property="og:image" content="https://www.viveclaro.co/images/logo-red-opengra.png" />
				<meta property="og:locale" content="es_ES" />
				<meta property="og:site_name" content="viveclaro" />
				
				<meta property="og:video" content="https://www.viveclaro.co/video/video-hero-new.mp4" />
				<meta property="og:video:type" content="video/mp4" />
				<meta property="og:video:width" content="320" />
				<meta property="og:video:height" content="540" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
