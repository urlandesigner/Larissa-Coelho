# Publicacao na Hostinger

## Dominio oficial

https://www.dralarissaodonto.com.br/

## Como gerar os arquivos

```bash
npm install
npm run build
```

## O que enviar

Envie todo o conteudo da pasta `dist/` para a pasta `public_html/` da Hostinger.

Arquivos importantes que precisam ir junto:

- `index.html`
- `assets/`
- `images/`
- `logo.svg`
- `logo-horizontal.svg`
- `favicon.svg`
- `robots.txt`
- `sitemap.xml`
- `.htaccess`

## Depois de publicar

Abra:

- https://www.dralarissaodonto.com.br/
- https://www.dralarissaodonto.com.br/robots.txt
- https://www.dralarissaodonto.com.br/sitemap.xml

No Google Search Console, envie o sitemap:

```text
https://www.dralarissaodonto.com.br/sitemap.xml
```
