import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { projects } from "../data/projects";
import { SectionTitle } from "./Shared";
import ProjectModal from "./ProjectModal";
const categories = [
  "Todos",
  "Cozinhas",
  "Quartos",
  "Salas",
  "Home offices",
  "Comerciais",
];
export default function ProjectsGallery() {
  const [category, setCategory] = useState("Todos");
  const [selected, setSelected] = useState(null);
  const shown =
    category === "Todos"
      ? projects
      : projects.filter((p) => p.category === category);
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <div className="heading-row">
          <SectionTitle eyebrow="NOSSO PORTFÓLIO">
            Projetos que
            <br />
            <em>transformam espaços.</em>
          </SectionTitle>
          <p className="heading-description">
            Ideias que ganham forma.
            <br />
            Espaços que ganham significado.
          </p>
        </div>
        <div
          className="filter-row"
          role="group"
          aria-label="Filtrar projetos por ambiente"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={c === category ? "active" : ""}
              aria-pressed={c === category}
            >
              {c}
              {c === category && <span>↗</span>}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          {shown.length} projetos em {category}
        </p>
        <div className="projects-grid">
          {shown.map((project, i) => (
            <article className="project-card" key={project.id}>
              <button
                className="project-image"
                onClick={() => setSelected(project)}
                aria-label={`Ver projeto ${project.name}`}
              >
                <img
                  src={project.image}
                  loading="lazy"
                  alt={`${project.name}: ${project.concept.toLowerCase()}`}
                />
                <span className="project-number">
                  {String(i + 1).padStart(2, "0")} / LINEA CASA
                </span>
                <span className="project-plus">
                  <Plus />
                </span>
              </button>
              <div className="project-caption">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                </div>
                <button
                  className="project-open"
                  onClick={() => setSelected(project)}
                  aria-label={`Ver projeto ${project.name}`}
                >
                  <span>Ver projeto</span>
                  <ArrowUpRight size={21} />
                </button>
              </div>
              <p className="project-description">{project.description}</p>
            </article>
          ))}
        </div>
        <p className="demo-note">
          Uma coleção de possibilidades. Projetos conceituais e imagens
          ilustrativas para este site demonstrativo.
        </p>
      </div>
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
