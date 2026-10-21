import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { SectionTitle } from "./Shared";
import { environments } from "../data/environments";
import { whatsappUrl } from "../data/company";
export default function Environments() {
  const track = useRef(null);
  const move = (direction) =>
    track.current?.scrollBy({
      left: direction * (track.current.clientWidth * 0.7),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  return (
    <section id="ambientes" className="section environments">
      <div className="container">
        <div className="heading-row">
          <SectionTitle eyebrow="POSSIBILIDADES SOB MEDIDA">
            Soluções para{" "}
            <em>
              todos
              <br />
              os ambientes.
            </em>
          </SectionTitle>
          <div className="heading-aside">
            <p>
              Cada ambiente tem um propósito.
              <br />O nosso é encontrar a melhor forma de vivê-lo.
            </p>
            <div className="slider-controls">
              <button
                onClick={() => move(-1)}
                aria-label="Ver ambientes anteriores"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => move(1)}
                aria-label="Ver próximos ambientes"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="environment-track" ref={track}>
          {environments.map((item, i) => (
            <a
              className="environment-card"
              href={whatsappUrl(
                `Olá! Gostaria de um orçamento para ${item.name.toLowerCase()}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              key={item.name}
            >
              <div className="image-wrap">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span className="image-number">0{i + 1}</span>
                <span className="circle-arrow">
                  <ArrowUpRight size={22} />
                </span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="environment-link">
                Planejar meu ambiente <ArrowUpRight size={14} />
              </span>
            </a>
          ))}
        </div>
        <div className="scroll-hint">
          DESLIZE PARA DESCOBRIR <span>⟶</span>
        </div>
      </div>
    </section>
  );
}
