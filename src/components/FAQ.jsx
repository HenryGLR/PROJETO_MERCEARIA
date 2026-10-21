import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { questions } from "../data/faq";
import { SectionTitle, WhatsAppLink } from "./Shared";
export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq">
      <div className="container faq-layout">
        <div>
          <SectionTitle eyebrow="PODEMOS AJUDAR?">
            Boas perguntas.
            <br />
            <em>Respostas claras.</em>
          </SectionTitle>
          <p>
            Cada projeto começa com uma conversa.
            <br />
            Tire suas dúvidas e dê o próximo passo.
          </p>
          <WhatsAppLink className="text-link">Fale com a gente</WhatsAppLink>
        </div>
        <div className="faq-items">
          {questions.map(([question, answer], i) => (
            <article
              className={`faq-item ${open === i ? "is-open" : ""}`}
              key={question}
            >
              <h3>
                <button
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {question}
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </button>
              </h3>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                hidden={open !== i}
              >
                <p>{answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
