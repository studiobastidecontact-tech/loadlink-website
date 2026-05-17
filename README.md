# LoadLink — Site web

Site marketing pour LoadLink, le logiciel desktop de téléchargement vidéo.

## Structure

```
loadlink-website/
├── index.html          ← Landing page (téléchargement)
├── legal.html          ← Mentions légales
├── styles.css          ← Tous les styles
├── main.js             ← Smooth scroll + parallax
└── README.md           ← Ce fichier
```

## Aperçu local

Ouvre simplement `index.html` dans Chrome/Firefox/Edge.

Pour un meilleur rendu (live reload), tu peux lancer un mini serveur :

```bash
# Si tu as Python (qui est sur quasi tous les Mac/Linux)
python3 -m http.server 8000

# Si tu as Node.js
npx serve

# Puis ouvre http://localhost:8000
```

## Déploiement sur GitHub Pages

Comme pour tes autres sites (coach-krav.fr, etc.) :

1. Créer un repo GitHub `studiobastidecontact-tech/loadlink-website` (public ou privé)
2. Activer GitHub Pages dans Settings > Pages > branch `main` > root `/`
3. Configurer DNS chez OVH pour `loadlink.fr` :
   - Type A → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Type CNAME pour `www` → `studiobastidecontact-tech.github.io`
4. Dans le repo GitHub, ajouter un fichier `CNAME` contenant juste : `loadlink.fr`
5. GitHub Pages activera HTTPS automatiquement après quelques heures

## Installeur

L'installeur `.exe` sera hébergé sur **GitHub Releases** du repo LoadLink (séparé de ce repo site).

Le bouton "Télécharger" dans index.html pointe vers :
```
https://github.com/studiobastidecontact-tech/loadlink/releases/latest/download/LoadLink-Setup.exe
```

À adapter selon le nom exact du repo de l'app et du fichier release.

## À faire avant publication

- [ ] Décider du nom de l'éditeur dans `legal.html` (la section "Éditeur du site" est volontairement vide pour l'instant)
- [ ] Créer un favicon `favicon.png` 64×64 (peut être ton logo rouge actuel)
- [ ] Configurer une boîte mail `contact@loadlink.fr` (Zoho Mail gratuit ou autre)
- [ ] Build et release de l'app LoadLink sur GitHub
- [ ] Tester sur mobile (responsive)

## DA

- Aesthetic : refined minimalism + premium tech
- Style proche : Linear / Vercel / Stripe
- Typo : Geist (display + body) + Geist Mono (code/labels)
- Accent : bleu Apple (#0A84FF)
- Fond : sombre quasi-noir (#0A0A0B) avec subtle gradient + grid pattern
