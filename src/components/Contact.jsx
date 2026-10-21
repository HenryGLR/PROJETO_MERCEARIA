import { useState } from "react";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Clock,
  MessageCircle,
} from "lucide-react";
import { company, whatsappUrl } from "../data/company";
import { SectionTitle } from "./Shared";
import { environments } from "../data/environments";
export default function Contact() {
  const [ready, setReady] = useState(false);
  const [draft, setDraft] = useState("");
  function submit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const message = `${company.message}\n\nNome: ${form.get("name").trim()}\nTelefone: ${form.get("phone").trim()}\nAmbiente: ${form.get("environment")}\nCidade: ${form.get("city").trim()}\nMensagem: ${form.get("message").trim() || "Gostaria de conversar sobre meu projeto."}`;
    setDraft(whatsappUrl(message));
    setReady(true);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }
  return (
    <section id="contato" className="section contact">
      <div className="container contact-layout">
        <div>
          <SectionTitle eyebrow="O PRÓXIMO PROJETO PODE SER O SEU">
            Vamos conversar
            <br />
            sobre <em>o seu projeto?</em>
          </SectionTitle>
          <p className="contact-intro">
            Uma ideia, uma referência ou um espaço em branco.
            <br />É tudo o que precisamos para começar.
          </p>
          <div className="contact-details">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              <span>
                <small>WHATSAPP</small>
                {company.phoneLabel}
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a href={`tel:+${company.phone}`}>
              <Phone />
              <span>
                <small>TELEFONE</small>
                {company.phoneLabel}
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a href={`mailto:${company.email}`}>
              <Mail />
              <span>
                <small>E-MAIL</small>
                {company.email}
              </span>
              <ArrowUpRight size={17} />
            </a>
            <div>
              <MapPin />
              <span>
                <small>ENDEREÇO ILUSTRATIVO</small>
                {company.address}
              </span>
            </div>
            <div>
              <Clock />
              <span>
                <small>ATENDIMENTO ILUSTRATIVO</small>
                {company.hours}
              </span>
            </div>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
              <span>
                <small>INSTAGRAM ILUSTRATIVO</small>
                {company.instagramLabel}
              </span>
              <ArrowUpRight size={17} />
            </a>
          </div>
          <p className="demo-note">
            Empresa fictícia. Os canais e dados de contato são ilustrativos e
            devem ser substituídos antes do uso comercial.
          </p>
        </div>
        <form
          className="contact-form"
          onSubmit={submit}
          onChange={() => setReady(false)}
        >
          <span className="form-caption">VAMOS TIRAR SUA IDEIA DO PAPEL.</span>
          <div className="form-row">
            <label>
              Seu nome <span>*</span>
              <input
                name="name"
                autoComplete="name"
                placeholder="Como podemos chamar você?"
                required
                maxLength={100}
                pattern=".*\S.*"
              />
            </label>
            <label>
              Telefone <span>*</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(11) 99999-9999"
                required
                pattern="[+()0-9\s.\-]{10,20}"
                title="Informe um telefone com DDD, entre 10 e 20 caracteres."
                maxLength={20}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Tipo de ambiente <span>*</span>
              <select name="environment" required defaultValue="">
                <option value="" disabled>
                  O que vamos planejar?
                </option>
                {environments.map((e) => (
                  <option key={e.name}>{e.name}</option>
                ))}
                <option>Projeto completo</option>
                <option>Outro ambiente</option>
              </select>
            </label>
            <label>
              Cidade <span>*</span>
              <input
                name="city"
                autoComplete="address-level2"
                placeholder="Onde será o projeto?"
                required
                maxLength={100}
                pattern=".*\S.*"
              />
            </label>
          </div>
          <label>
            Conte um pouco sobre sua ideia
            <textarea
              name="message"
              placeholder="Qual é o seu sonho para esse espaço?"
              rows={4}
              maxLength={2000}
            />
          </label>
          <p className="form-note">
            * Campos obrigatórios. Ao continuar, o WhatsApp abrirá com os dados
            preenchidos. Você revisa a mensagem antes de enviar.
          </p>
          <button className="button" type="submit">
            Conversar sobre meu projeto <ArrowUpRight size={18} />
          </button>
          {ready && (
            <p className="form-feedback" role="status">
              Sua mensagem está pronta no WhatsApp. Se a janela não abriu,{" "}
              <a href={draft} target="_blank" rel="noopener noreferrer">
                clique aqui para continuar
              </a>
              . Nenhuma informação foi enviada automaticamente.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
