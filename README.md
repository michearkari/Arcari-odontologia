# Arcari Odontologia Integrada — Landing Page

Site institucional da clínica Arcari Odontologia Integrada, Chapecó/SC.

## Deploy via EasyPanel

Container Nginx Alpine servindo `index.html` estático.

- **Domínio:** arcariodontologia.com.br
- **Subdomínios:** www.arcariodontologia.com.br
- **Porta interna:** 80
- **Build:** Dockerfile

## Stack

- HTML único autossuficiente (CSS + fontes Google + imagens base64 embutidas)
- Servido por Nginx 1.27 Alpine
- Gzip ativado (ganha ~70% no transfer da landing)
- Headers de segurança configurados

## Atualizações

Toda push na branch `main` dispara redeploy automático no EasyPanel.

---

Desenvolvido por Michel Arcari.
