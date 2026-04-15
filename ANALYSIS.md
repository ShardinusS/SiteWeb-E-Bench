# Analyse Exhaustive — E-Bench 2026

> **Projet :** E-Bench — Banc public intelligent 100 % autonome en énergie solaire
> **Contexte :** Projet STI2D — Les Ingénieux — Lycée (Première STI2D)
> **Distinction :** 3e aux Olympiades des Sciences de l'Ingénieur — Région Hauts-de-France 2026
> **Date d'analyse :** Avril 2026

---

## 1. Vue d'ensemble du projet

### 1.1 Objectif du site

E-Bench est un **site vitrine statique** présentant un projet étudiant de banc public intelligent. Le site a trois objectifs principaux :

1. **Documenter** le projet technique (conception, électronique, logiciel, énergie)
2. **Présenter** les résultats de la compétition (Olympiades des Sciences de l'Ingénieur)
3. **Analyser** les performances énergétiques via des visualisations MATLAB interactives

### 1.2 Technologies utilisées

| Catégorie | Technologie | Rôle |
|---|---|---|
| **Frontend** | HTML5 | Structure sémantique, 5 pages HTML |
| **Frontend** | CSS3 | Variables CSS, Grid, Flexbox, animations, media queries |
| **Frontend** | JavaScript vanilla | IIFE, IntersectionObserver, manipulations DOM |
| **Graphiques** | Plotly.js v2.27.0 | Graphiques interactifs (page MATLAB) |
| **Icônes** | Font Awesome 6.5.1 | Icônes vectorielles (CDN) |
| **Typographies** | Google Fonts | Bebas Neue (titres), Space Grotesk (corps), JetBrains Mono (code) |
| **Hébergement** | GitHub Pages | Déploiement statique gratuit |
| **Build** | Aucun | Site 100 % statique, aucune dépendance à installer |

### 1.3 Absence de backend

Le projet est **entièrement statique (JAMstack sans framework)** :
- Pas de serveur backend
- Pas de base de données
- Pas d'API REST
- Pas de traitement serveur
- Toute la logique s'exécute côté client (navigateur)

---

## 2. Architecture du projet

### 2.1 Organisation des dossiers et fichiers

```
SiteWeb-E-Bench/
│
├── index.html                          # Page principale (SPA avec navigation par onglets)
├── 02-ebench-2026.html                 # Page dédiée édition 2026 (navigation par onglets)
├── 03-ebench-2025.html                 # Archive édition 2025 (design différent)
├── 04-ebench-matlab-analysis.html      # Analyse énergétique MATLAB interactive
├── 05-ebench-normes.html               # Page normes et conformité
│
├── README.md                           # Documentation de démarrage
├── robots.txt                          # Directives pour les crawlers
├── sitemap.xml                         # Sitemap XML pour le SEO
├── .gitignore                          # Fichiers exclus du versionnement Git
│
├── assets/
│   ├── css/
│   │   └── theme.css                   # Système de design partagé (variables, reset, composants)
│   ├── js/
│   │   ├── theme-toggle.js             # Module de basculement thème clair/sombre
│   │   └── reveal.js                   # Module d'animation au scroll (IntersectionObserver)
│   ├── img/
│   │   ├── arduino-board.jpg           # Photo carte Arduino
│   │   ├── arduino-code.jpg            # Photo code Arduino
│   │   ├── axel.webp                   # Photo membre équipe (Axel)
│   │   ├── components.jpg              # Photo des composants électroniques
│   │   ├── kenzo.webp                  # Photo membre équipe (Kenzo)
│   │   ├── lorenzo.webp                # Photo membre équipe (Lorenzo)
│   │   ├── matheo.webp                 # Photo membre équipe (Mathéo)
│   │   ├── mppt-controller.jpg         # Photo contrôleur MPPT
│   │   ├── screen-home.jpg             # Capture écran d'accueil
│   │   ├── screen-meteo.jpg            # Capture écran météo
│   │   ├── solar-panel.jpg             # Photo panneau solaire
│   │   └── yohan.webp                  # Photo membre équipe (Yohan)
│   └── svg/
│       └── ebench_schema_cablage_v5_corrected.svg  # Schéma de câblage électrique technique
│
└── docs/                                # Dossier documentation (vide ou non présent)
```

### 2.2 Rôle de chaque partie

| Fichier/Dossier | Rôle |
|---|---|
| `index.html` | **Page d'accueil principale** — Single Page Application (SPA) avec navigation par onglets. Présente : hero, équipe, Olympiades, conception, technologies, logiciel, énergie, normes, galerie. |
| `02-ebench-2026.html` | **Page édition 2026 alternative** — Même contenu que index.html mais avec un système de navigation différent (topbar fixe + tab bar). Design quasi-identique. |
| `03-ebench-2025.html` | **Archive 2025** — Design complètement différent (palette claire, typographie Syne/DM Sans). Documente la version précédente du projet (Raspberry Pi 3, PLA, bois). |
| `04-ebench-matlab-analysis.html` | **Dashboard MATLAB** — Sidebar de navigation + 7 pages d'analyse énergétique avec graphiques Plotly.js interactifs. |
| `05-ebench-normes.html` | **Page normes** — Page dédiée aux 18 normes applicables au projet, avec une section hero, features, design, logiciel, énergie, compétition, équipe, limites, galerie et CTA. |
| `assets/css/theme.css` | **Design system partagé** — Variables CSS pour les thèmes dark/light, reset, typographie, navbar, boutons, cartes, animations reveal, responsive design. |
| `assets/js/theme-toggle.js` | **Module thème** — IIFE qui gère le basculement dark/light avec persistance `localStorage`. |
| `assets/js/reveal.js` | **Module reveal** — IIFE utilisant IntersectionObserver pour animer les éléments `.reveal` à l'apparition. |
| `assets/svg/*.svg` | **Schéma de câblage** — Diagramme SVG technique du système électrique E-Bench. |
| `assets/img/*` | **Ressources visuelles** — Photos de l'équipe, composants, captures d'écran. |
| `robots.txt` | **SEO** — Autorise tous les crawlers, référence le sitemap. |
| `sitemap.xml` | **SEO** — Liste les 5 pages avec priorités et fréquences de changement. |

---

## 3. Fonctionnement global

### 3.1 Flux principal (du client au serveur)

```
Navigateur du client
       │
       ├── Charge index.html (ou autre page .html)
       │     ├── Télécharge assets/css/theme.css
       │     ├── Télécharge assets/js/theme-toggle.js
       │     ├── Télécharge assets/js/reveal.js
       │     ├── Charge Font Awesome (CDN)
       │     ├── Charge Google Fonts (CDN)
       │     └── (Page MATLAB uniquement) Charge Plotly.js (CDN)
       │
       ├── Exécute JS :
       │     ├── theme-toggle.js → Restaure le thème depuis localStorage
       │     └── reveal.js → Initialise IntersectionObserver
       │
       └── Interactions utilisateur :
             ├── toggleTheme() → Change data-theme sur <html>
             ├── Navigation par onglets → Affiche/masque des <div class="page">
             ├── Scroll → Déclenche animations .reveal
             └── (Page MATLAB) Clic sur nav → Affiche page + rend graphique Plotly
```

**Aucun échange réseau après le chargement initial** — tout est côté client.

### 3.2 Logique métier

Le "métier" du site est la **présentation d'un projet technique** :

1. **E-Bench** est un banc public autonome en énergie solaire
2. Le système comprend :
   - Panneau solaire 500Wc monocristallin
   - Régulateur MPPT Victron SmartSolar 150|35
   - Batterie GEL 12V 100Ah (1.2 kWh)
   - Raspberry Pi 3B comme cerveau (Python 3.11, asyncio)
   - Écran tactile 7" IPS
   - Capteur PIR HC-SR501 (détection de présence)
   - 2 ports USB-C PD 45W pour recharge de dispositifs
   - Convertisseur DC-DC 12V → 5V
3. Le site documente toute la chaîne : conception, matériaux, électronique, code, bilan énergétique

---

## 4. Analyse du code

### 4.1 Composants/modules principaux

#### 4.1.1 Système de thème (theme.css + theme-toggle.js)

**Fichier :** `assets/css/theme.css`

Le système de thème repose sur des **variables CSS** définies sur `[data-theme="dark"]` et `[data-theme="light"]` :

```css
[data-theme="dark"] {
  --bg: #080C14;
  --primary: #00D4A0;
  --border: rgba(255, 255, 255, 0.08);
  /* ... 20+ variables */
}

[data-theme="light"] {
  --bg: #F5F0E8;
  --primary: #00A87E;
  --border: rgba(0, 0, 0, 0.1);
  /* ... */
}
```

Des teintes dérivées sont générées automatiquement avec `color-mix()` :
```css
--primary-02: color-mix(in srgb, var(--primary) 2%, transparent);
--primary-04: color-mix(in srgb, var(--primary) 4%, transparent);
/* ... jusqu'à --primary-35 */
```

**Fichier :** `assets/js/theme-toggle.js`

```javascript
(function() {
  'use strict';
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ebench-theme', theme);
  }
  window.toggleTheme = function() {
    var current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  };
  // Restore saved theme from localStorage
  (function() {
    var saved = localStorage.getItem('ebench-theme');
    if (saved) setTheme(saved);
  })();
})();
```

**Mécanisme :** IIFE auto-exécutée qui expose `window.toggleTheme()`. Le thème est persisté dans `localStorage` et restauré à chaque chargement.

#### 4.1.2 Système de révélation au scroll (reveal.js)

```javascript
(function() {
  'use strict';
  function initReveal() {
    var elements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);  // One-shot
          }
        });
      }, { threshold: 0.1 });
      elements.forEach(function(el) { observer.observe(el); });
    } else {
      elements.forEach(function(el) { el.classList.add('visible'); });
    }
  }
  // Exécution immédiate ou après DOMContentLoaded
})();
```

**Mécanisme :** Chaque élément `.reveal` commence avec `opacity: 0; transform: translateY(32px)`. Quand 10 % de l'élément entre dans le viewport, la classe `.visible` est ajoutée, déclenchant une transition CSS de 0.7s.

#### 4.1.3 Navigation SPA (index.html)

`index.html` utilise un **système de pages virtuelles** :

```html
<div class="page active" id="page-accueil">...</div>
<div class="page" id="page-equipe">...</div>
<div class="page" id="page-olympiades">...</div>
<!-- etc. -->
```

Le CSS contrôle la visibilité :
```css
.page { display: none; }
.page.active { display: block; animation: fadeIn 0.35s ease forwards; }
```

La navigation se fait via des boutons/liens qui basculent la classe `.active` — **pas de rechargement de page**.

#### 4.1.4 Dashboard MATLAB (04-ebench-matlab-analysis.html)

Cette page est la plus complexe. Elle contient :

- **Sidebar de navigation** avec 7 sections numérotées
- **Système de rendu paresseux** — chaque graphique n'est rendu qu'à la première visite
- **7 scripts de rendu Plotly.js** pour les visualisations

**Architecture de navigation :**
```javascript
const rendered = [false,false,false,false,false,false,false];
function showMPage(idx){
  document.querySelectorAll('.mpage').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('mp-'+idx).classList.add('active');
  document.querySelectorAll('.nav-item')[idx].classList.add('active');
  if(!rendered[idx]){ renderers[idx](); rendered[idx]=true; }
  setTimeout(()=>window.dispatchEvent(new Event('resize')),120);
}
```

**Math helpers intégrés :**
```javascript
function solarDecl(day){/* Formule de Spencer pour la déclinaison solaire */}
function solarElev(lat,d,om){/* Élévation solaire */}
function hottel(alpha,day,alt){/* Modèle de Hottel pour le rayonnement */}
function pvPow(hrs,day,lat,alt,tilt,Pn,eta,mf){/* Production PV */}
function trapz(x,y){/* Intégration trapézoïdale */}
function linspace(a,b,n){/* Génération de tableau linéairement espacé */}
```

**7 visualisations Plotly.js :**

| # | Page | Graphiques | Données |
|---|---|---|---|
| 01 | Course Solaire | Élévation solaire, diagramme azimut/élévation, durée d'ensoleillement | Calculs astronomiques latitude 50°N |
| 02 | Consommation | Profil empilé, répartition (pie), puissance par mode | 10+ composants (Raspberry Pi, écran, capteurs, USB...) |
| 03 | Bilan Annuel | Production vs conso mensuelle, bilan net, facteurs météo | Panneau 500Wc, inclinaison 37° |
| 04 | Batterie | Autonomie vs puissance, décharge 72h, cycles vs DoD | Ultracell UCG100-12 |
| 05 | Inclinaison | Production vs angle (3 saisons), production annuelle | Optimisation angle |
| 06 | Courbe I-V/MPPT | I-V, P-V, MPPT vs PWM | TrinaSolar 500W |
| 07 | Simulation 7 jours | Production vs conso, SOC, bilan journalier | Scénario réaliste Picardie |

#### 4.1.5 Page 2025 (03-ebench-2025.html)

Design complètement indépendant — **aucune dépendance à theme.css** :

```css
:root {
  --accent: #3d7a5e;     /* Vert sauge */
  --accent2: #2d5f8a;    /* Bleu acier */
  --border: #e6e8e3;
  /* Palette claire uniquement, pas de thème sombre */
}
```

Typographies différentes : **Syne** (titres) + **DM Sans** (corps) au lieu de Bebas Neue + Space Grotesk.

### 4.2 Fonctions importantes et leur rôle

| Fonction | Fichier | Rôle |
|---|---|---|
| `setTheme(theme)` | theme-toggle.js | Applique le thème et le sauvegarde en localStorage |
| `toggleTheme()` | theme-toggle.js | Bascule entre dark et light |
| `initReveal()` | reveal.js | Initialise l'IntersectionObserver pour les animations |
| `showMPage(idx)` | 04-ebench-matlab-analysis.html | Navigation dans le dashboard MATLAB |
| `render01()` à `render06()` | 04-ebench-matlab-analysis.html | Rendu des graphiques Plotly pour chaque section |
| `plotLayout(extra)` | 04-ebench-matlab-analysis.html | Factory pour les configurations de thème Plotly |
| `solarDecl(day)` | 04-ebench-matlab-analysis.html | Calcul de la déclinaison solaire (formule de Spencer) |
| `solarElev(lat, d, om)` | 04-ebench-matlab-analysis.html | Calcul de l'élévation du soleil |
| `hottel(alpha, day, alt)` | 04-ebench-matlab-analysis.html | Modèle de Hottel pour le rayonnement solaire |
| `pvPow(...)` | 04-ebench-matlab-analysis.html | Calcul de la production PV |
| `toggleCode(id)` | 04-ebench-matlab-analysis.html | Affiche/masque le code MATLAB source |
| `replotAll()` | 04-ebench-matlab-analysis.html | Met à jour les graphiques lors du changement de thème |

### 4.3 Interactions et API

**Aucune API externe** n'est utilisée (à l'exception des CDN de ressources statiques).

