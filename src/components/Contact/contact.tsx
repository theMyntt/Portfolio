import { useState } from "react";

export default function Contact(): JSX.Element {
  const [nameText, setNameText] = useState<string>("");

  function toWhatsapp(): void {
    const whatsappText = `Olá, meu nome é ${nameText} e eu vim pelo seu portfólio`;
    window.open(`https://wa.me/5511992046942?text=${whatsappText}`, "_blank");
  }

  return (
    <div id="contact" className="container contact">
      <h2>Links importantes</h2>
      <a
        href="https://drive.google.com/file/d/1VyYzAlm1i8H6AtbSx03Iqh8iQjgWJ_Ap/view?usp=sharing"
        target="_blank"
      >
        <img src="https://img.shields.io/badge/curriculum-black?style=for-the-badge&logo=adobeacrobatreader" />
      </a>
      <a
        href="https://www.linkedin.com/in/gabriel-araújo-lima-90667726a"
        target="_blank"
      >
        <img src="https://img.shields.io/badge/linkedin-blue?style=for-the-badge&logo=linkedin" />
      </a>
      <a href="mailto:gabriel.araujo2902@outlook.com" target="_blank">
        <img src="https://img.shields.io/badge/email-white?style=for-the-badge&logo=gmail" />
      </a>
      <p style={{ fontSize: 11 }}>
        Apertando uma dessas opções acima, você será redirecionado.
      </p>
      <br />
      <h3>Se você preferir, que tal me mandar um Whatsapp?</h3>
      <form onSubmit={() => toWhatsapp()} method="get">
        <input
          type="text"
          name="name"
          placeholder="Digite aqui seu nome"
          value={nameText}
          onChange={(e) => setNameText(e.target.value)}
        />{" "}
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
      <br /> <br />
    </div>
  );
}
