import Header from "@/components/Header/header";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ArrowLeft } from "lucide-react";

export default function Project(): JSX.Element {
  interface projectsObject {
    Nome: string;
    Repositorio: React.ReactElement;
    Deploy: React.ReactElement | "N/A";
    // header: string;
  }

  const projects: projectsObject[] = [
    { Nome: "Portfólio", Repositorio: <a href="https://github.com/themyntt/portfolio">github.com/portfólio</a>, Deploy: "N/A"},
    { Nome: "basicT", Repositorio: <a href="https://github.com/themyntt/basicT">github.com/basicT</a>,Deploy: <a href="https://github.com/theMyntt/basicT/releases/">github.com/releases</a>},
    { Nome: "Luxure", Repositorio: <a href="https://github.com/themyntt/luxure">github.com/Luxure</a>,Deploy: "N/A"},
    { Nome: "Hub Eyes", Repositorio: <a href="https://github.com/themyntt/hub-eyes">github.com/HubEyes</a>,Deploy: "N/A"},
    { Nome: "Manage++", Repositorio: <a href="https://github.com/themyntt/ManagePP">github.com/Manage++</a>,Deploy: "N/A"},
    { Nome: "SGA", Repositorio: <a href="https://github.com/themyntt/SGA">github.com/SGA</a>,Deploy: "N/A"},
  ];

  const columns: string[] = [
    "Nome",
    "Repositorio",
    "Deploy"
  ]

  return (
    <div className="projects">
      <Header
        menuItems={["Inicio", "Sobre", "Projetos", "Contato"]}
        hrefItems={["/", "./#about", "project", "./#contact"]}
      />
      <div className="container">
        <h1>Meus projetos</h1> <br />
        <DataTable value={projects} tableStyle={{ minWidth: '25rem' }}>
          {columns.map((item: string, index: number) => (
            <Column key={index} field={item} header={item}></Column>
          ))}
        </DataTable>
        <br />
        <button style={{display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => window.location.href = "/"}><ArrowLeft /> Voltar</button>
      </div>
    </div>
  );
}