Les CDN utilisés :
- `https://fonts.googleapis.com/css2` — Google Fonts
- `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css` — Font Awesome
- `https://cdn.plot.ly/plotly-2.27.0.min.js` — Plotly.js (page MATLAB uniquement)

**Pas d'appels `fetch()`, `XMLHttpRequest`, ou WebSocket** dans tout le code.

### 4.4 Échanges de données

Toutes les données sont **codées en dur** dans les fichiers HTML/JS :

- Données solaires : calculées via formules mathématiques
- Données de consommation : tableaux JavaScript définis dans le code
- Données météo : valeurs fixes pour la Picardie (50°N)
- Données batterie : spécifications constructeur intégrées

---

## 5. Base de données

**Aucune base de données.** Le projet est entièrement statique. Les "données" sont :

1. **Calculées** (formules mathématiques pour le solaire)
2. **Codées en dur** (tableaux JS dans la page MATLAB)
3. **Textuelles** (contenu HTML des pages)

---

## 6. Configuration et déploiement

### 6.1 Fichiers de configuration

| Fichier | Contenu |
|---|---|
| `.gitignore` | Exclut : `.DS_Store`, `Thumbs.db`, `.vscode/`, `.idea/`, `*.swp`, `.qwen/`, `*.log`, `node_modules/`, `dist/`, `build/`, `.env`, `*.tmp` |
| `robots.txt` | `User-agent: *` — Autorise tout, référence le sitemap |
| `sitemap.xml` | 5 URLs avec `lastmod`, `changefreq`, `priority` |

