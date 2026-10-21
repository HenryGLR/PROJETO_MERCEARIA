import {
  Ruler,
  Scan,
  Layers,
  Handshake,
  ArrowUpRight,
  Quote,
  Check,
} from "lucide-react";
import { useState } from "react";
import { SectionTitle, WhatsAppLink } from "./Shared";
import { images } from "../data/projects";
const advantages = [
  [
    Ruler,
    "Projeto personalizado",
    "Cada móvel é desenvolvido considerando seu espaço, sua rotina e suas necessidades.",
  ],
  [
    Scan,
    "Aproveitamento inteligente",
    "Soluções pensadas para utilizar melhor cada centímetro do ambiente.",
  ],
  [
    Layers,
    "Materiais selecionados",
    "Opções de acabamentos, cores e materiais para diferentes estilos de projeto.",
  ],
  [
    Handshake,
    "Acompanhamento completo",
    "Orientação desde as primeiras ideias até a montagem final.",
  ],
];
export function Differentials() {
  return (
    <section className="section differentials">
      <div className="container">
        <div className="intro-heading">
          <span className="eyebrow">
            <span />A ESSÊNCIA DO SOB MEDIDA
          </span>
          <h2>
            Cada espaço merece
            <br />
            um projeto <em>único.</em>
          </h2>
          <p>
            Mais do que preencher um ambiente,
            <br />é sobre fazer parte da sua vida.
          </p>
        </div>
        <div className="advantages-grid">
          {advantages.map(([Icon, title, text]) => (
            <article key={title}>
              <Icon size={29} strokeWidth={1.2} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const steps = [
  [
    "Primeiro contato",
    "Você compartilha medidas, referências e informações sobre o ambiente.",
  ],
  [
    "Entendimento do projeto",
    "Conhecemos suas necessidades, seu estilo e as prioridades para o espaço.",
  ],
  [
    "Desenvolvimento",
    "Planejamos a distribuição, os materiais e os acabamentos.",
  ],
  [
    "Aprovação e produção",
    "Com o projeto aprovado, os móveis seguem para fabricação.",
  ],
  [
    "Entrega e instalação",
    "A montagem e os ajustes finais dão vida ao seu novo ambiente.",
  ],
];
export function Process() {
  return (
    <section id="processo" className="section process">
      <div className="container">
        <div className="heading-row">
          <SectionTitle eyebrow="UM CAMINHO FEITO EM CONJUNTO">
            Do primeiro desenho
            <br />
            <em>à instalação.</em>
          </SectionTitle>
          <p className="heading-description">
            Você participa de cada escolha.
            <br />
            Nós cuidamos de cada detalhe.
          </p>
        </div>
        <ol className="process-steps">
          {steps.map(([title, text], i) => (
            <li key={title}>
              <span className="step-number">
                0{i + 1}
                <span />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <a className="text-link" href="#contato">
          Vamos dar o primeiro passo? <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
export function About() {
  return (
    <section id="sobre" className="about">
      <div className="about-image">
        <img
          src={images.craft}
          loading="lazy"
          alt="Marceneiro trabalhando uma peça de madeira na oficina"
        />
        <div className="about-image-label">
          <span>MATÉRIA, FORMA E AFETO.</span>
          <span>LINEA CASA</span>
        </div>
      </div>
      <div className="about-content">
        <SectionTitle eyebrow="NOSSA ESSÊNCIA">
          Design, funcionalidade
          <br />e cuidado em <em>cada detalhe.</em>
        </SectionTitle>
        <p>
          A Linea Casa nasceu para transformar ambientes por meio de soluções
          feitas sob medida. Cada projeto é pensado para unir estética,
          organização e funcionalidade, respeitando o espaço e a personalidade
          de cada cliente.
        </p>
        <blockquote>
          “Mais do que fabricar móveis, buscamos criar ambientes que façam
          sentido para quem vive neles.”
        </blockquote>
        <div className="signature">
          Linea Casa<span>AMBIENTES PENSADOS PARA O SEU JEITO DE VIVER.</span>
        </div>
      </div>
    </section>
  );
}
const finishes = [
  {
    name: "Amadeirados",
    className: "wood",
    text: "A textura e o acolhimento da madeira, em uma variedade de padrões e tonalidades.",
  },
  {
    name: "Tons claros",
    className: "sand",
    text: "Leveza e luminosidade para composições suaves e atemporais.",
  },
  {
    name: "Tons escuros",
    className: "dark",
    text: "Profundidade e personalidade para valorizar os volumes do projeto.",
  },
  {
    name: "Acabamentos foscos",
    className: "matte",
    text: "Superfícies discretas com um toque contemporâneo.",
  },
  {
    name: "Vidros",
    className: "glass",
    text: "Transparência e leveza, conforme a aplicação e a necessidade do ambiente.",
  },
  {
    name: "Metais",
    className: "metal",
    text: "Detalhes metálicos que dão ritmo e contraste à composição.",
  },
  {
    name: "Puxadores",
    className: "handle",
    text: "Design e ergonomia nos detalhes que fazem parte da rotina.",
  },
  {
    name: "Iluminação integrada",
    className: "lighting",
    text: "Luz para valorizar nichos, superfícies e momentos do dia.",
  },
];
export function Materials() {
  const [active, setActive] = useState(0);
  return (
    <section className="section materials">
      <div className="container materials-layout">
        <SectionTitle
          eyebrow="TOQUE, TEXTURA E PERSONALIDADE"
          description="A beleza está nas escolhas. Explore combinações que dão identidade ao seu espaço."
        >
          Detalhes que
          <br />
          <em>definem o projeto.</em>
        </SectionTitle>
        <div>
          <div
            className="swatches"
            role="group"
            aria-label="Explorar acabamentos"
          >
            {finishes.map((f, i) => (
              <button
                key={f.name}
                className={`swatch ${active === i ? "selected" : ""}`}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                <span className={`swatch-sample ${f.className}`}>
                  {active === i && <Check size={19} />}
                </span>
                <span>{f.name}</span>
              </button>
            ))}
          </div>
          <p className="finish-description" aria-live="polite">
            <strong>{finishes[active].name}.</strong> {finishes[active].text}
          </p>
          <p className="demo-note">
            Amostras ilustrativas. Opções reais sujeitas à disponibilidade, ao
            orçamento e às necessidades de cada projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
export function BudgetSection() {
  return (
    <section className="budget-section">
      <img
        src={images.kitchen2}
        alt="Cozinha planejada com acabamentos naturais"
        loading="lazy"
      />
      <div className="budget-shade" />
      <div className="container budget-content">
        <span className="eyebrow">SUA IDEIA É O NOSSO PONTO DE PARTIDA.</span>
        <h2>
          Tem um ambiente esperando
          <br />
          para ser <em>transformado?</em>
        </h2>
        <p>
          Conte sua ideia para nossa equipe e solicite
          <br />
          uma avaliação inicial do seu projeto.
        </p>
        <WhatsAppLink>Solicitar orçamento pelo WhatsApp</WhatsAppLink>
      </div>
    </section>
  );
}
const testimonials = [
  [
    "“A cozinha era pequena e eu não sabia como aproveitar o espaço. O planejamento trouxe lugar para tudo, sem deixar o ambiente pesado.”",
    "Mariana R.",
    "Cozinha planejada",
  ],
  [
    "“Queríamos que o apartamento tivesse a nossa cara. Gostamos de poder pensar nas cores e na organização de cada ambiente juntos.”",
    "Camila e Rafael",
    "Apartamento completo",
  ],
  [
    "“Precisava de um espaço de trabalho mais prático e acolhedor. As soluções de armazenamento fizeram diferença na rotina.”",
    "André M.",
    "Espaço comercial",
  ],
];
export function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionTitle eyebrow="ESPAÇOS PARA HISTÓRIAS">
          Projetos pensados
          <br />
          para <em>pessoas reais.</em>
        </SectionTitle>
        <div className="testimonials-grid">
          {testimonials.map(([quote, name, type]) => (
            <figure key={name}>
              <Quote size={26} strokeWidth={1} />
              <blockquote>{quote}</blockquote>
              <figcaption>
                <span className="avatar">{name[0]}</span>
                <div>
                  <strong>{name}</strong>
                  <span>{type}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="demo-note">
          Depoimentos fictícios, criados exclusivamente para ilustrar este
          projeto demonstrativo.
        </p>
      </div>
    </section>
  );
}
