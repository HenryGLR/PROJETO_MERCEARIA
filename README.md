# Linea Casa Planejados

Site demonstrativo de marcenaria e móveis sob medida para o portfólio da Nexo Web. Desenvolvido com React, Vite, JavaScript, CSS e Lucide React, sem backend ou banco de dados.

## Executar

Requer Node.js 20.19+ ou 22.12+ e npm.

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite. Para escolher a porta usada na revisão:

```bash
npm run dev -- --port 5175
```

## Verificar e gerar a versão final

```bash
npm run lint
npm run build
npm run preview
```

O build estático é gerado em `dist/`. Este trabalho foi entregue localmente, sem publicação e sem envio ao GitHub.

## Personalizar para um cliente

| Informação | Arquivo |
| --- | --- |
| Telefone, WhatsApp, endereço, e-mail, horários, Instagram e mensagem inicial | `src/data/company.js` |
| Projetos, categorias, conceitos, materiais e caminhos de imagens | `src/data/projects.js` |
| Ambientes e suas descrições | `src/data/environments.js` |
| Perguntas frequentes | `src/data/faq.js` |
| Fotos locais | `public/images/` |
| Paleta, tipografia e responsividade | `src/styles.css` |
| Título, descrição, Open Graph e fontes | `index.html` |
| Ícone da marca | `public/favicon.svg` |
| Etapas do processo, diferenciais, história, materiais e depoimentos | `src/components/StorySections.jsx` |

O campo `phone` usa o formato internacional com apenas números, por exemplo `5511999999999`. Todos os links de WhatsApp usam a função `whatsappUrl`, mantendo o número em um único lugar.

Ao preparar uma publicação real, troque os contatos fictícios, revise textos e depoimentos com o cliente e configure a imagem Open Graph com URL absoluta do domínio publicado. Revise também a disponibilidade e os direitos das fotografias para o uso pretendido. As fontes são carregadas do Google Fonts, com fontes locais de fallback.

## Funcionalidades

- Cabeçalho fixo, navegação por âncoras e menu móvel com Escape.
- Ambientes em uma faixa navegável por botões e por gesto de deslizar.
- Oito projetos, filtros por categoria e modal nativo com duas imagens de inspiração.
- Modal com teclado, fechamento por Escape, foco contido e restauração de foco.
- Etapas do processo, apresentação institucional e oito amostras interativas de acabamentos.
- Perguntas frequentes com estados e regiões acessíveis.
- Formulário com validação nativa e mensagem de WhatsApp com nome, telefone, ambiente, cidade e observações.
- O formulário abre o WhatsApp e oferece um link alternativo caso uma janela seja bloqueada. Não registra dados, não envia mensagens automaticamente e não informa sucesso de envio.
- Fotos locais otimizadas, carregamento adiado abaixo do hero, respeito a movimento reduzido e estados de foco.
- Estrutura semântica, link para pular navegação, metadados e favicon.

## Estrutura criada

```text
public/
  favicon.svg
  images/                    # 11 fotografias locais
src/
  components/
    Header.jsx
    Hero.jsx
    Shared.jsx               # Marca, títulos, CTAs e botão flutuante
    Environments.jsx
    ProjectsGallery.jsx
    ProjectModal.jsx
    StorySections.jsx
    FAQ.jsx
    Contact.jsx
    Footer.jsx
  data/
    company.js
    environments.js
    projects.js
    faq.js
  App.jsx
  main.jsx
  styles.css
index.html
package.json
package-lock.json
vite.config.js
eslint.config.js
.gitignore
README.md
IMAGE_CREDITS.md
```

## Conteúdo demonstrativo

A Linea Casa é uma empresa fictícia. Contatos, endereço, horários, redes sociais, depoimentos e projetos são ilustrativos. As fotos representam inspirações e não documentam projetos executados pela marca; as imagens adicionais de cada modal podem mostrar ambientes diferentes. Não há promessas de prazo, região de atendimento ou condições comerciais sem avaliação.
