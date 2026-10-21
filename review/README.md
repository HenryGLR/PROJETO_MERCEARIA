# Revisão da entrega

- `desktop.png`: prévia em 1440 × 1000.
- `mobile.png`: prévia em 390 × 844.
- `browser-checks.json`: resultados de navegação, modal, formulário, responsividade e análise automática com axe-core no Chrome.
- `keyboard-checks.json`: checagem complementar de categorias, Escape no menu e contenção de foco no modal.

Lint e build de produção concluídos sem erros. A análise automática não encontrou violações WCAG 2 A/AA e WCAG 2.1 AA nas telas analisadas. Essa checagem automática não substitui uma auditoria manual completa.

Larguras verificadas: 320, 375, 390, 500, 768, 1024 e 1440 pixels, sem transbordamento horizontal. Não houve erro JavaScript, imagem quebrada ou âncora interna sem destino.

Os links de WhatsApp e a composição da mensagem foram verificados sem envio de mensagens a terceiros. A existência dos contatos fictícios e o atendimento por eles não fazem parte desta demonstração.

## Correção do GitHub Pages

O arquivo `github-pages-checks.json` registra a verificação do build de produção servido localmente em `/PROJETO_MERCEARIA/`, simulando o caminho público. Todos os recursos carregados retornaram sem erros HTTP, e não houve erros JavaScript, imagens quebradas ou âncoras inválidas. Galeria, modal, foco, FAQ, menu móvel e geração da mensagem de WhatsApp passaram.

A página pública consultada antes da correção servia o HTML de desenvolvimento apontando para `/src/main.jsx`. A validação acima cobre o build corrigido local; a publicação desse commit depende do envio a `main` e da seleção de GitHub Actions em Settings → Pages.