### 6.2 Variables d'environnement

**Aucune.** Le site ne nécessite aucune variable d'environnement.

### 6.3 Procédure de lancement

**Méthode 1 — Local :**
```bash
# Ouvrir simplement le fichier dans un navigateur
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

**Méthode 2 — Serveur local :**
```bash
python -m http.server 8000
# puis http://localhost:8000
```

**Méthode 3 — GitHub Pages :**
1. Pusher sur un repository GitHub
2. Settings → Pages → Source : branche `main`, dossier `/root`
3. Le site est servi à `https://[user].github.io/[repo]/`

### 6.4 Dépendances critiques

| Dépendance | Version | Critique pour |
|---|---|---|
| Font Awesome | 6.5.1 (CDN) | Toutes les icônes du site |
| Google Fonts | 3 familles | Typographie |
| Plotly.js | 2.27.0 (CDN) | Uniquement page MATLAB |

**Sans CDN :** le site reste fonctionnel mais sans icônes, sans police custom (fallback système), et sans graphiques.

---

## 7. Fonctionnalités principales

### 7.1 Liste détaillée de toutes les features

#### Navigation
- **Navigation SPA** (Single Page Application) sur index.html — changement de section sans rechargement
- **Tab bar fixe** sur 02-ebench-2026.html — navigation horizontale scrollable
- **Sidebar de navigation** sur la page MATLAB — 7 sections avec rendu paresseux
- **Navigation classique par ancres** sur 03-ebench-2025.html
- **Menu hamburger** responsive sur toutes les pages

