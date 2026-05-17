# LoadLink — Site

Site officiel de LoadLink, outil local de capture, conversion et archivage multimédia.

## Structure

```
loadlink-website/
├── index.html          ← Landing page
├── legal.html          ← Mentions légales et conditions d'utilisation
├── 404.html            ← Page d'erreur
├── styles.css          ← Styles
├── main.js             ← Smooth scroll
├── CNAME               ← Domaine GitHub Pages : loadlink.fr
└── README.md
```

## Aperçu local

```bash
# Avec Python
python3 -m http.server 8000

# Avec Node
npx serve
```

Puis ouvrir `http://localhost:8000`.

## Déploiement

Le site est déployé via **GitHub Pages** sur le domaine `loadlink.fr`.

DNS chez OVH :
- Type A → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Type CNAME `www` → `studiobastidecontact-tech.github.io`

HTTPS activé via Let's Encrypt (GitHub Pages).

## Stack

- HTML / CSS / JS vanilla
- Typo : Geist + Geist Mono (Google Fonts)
- Pas de framework, pas de build step, pas de tracker

## Licence

© 2026 LoadLink. Tous droits réservés.
