import { Button } from "@shared/Button";
import styles from "./contact.module.scss";

export default function Contact() {
	return (
		<section className={styles.containerContact}>
			<h2>Fale conosco</h2>

			<form className={styles.formContact}>
				<input
					type="email"
					name="email"
					placeholder="Diga o seu melhor email"
				/>

				<input type="text" name="subject" placeholder="Assunto" />

				<textarea
					name="message"
					id="message"
					cols={30}
					rows={10}
					placeholder="Escreva a sua mensagem"
				></textarea>

				<Button title="Enviar" transparentEffect />
			</form>
		</section>
	);
}