#### Thème
- **Basculement dark/light** avec animation de transition 0.4s
- **Persistance du thème** via localStorage
- **Thème par défaut : dark** (`data-theme="dark"` sur `<html>`)

#### Animations
- **Reveal au scroll** — éléments apparaissent avec fade-in + slide-up
- **Délais de révélation** — `.reveal-delay-1` à `.reveal-delay-4` pour les effets en cascade
- **Hover effects** — cartes avec élévation, glow, translation
- **Pulse animation** — indicateur "live" sur le hero
- **Orb flottants** — décorations d'arrière-plan animées

#### Contenu
- **Hero** avec statistiques clés et métriques simulées en temps réel
- **Section équipe** — 5 membres avec photos, rôles et compétences
- **Section Olympiades** — médaille de bronze, fonctionnalités du projet
- **Section conception** — choix de design, matériaux, limites
- **Section technologies** — 6 feature cards (solaire, batterie, USB-C, etc.)
- **Section logiciel** — organigramme, technologies, schéma de câblage SVG
- **Section énergie** — bilan production/consommation avec barres animées
- **Section normes** — liste des normes applicables
- **Galerie** — grille de photos avec lightbox (sur index.html)
- **CTA final** — appel à l'action avec boutons

#### Dashboard MATLAB
- **7 pages d'analyse** avec graphiques Plotly.js interactifs
- **Code MATLAB source** affichable/masquable pour chaque analyse
- **Tableaux récapitulatifs** de données
- **Thème synchronisé** — les graphiques s'adaptent au thème dark/light
- **Hamburger menu** responsive

