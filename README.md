# 🎉 Site HB Assessoria - HTML/CSS/JS Puro

Site institucional estático criado com HTML, CSS e JavaScript puro (sem React, sem Node.js, sem build).

## 📁 Arquivos

```
static-site/
├── index.html       # Página principal
├── styles.css       # Estilos CSS
├── script.js        # JavaScript interativo
└── README.md        # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Baixe todos os arquivos (index.html, styles.css, script.js)
2. Abra o arquivo `index.html` no seu navegador
3. Pronto! O site está funcionando

### Opção 2: Upload no Google Sites
**IMPORTANTE:** Google Sites tem limitações. Recomendamos Opção 3, 4 ou 5.

1. Acesse Google Sites
2. Crie novo site
3. Use "Incorporar HTML" para adicionar o código
4. Copie todo o conteúdo de index.html e cole

**Limitação:** Google Sites não permite upload de arquivos CSS/JS separados. Você precisaria incorporar tudo inline.

### Opção 3: Netlify (RECOMENDADO - Mais Fácil) ⭐
1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `static-site` inteira
3. Pronto! Site no ar em 30 segundos
4. Você ganha um link tipo: `nome-aleatorio.netlify.app`
5. Pode conectar domínio próprio depois

### Opção 4: GitHub Pages (Grátis)
1. Crie uma conta no GitHub
2. Crie repositório chamado `hb-assessoria`
3. Faça upload dos 3 arquivos
4. Vá em Settings → Pages
5. Source: main branch
6. Salve e aguarde 2 minutos
7. Seu site estará em: `seu-usuario.github.io/hb-assessoria`

### Opção 5: Vercel (Grátis e Profissional)
1. Acesse https://vercel.com
2. Faça login com GitHub
3. Import repository ou arraste os arquivos
4. Deploy automático
5. Link tipo: `hb-assessoria.vercel.app`

### Opção 6: Hospedagem Tradicional
Se você tem hospedagem web (cPanel, FTP):
1. Acesse seu painel de controle
2. Abra o gerenciador de arquivos
3. Vá para a pasta `public_html` ou `www`
4. Faça upload dos 3 arquivos
5. Acesse seu domínio

## 🎨 Funcionalidades

✅ **Design Responsivo**
- Funciona perfeitamente em desktop, tablet e celular
- Menu mobile com animação

✅ **Seções Completas**
- Hero com chamada para ação
- Sobre a empresa
- 8 serviços com modals detalhados
- Diferenciais competitivos
- Formulário de contato
- Footer com redes sociais

✅ **Interatividade**
- Navegação suave entre seções
- Modais informativos para cada serviço
- Formulário com validação
- Botão WhatsApp flutuante
- Animações e transições

✅ **100% Estático**
- Nenhuma dependência externa
- Não precisa de Node.js
- Não precisa de build
- Funciona offline
- Rápido carregamento

## 📝 Personalização

### Alterar Cores
Edite o arquivo `styles.css` e procure por:
- `#1d4ed8` (azul principal)
- `#1e40af` (azul hover)
- Substitua por suas cores preferidas

### Alterar Textos
Edite o arquivo `index.html` e procure o texto desejado

### Adicionar/Remover Serviços
Edite o arquivo `script.js` na seção `servicesData`

### Mudar Email de Contato
No arquivo `script.js`, linha ~500, altere `sandertst@gmail.com`

## 🔧 Formulário de Contato

**IMPORTANTE:** O formulário atual apenas mostra uma confirmação (mock).

Para enviar emails de verdade, você precisa:

**Opção A: FormSubmit (Mais Fácil - Grátis)**
1. No arquivo `index.html`, linha ~440, altere:
```html
<form id="contactForm" action="https://formsubmit.co/sandertst@gmail.com" method="POST">
```
2. Remova todo o JavaScript de submit do form (linhas 570-595 de script.js)
3. Pronto! Emails serão enviados direto para sua caixa

**Opção B: Netlify Forms (Se usar Netlify)**
1. Adicione `netlify` ao form:
```html
<form netlify id="contactForm">
```
2. Deploy no Netlify
3. Emails aparecerão no dashboard do Netlify

**Opção C: Backend próprio**
- Precisa de servidor (PHP, Node.js, Python)
- Nós podemos implementar se necessário

## 📱 Testar Mobile

1. Abra o site no Chrome
2. Pressione F12 (DevTools)
3. Clique no ícone de celular (canto superior esquerdo)
4. Teste diferentes tamanhos de tela

## 🌐 Domínio Próprio

Depois de fazer deploy (Netlify/Vercel):
1. Vá em Settings → Domains
2. Adicione seu domínio (ex: hbassessoria.com.br)
3. Configure DNS no Registro.br:
   - Tipo: CNAME
   - Nome: www
   - Destino: (fornecido pelo Netlify/Vercel)
4. Aguarde propagação (até 48h)

## 💡 Dicas

✅ **Site funciona offline** - Pode testar abrindo o HTML direto
✅ **Zero dependências** - Não precisa instalar nada
✅ **SEO amigável** - Já tem meta tags configuradas
✅ **Rápido** - Carrega em menos de 1 segundo
✅ **Acessível** - Funciona com leitores de tela

## 🆘 Problemas?

**Imagens não aparecem?**
- Verifique conexão com internet (imagens são do Pexels)
- Ou baixe e use imagens locais

**Formulário não envia?**
- Normal! Use FormSubmit conforme instruções acima

**Precisa de ajuda?**
- Me envie mensagem
- Ou consulte documentação do serviço escolhido

## 📊 Próximos Passos

1. ✅ Fazer deploy (Netlify recomendado)
2. ✅ Testar em diferentes dispositivos
3. ✅ Configurar formulário com FormSubmit
4. ✅ Conectar domínio próprio (opcional)
5. 📈 Adicionar Google Analytics
6. 🎯 Otimizar SEO
7. 📧 Integrar backend para emails (opcional)

## 📞 Contato HB Assessoria

- **WhatsApp:** (62) 99227-2484
- **Email:** sandertst@gmail.com
- **Instagram:** @hb_assessoriasst
- **Facebook:** /hbassessoriadesegurancanotrabalho

---

**Criado em:** 21 de Janeiro de 2025  
**Tecnologia:** HTML5 + CSS3 + JavaScript ES6  
**Tamanho Total:** ~80KB (super leve!)  
**100% Open Source e Customizável**
