import Header from "@components/Header/header";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

import "./scss/home.scss";
import Footer from "@/components/Footer/footer";

const messagesList: string[] = ["Front-end", "Back-end", "Full-stack"];

export default function Home() {
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [messages, setMessages] = useState<string>("Full-stack");
  const [nameText, setNameText] = useState<string>("");

  function toWhatsapp(): void {
    const whatsappText = `Olá, meu nome é ${nameText} e eu vim pelo seu portfólio`;
    window.open(`https://wa.me/5511992046942?text=${whatsappText}`, "_blank");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(messagesList[messageIndex]);
      setMessageIndex((prevIndex) => (prevIndex + 1) % messagesList.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <div className="app-container home">
      <Header
        menuItems={["Inicio", "Sobre", "Projetos", "Contato"]}
        hrefItems={["/", "#about", "project", "#contact"]}
      />
      <div className="home-container">
        <div className="brand-content">
          <div>
            <p id="brand-text-p">Olá, meu nome é Gabriel Araújo e eu sou um</p>
            <h1>
              Desenvolvedor <span style={{ color: "#ba181b" }}>{messages}</span>
            </h1>
            <a href="project">
              <span>Conheca meus projetos</span>
              <ArrowRight className="arrow-left" id="left1" />
            </a>
          </div>
          <div className="brand-image">
            <img src="/eu.jpg" alt="Eu" id="me-image" />
          </div>
        </div>
      </div>
      <div className="container about-me" id="about">
        <article>
          <h2>Sobre mim</h2> <br />
          <p>
            Meu nome é Gabriel Araújo, sou um desenvolvedor Full-stack,
            atualmente tenho 16 anos.
          </p> <br />
          <p>
            Hoje faço o curso técnico em Desenvolvimento de Sistemas na{" "}
            <a
              href="https://www.etechoracio.com.br/"
              style={{ textDecoration: "underline" }}
            >
              Etec Horácio
            </a>
            , estou no 2ºano. Além disso, fiz cursos extracurrículares em
            instituições como a <a href="">Fundação Bradesco</a> e{" "}
            <a href="">Escola SENAI</a>.
          </p> <br />
          <p>Minhas habilidades são:</p>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              width="48px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              width="48px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              width="48px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              width="48px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              width="48px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              width="48px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              width="48px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              width="48px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              width="48px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
              width="48px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/msdos/msdos-original.svg"
              width="48px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
              width="48px"
            />
          </div>
        </article>
      </div>
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
      <Footer />
    </div>
  );
}