#### SEO
- **Meta tags Open Graph** pour le partage social
- **Meta Twitter Card** pour Twitter
- **Canonical URLs**
- **Sitemap XML**
- **robots.txt**

#### Accessibilité
- **Attributs `aria-label`** sur les boutons icônes
- **Classe `.sr-only`** pour le texte invisible mais accessible aux screen readers
- **`focus-visible`** styles sur tous les éléments interactifs
- **Fallback** pour les navigateurs sans IntersectionObserver

---

## 8. Points techniques importants

### 8.1 Sécurité

| Aspect | État | Détail |
|---|---|---|
| **XSS** | Faible risque | Pas d'input utilisateur, pas d'innerHTML avec données externes |
| **CSP** | Non défini | Aucun Content-Security-Policy header |
| **HTTPS** | Oui (GitHub Pages) | Forcé par GitHub Pages |
| **SRI** | Partiel | Font Awesome utilise `integrity` + `crossorigin="anonymous"`, Google Fonts non |
| **Secrets** | Aucun | Pas de clés API, pas de tokens |
| **données personnelles** | Minimales | Prénoms des étudiants, photos |

### 8.2 Performance

| Aspect | État | Détail |
|---|---|---|
| **Taille totale** | ~200-300 KB (HTML+CSS+JS) | Hors images et CDN |
| **Rendu paresseux** | Oui | Graphiques Plotly rendus uniquement à la demande |
| **Images** | WebP + JPG | Format WebP pour les photos d'équipe (plus léger) |
| **Fonts** | 3 familles via Google Fonts | `preconnect` pour réduire la latence |
| **CDN** | 3 CDN externes | Font Awesome, Google Fonts, Plotly.js |
| **Caching** | Dépend du navigateur | GitHub Pages envoie des headers cache standard |
| **IntersectionObserver** | Oui | Unobserve après reveal — pas de calcul continu |
| **prefers-reduced-motion** | Partiel | `scroll-behavior: smooth` désactivé si préférance |

### 8.3 Dépendances critiques

1. **Font Awesome** — Sans lui, toutes les icônes disparaissent (le site reste lisible)
2. **Google Fonts** — Sans lui, fallback sur les polices système (Space Grotesk → sans-serif, Bebas Neue → cursive)
3. **Plotly.js** — Sans lui, la page MATLAB n'affiche aucun graphique (mais la navigation fonctionne)

