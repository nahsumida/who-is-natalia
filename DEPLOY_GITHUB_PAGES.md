# Deploy no GitHub Pages

Este projeto foi gerado a partir de um template **TanStack Start com SSR** (rodando em Cloudflare Workers no Lovable). O GitHub Pages só hospeda **arquivos estáticos**, então alguns ajustes podem ser necessários.

## Passos

1. **Conectar ao GitHub** pelo Lovable (menu `+` → GitHub → Connect project).
2. No GitHub, vá em **Settings → Pages** e selecione **Source: GitHub Actions**.
3. Faça push para a branch `main` — o workflow `.github/workflows/deploy.yml` roda o build e publica.
4. Acesse `https://<usuario>.github.io/<nome-do-repo>/`.

## Limitações importantes

- **Sem SSR**: meta tags dinâmicas e SEO server-side não funcionam — apenas o que o React renderizar no client.
- **Sem server functions**: qualquer `createServerFn` quebra. O `ContactForm` atual já é um mock (sem backend), então não impacta.
- **Subpath**: se o repo se chamar `meu-portfolio`, a URL será `usuario.github.io/meu-portfolio/`. Pode ser necessário configurar `base` no Vite — abra um chat pedindo "configurar base path para GitHub Pages com nome `meu-portfolio`" se os assets não carregarem.
- **Roteamento**: o fallback `404.html` é criado automaticamente para deep links funcionarem.

## Alternativa recomendada

O **Publish do Lovable** já hospeda gratuitamente com SSR completo, domínio próprio e zero configuração — basta clicar em **Publish** no canto superior direito.
