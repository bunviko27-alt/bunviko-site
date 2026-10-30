# Bunviko

Site de apresentação estático em português, com demonstração interativa do protótipo.

- `index.html`: página principal.
- `style.css`: identidade visual e layout responsivo.
- `script.js`: menu, carrossel, etapas e diálogos.
- `demo.html`: demonstração local de autoatendimento, sem pedidos ou cobranças reais.
- `assets/`: imagens WebP e logos SVG da Bunviko.

## Rodar localmente

Execute `python -m http.server 4330` nesta pasta e abra `http://localhost:4330`.

## Publicar na Vercel

Importe o repositório que contiver estes arquivos. Se esta pasta estiver dentro de outro projeto, selecione-a como Root Directory. Use o preset Other, sem comando de build; a configuração está em `vercel.json`. Nenhuma variável de ambiente é necessária nesta versão.

## Direção

Adaptação da estrutura da página inicial de https://coorda.framer.website/ à marca Bunviko, usando conteúdo próprio e imagens aprovadas do produto. Inclui abertura fotográfica, navegação compacta, carrossel, etapas do pedido, apresentação do hardware e do Viko, estágio do projeto, perguntas e conteúdos em diálogos. Preços, métricas de clientes e depoimentos não foram inventados.

As imagens são conceitos visuais; materiais, componentes, medidas, preços e disponibilidade comercial estão em definição. O site não tem formulário de contato nem backend.


A abertura apresenta Viko e a marca por 3,35 segundos, uma vez por sessão, com opção de pular, saída por teclado e fallback de segurança. Respeita movimento reduzido. O carrossel contém oito personas e retratos fictícios gerados por IA, identificados como exemplos; não representa avaliações reais nem conteúdo do Google. Fotografias de produto distintas por seção.

O carrossel mantém movimento contínuo com fade e sem barra horizontal, inclusive em navegadores com preferência de movimento reduzido, conforme solicitado. Sem controle de pausa; passar o mouse não interrompe a animação.