### 8.4 Responsive design

4 breakpoints dans `theme.css` :

| Breakpoint | Cible | Changements |
|---|---|---|
| `1024px` | Tablettes | Grilles passent à 2 colonnes, hero en colonne unique |
| `768px` | Mobile | Navbar passe en hamburger, grilles 2 colonnes |
| `480px` | Petit mobile | Toutes les grilles en 1 colonne, stats empilées |
| `900px` | Dashboard MATLAB | Sidebar passe en overlay avec hamburger |

### 8.5 Système de design (Design Tokens)

**Palette principale (dark) :**
```
--bg:        #080C14  (fond principal)
--bg-2:      #0D1220  (fond secondaire)
--bg-card:   #111827  (fond des cartes)
--text:      #F0F4FF  (texte principal)
--text-sub:  #8899B4  (texte secondaire)
--primary:   #00D4A0  (vert émeraude — couleur de marque)
--blue:      #3B82F6  (bleu — accent secondaire)
--amber:     #F59E0B  (ambre — alertes/avertissements)
--red:       #EF4444  (rouge — erreurs/limitations)
```

**Typographie :**
- **Titres display :** Bebas Neue (condensé, sans-serif)
- **Corps de texte :** Space Grotesk (géométrique, moderne)
- **Code/monospace :** JetBrains Mono

---

## 9. Résumé global — Synthèse du fonctionnement de A à Z

### Cycle de vie d'une visite

1. **Arrivée** : L'utilisateur ouvre `index.html` (localement ou via GitHub Pages)
2. **Chargement initial** :
   - Le navigateur parse le HTML avec `data-theme="dark"` par défaut
   - `theme.css` est chargé — applique les variables CSS et le style de base
   - `theme-toggle.js` s'exécute — vérifie `localStorage` et applique le thème sauvegardé
   - `reveal.js` s'exécute — installe l'IntersectionObserver sur les éléments `.reveal`
3. **Navigation** : L'utilisateur clique sur les onglets de la navbar → le JS bascule la classe `.active` sur les `<div class="page">` → la section correspondante apparaît avec une animation `fadeIn`
4. **Scroll** : En descendant, les éléments `.reveal` deviennent `.visible` via IntersectionObserver → animation d'apparition
5. **Changement de thème** : Clic sur le toggle → `toggleTheme()` change `data-theme` sur `<html>` → toutes les variables CSS se recalculent → transition de 0.4s sur tous les éléments
6. **Pages annexes** : Les liens vers `02-ebench-2026.html`, `03-ebench-2025.html`, `04-ebench-matlab-analysis.html`, `05-ebench-normes.html` sont des navigation classiques (rechargement complet)

### Architecture technique résumée

```
┌─────────────────────────────────────────────────────────┐
│                    NAVIGATEUR CLIENT                     │
│                                                          │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────────┐ │
│  │  HTML Pages  │  │  theme.css  │  │  JS Modules      │ │
│  │  (5 fichiers)│  │ (design sys)│  │  - theme-toggle  │ │
│  │             │  │             │  │  - reveal        │ │
│  │  - index     │  │  - vars     │  │  - MATLAB charts  │ │
│  │  - 2026 alt  │  │  - reset    │  │                  │ │
│  │  - 2025 arch │  │  - buttons  │  │  CDN Externes:    │ │
│  │  - MATLAB    │  │  - cards    │  │  - Font Awesome  │ │
│  │  - Normes    │  │  - layout   │  │  - Google Fonts  │ │
│  │             │  │  - responsive│ │  - Plotly.js     │ │
│  └─────────────┘  └─────────────┘  └──────────────────┘ │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐ │
│  │              localStorage (thème)                    │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐ │
│  │              Assets statiques                        │ │
│  │  - 12 images (JPG, WebP)                             │ │
│  │  - 1 SVG (schéma de câblage)                         │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
         ▲
         │  Aucun serveur backend
         │  Aucune API
         │  Aucune base de données
         │  Aucun build process
         ▼
┌─────────────────────────────────────────────────────────┐
│                    GitHub Pages (CDN)                    │
│              Service statique HTTP/HTTPS                 │
└─────────────────────────────────────────────────────────┘
```

### En une phrase

**E-Bench est un site vitrine statique, entièrement côté client, qui présente un projet étudiant de banc solaire intelligent avec des visualisations de données interactives, un système de thème dark/light, et une navigation SPA — le tout déployé sur GitHub Pages sans aucune infrastructure serveur.**
