import Header from "@/components/Header/header";
import Card from "@/components/Card/card";

import { ArrowLeft } from "lucide-react";

import "./scss/project.scss"

export default function Project(): JSX.Element {
  const href = "https://github.com/themyntt/"

  return (
    <div className="projects">
      <Header
        menuItems={["Inicio", "Sobre", "Projetos", "Contato"]}
        hrefItems={["/", "./#about", "project", "./#contact"]}
      />
      <div className="container project">
        <h1>Meus projetos</h1> <br />
        <div id="align-card">
          <Card title="SGA" desc="Sistema de Gerenciamento de Alunos desenvolvido com ReactTS, Python Flask e MySQL." href={`${href}sga`} img="/sga.png"/>
          <Card title="BasicT" desc="Sistema PDV desenvolvido com PHP e SQLite." href={`${href}basict`} img="/basict.png"/>
          <Card title="Auth System Api" desc="API para registrar e fazer login desenvolvida com NestTS" href={`${href}auth-system-api`} img="/auth.png"/>
          <Card title="Hub Eyes" desc="Projeto não decidio ainda. Desenvolvido com HTML, CSS, Javascript, JQuery e Flask" href={`${href}hub-eyes`} img="/hub-eyes.png"/>
          <Card title="Financee" desc="Aplicativo de finanças desenvolvido com React Nativo" href={`${href}financee`} img="/financee.png"/>
        </div>
        <br />
        <button style={{display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => window.location.href = "/"}><ArrowLeft /> Voltar</button>
      </div>
    </div>
  );
}
