import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Brand, WhatsAppLink } from "./Shared";
import { navigation } from "../data/company";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const trigger = useRef(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 32);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const key = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);
  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}
    >
      <div className="header-inner">
        <Brand />
        <nav aria-label="Navegação principal" className="desktop-nav">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <WhatsAppLink className="header-cta">Solicitar orçamento</WhatsAppLink>
        <button
          ref={trigger}
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Navegação móvel"
        className="mobile-nav"
        hidden={!open}
      >
        {navigation.map(([label, id], i) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            <small>0{i + 1}</small>
            {label}
            <ArrowUpRight size={20} />
          </a>
        ))}
        <WhatsAppLink className="button" onClick={() => setOpen(false)}>
          Solicitar orçamento
        </WhatsAppLink>
      </nav>
    </header>
  );
}
