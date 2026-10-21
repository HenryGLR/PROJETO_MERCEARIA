import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { WhatsAppLink } from "./Shared";
export default function ProjectModal({ project, onClose }) {
  const dialog = useRef(null);
  const [current, setCurrent] = useState(0);
  const photos = [project.image, project.extra];
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const element = dialog.current;
    element.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      element.close();
      previouslyFocused?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="project-modal"
      aria-labelledby="modal-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-inner">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar projeto"
          autoFocus
        >
          <X />
        </button>
        <div className="modal-photo">
          <img
            src={photos[current]}
            alt={`${project.name} — imagem ilustrativa ${current + 1}`}
          />
          <div className="modal-photo-controls">
            <button
              onClick={() => setCurrent(current === 0 ? 1 : 0)}
              aria-label="Imagem anterior"
            >
              <ChevronLeft />
            </button>
            <span aria-live="polite">0{current + 1} / 02</span>
            <button
              onClick={() => setCurrent(current === 0 ? 1 : 0)}
              aria-label="Próxima imagem"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="modal-content">
          <span className="eyebrow">
            {project.category} / PROJETO CONCEITUAL
          </span>
          <h2 id="modal-title">{project.name}</h2>
          <p>{project.description}</p>
          <dl>
            <div>
              <dt>Conceito</dt>
              <dd>{project.concept}</dd>
            </div>
            <div>
              <dt>Paleta e materiais sugeridos</dt>
              <dd>{project.material}</dd>
            </div>
          </dl>
          <WhatsAppLink
            message={`Olá! Conheci a Linea Casa e me inspirei no projeto ${project.name}. Gostaria de um orçamento para o meu ambiente.`}
          >
            Quero um projeto assim
          </WhatsAppLink>
          <p className="demo-note">
            Imagens de inspiração. As fotografias não representam vistas
            técnicas de um mesmo projeto. Materiais e soluções são definidos
            para cada espaço.
          </p>
        </div>
      </div>
    </dialog>
  );
}
