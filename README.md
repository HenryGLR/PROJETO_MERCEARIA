# Linea Casa Planejados

Site demonstrativo de marcenaria e móveis sob medida para o portfólio da Nexo Web. Desenvolvido com React, Vite, JavaScript, CSS e Lucide React, sem backend ou banco de dados.

## Executar

Requer Node.js 20.19+ ou 22.12+ e npm.

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite, incluindo `/PROJETO_MERCEARIA/`. Para escolher a porta usada na revisão:

```bash
npm run dev -- --port 5175
```

## Verificar e gerar a versão final

```bash
npm run lint
npm run build
npm run preview
```

O build estático é gerado em `dist/`. Para conferir a versão final localmente, abra `http://127.0.0.1:4173/PROJETO_MERCEARIA/` após executar `npm run preview`.

## Publicar no GitHub Pages

Repositório: `HenryGLR/PROJETO_MERCEARIA` (o nome e as maiúsculas são intencionais).

URL: https://henryglr.github.io/PROJETO_MERCEARIA/

1. No GitHub, abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**. Não publique a raiz de `main` com “Deploy from a branch”.
2. Em **Settings → Actions → General**, confirme que GitHub Actions está habilitado e que as actions oficiais `actions/*` são permitidas.
3. Envie o commit para `main` com `git push origin main`.
4. Em **Actions**, acompanhe **Deploy site to GitHub Pages** até os jobs `build` e `deploy` terminarem. Também é possível usar **Run workflow** na branch `main`.
5. Se houver regras de proteção no environment `github-pages`, autorize o deploy de `main` e aprove a execução quando exigido.

O workflow `.github/workflows/deploy.yml` instala com `npm ci`, executa o lint e o build e publica **somente `./dist`** como artefato do Pages. Ele declara `pages: write` e `id-token: write` no job de deploy. Não é necessário adicionar token pessoal ou versionar `dist`.

### Causa da tela branca corrigida

Na investigação, a página pública servia o HTML de desenvolvimento com `<script type="module" src="/src/main.jsx">`. Esse arquivo não é o bundle compilado; o GitHub Pages não compila JSX nem resolve os imports de React como o Vite. Além disso, a configuração usava a base padrão `/` e as imagens apontavam para `/images/`, fora do subdiretório do repositório.

A correção define `base: "/PROJETO_MERCEARIA/"`, mantém a saída em `dist` e usa `import.meta.env.BASE_URL` nas imagens e `%BASE_URL%` no favicon. O Open Graph usa a URL pública completa. O Vite transforma o script de entrada e o CSS automaticamente em URLs `/PROJETO_MERCEARIA/assets/...` durante o build. `main.jsx`, `App.jsx` e suas importações foram verificados no build e no navegador sem necessidade de alterar a interface.

Referência oficial: https://vite.dev/guide/static-deploy.html#github-pages

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

Ao preparar uma publicação real, troque os contatos fictícios, revise textos e depoimentos com o cliente e atualize a URL absoluta da imagem Open Graph se o domínio mudar. Revise também a disponibilidade e os direitos das fotografias para o uso pretendido. As fontes são carregadas do Google Fonts, com fontes locais de fallback.

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
