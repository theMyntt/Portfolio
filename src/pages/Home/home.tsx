import Header from "@components/Header/header";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

import "./scss/home.scss";
import Footer from "@/components/Footer/footer";
import Logos from "@/components/Logo/logo";
import Contact from "@/components/Contact/contact";

const messagesList: string[] = ["Front-end", "Back-end", "Full-stack"];

export default function Home() {
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [messages, setMessages] = useState<string>("Full-stack");

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
        <img src="eu.jpg" className="mobile-only" />
        <article>
          <h2>Sobre mim</h2> <br />
          <p>
            Meu nome é Gabriel Araújo, sou um desenvolvedor Full-stack,
            atualmente tenho 16 anos.
          </p>{" "}
          <br />
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
          </p>{" "}
          <br />
          <p>Minhas habilidades são:</p>
          <Logos />
        </article>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
