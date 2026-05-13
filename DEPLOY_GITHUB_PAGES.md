# Deploy no GitHub Pages

Este projeto agora gera um **SPA 100% estático** com Vite, compatível com GitHub Pages.

## Passos

1. **Conectar ao GitHub** pelo Lovable (menu `+` → GitHub → Connect project).
2. No GitHub, vá em **Settings → Pages** e selecione **Source: GitHub Actions**.
3. Faça push para a branch `main` — o workflow `.github/workflows/deploy.yml` roda o build e publica.
4. Acesse `https://<usuario>.github.io/<nome-do-repo>/`.

## Como está configurado

- **Build estático**: `bun run build` gera a pasta `dist/` diretamente.
- **Subpath automático**: o workflow define `BASE_PATH=/${{ github.event.repository.name }}/`, então os assets carregam em `usuario.github.io/nome-do-repo/`.
- **Roteamento SPA**: o workflow copia `dist/index.html` para `dist/404.html`, permitindo abrir links diretos sem 404 definitivo.
- **Sem backend/SSR**: não use server functions em GitHub Pages; o formulário atual roda somente no navegador.

## Alternativa recomendada

O **Publish do Lovable** já hospeda gratuitamente com SSR completo, domínio próprio e zero configuração — basta clicar em **Publish** no canto superior direito.
