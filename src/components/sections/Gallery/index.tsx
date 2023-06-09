import "./gallery.styles.scss";

export default function Gallery() {
	return (
		<section className="container--gallery">
			<span id="beneficios"></span>

			<div className="title--gallery">
				<span className="hashtag fw-md">use a hashtag #brasilisverigudi</span>
				<h2 className="fw-bd">Nosso mural de Experiências</h2>
			</div>

			<div className="photos-gallery">
				<img
					className="photo"
					src="assets/images/gallery-image1@2x.png"
					alt="Homem brincando com um bebê"
				/>
				<img
					className="photo"
					src="assets/images/gallery-image2@2x.png"
					alt="Grupo de crianças pulando"
				/>
				<img
					className="photo"
					src="assets/images/gallery-image3@2x.png"
					alt="Homem tirando foto com cachorro"
				/>
				<img
					className="photo"
					src="assets/images/gallery-image4@2x.png"
					alt="Selfie de um homem"
				/>
				<img
					className="photo"
					src="assets/images/gallery-image5@2x.png"
					alt="Selfie de uma mulher ciclista"
				/>
				<img
					className="photo"
					src="assets/images/gallery-image6@2x.png"
					alt="Selfie de grupo de mulheres sorrindo"
				/>
			</div>
		</section>
	);
}
