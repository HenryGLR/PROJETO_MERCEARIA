import { Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { Brand } from "./Shared";
import { company, navigation, whatsappUrl } from "../data/company";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand footer />
            <p>
              Ambientes pensados para
              <br />o seu jeito de viver.
            </p>
            <div className="socials">
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram ilustrativo"
              >
                <Instagram size={18} />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={19} />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>EXPLORE</h3>
            {navigation.slice(1).map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h3>SEU AMBIENTE</h3>
            {[
              "Cozinhas planejadas",
              "Quartos e closets",
              "Salas e painéis",
              "Home offices",
              "Espaços comerciais",
            ].map((name) => (
              <a key={name} href="#ambientes">
                {name}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h3>VAMOS CONVERSAR</h3>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              {company.phoneLabel}
              <ArrowUpRight size={14} />
            </a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <p>{company.hours}</p>
            <span className="footer-demo">DADOS ILUSTRATIVOS</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Linea Casa Planejados.</span>
          <span>Empresa fictícia · Projeto demonstrativo</span>
          <span>
            Desenvolvido por <strong>Nexo Web ↗</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
