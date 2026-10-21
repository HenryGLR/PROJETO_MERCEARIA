import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "../data/company";
export function WhatsAppLink({
  children = "Solicitar orçamento",
  className = "button",
  message,
  ...props
}) {
  return (
    <a
      className={className}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
export function SectionTitle({
  eyebrow,
  children,
  description,
  className = "",
}) {
  return (
    <div className={`section-heading ${className}`}>
      <span className="eyebrow">
        <span />
        {eyebrow}
      </span>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function WhatsAppButton() {
  return (
    <WhatsAppLink
      className="whatsapp-floating"
      aria-label="Conversar pelo WhatsApp"
    >
      <MessageCircle size={24} />
      <span>Vamos conversar?</span>
    </WhatsAppLink>
  );
}
export function Brand({ footer = false }) {
  return (
    <a
      href="#inicio"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="Linea Casa — início"
    >
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
      </span>
      <span>
        LINEA CASA<small>MÓVEIS PLANEJADOS</small>
      </span>
    </a>
  );
}
