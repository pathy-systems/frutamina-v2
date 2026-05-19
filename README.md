# Frutamina V2

Site institucional e catálogo de produtos da Frutamina, com painel administrativo simples integrado ao Supabase.

## Estrutura

```text
/
  index.html
  produtos.html
  formosaqrcode.html
  env.php
  supabase-proxy.php
  admin/
  assets/
    css/
    js/
    images/
      banners/
      favicons/
      formosa/
      logos/
      produtos/
    svg/
```

## Configuração

Crie um arquivo `.env` na raiz a partir do `.env.example`:

```text
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_KEY=sua-chave-publica-ou-service-role
```

O `.env` fica apenas no ambiente local/servidor e não deve ser versionado. O arquivo `env.php` expõe somente a URL pública do Supabase para o navegador, enquanto `supabase-proxy.php` usa a chave para chamar a API pelo servidor.

## Assets

- Imagens de produtos: `assets/images/produtos`
- Logos: `assets/images/logos`
- Favicons: `assets/images/favicons`
- SVGs reais: `assets/svg`

O `.htaccess` mantém compatibilidade com caminhos antigos como `assets/svg/produtos/...`.

## Documentação

- Segurança do Supabase: `docs/SUPABASE_SECURITY.md`

## Páginas

- Home: `index.html`
- Catálogo: `produtos.html`
- QR Code Formosa: `formosaqrcode.html`
- Admin: `admin/index.html`
- Login admin: `admin/login.html`
