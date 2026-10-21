import { ArrowDown, ArrowUpRight } from "lucide-react";
import { WhatsAppLink } from "./Shared";
import { images } from "../data/projects";
export default function Hero() {
  return (
    <>
      <section id="inicio" className="hero">
        <img
          className="hero-image"
          src={images.hero}
          alt="Cozinha contemporânea com armários em madeira e luz natural"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content container">
          <span className="eyebrow">
            <span />
            DESIGN QUE ACOLHE. MARCENARIA QUE TRANSFORMA.
          </span>
          <h1>
            Ambientes planejados
            <br />{" "}
            para <em>viver melhor.</em>
          </h1>
          <p>
            Criamos móveis sob medida que unem funcionalidade,
            <br className="desktop-break" /> personalidade e acabamento em cada
            detalhe.
          </p>
          <div className="hero-actions">
            <WhatsAppLink>Solicitar meu orçamento</WhatsAppLink>
            <a href="#projetos" className="text-link light">
              Conhecer os projetos <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="hero-assurance">
            <span className="small-line" />
            Projetos personalizados do planejamento à instalação.
          </div>
        </div>
        <div className="hero-bottom container">
          <a href="#ambientes">
            <ArrowDown size={16} /> Explore as possibilidades
          </a>
          <span>FEITO PARA VOCÊ. FEITO PARA DURAR NA SUA VIDA.</span>
          <span className="hero-index">
            01 <i /> 08
          </span>
        </div>
        <span className="hero-side">UM NOVO OLHAR PARA O SEU ESPAÇO</span>
      </section>
      <div className="brand-strip">
        <span>SEU ESPAÇO. SUA ESSÊNCIA.</span>
        <span>Design autoral</span>
        <i />
        <span>Funcionalidade em cada detalhe</span>
        <i />
        <span>Acabamento que se sente</span>
        <i />
        <span>Do desenho à instalação</span>
      </div>
    </>
  );
}
