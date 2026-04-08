# Contexte
Tu vas recevoir le code HTML complet d’un site web (E-Bench 2026). Il s’agit d’un projet étudiant de banc public solaire. J’ai besoin que tu modifies ce fichier en appliquant les changements listés ci-dessous. Tu me fourniras en sortie le code HTML final complet, prêt à l’emploi.

# Modifications à appliquer

## 1. Images manquantes
- Dans la galerie et la section Design, les images pointent vers des fichiers locaux (`images/...`) qui n’existent pas.
- Remplace chaque image manquante par un **placeholder visuel** :
  - Un bloc de forme rectangulaire (rapport 4/3 pour la galerie, même dimensions que les images d’origine).
  - Fond gris clair en thème clair, gris foncé en thème sombre.
  - Un texte descriptif centré (ex. "Contrôleur MPPT", "Panneau solaire", "Capteur PIR", "Écran tactile", etc.) en police légèrement plus petite.
- Utilise du CSS inline ou une classe dédiée pour que ces placeholders respectent les thèmes clair/sombre.

## 2. Bouton "E-Bench 2025" et modale associée
- Supprime **complètement** :
  - Le bouton dans la navbar qui affiche "📁 E-Bench 2025".
  - Toute la modale (`<div id="modal2025">`) et le JavaScript associé (fonctions `open2025`, `close2025`, écouteurs).
- Ne garde aucun élément ni code relatif à cette fonctionnalité.

## 3. Accessibilité du menu hamburger
- Ajoute `aria-label="Menu"` sur le bouton avec la classe `hamburger`.
- Vérifie que l’attribut `aria-expanded` est bien mis à jour par la fonction `toggleMenu()` (actuellement c’est le cas, mais vérifie la cohérence).

## 4. Section normes (changement majeur)
- Actuellement il y a **65 cartes de normes** (`.norme-card`), ce qui alourdit la page.
- **Conserve l’intégralité des normes** dans le **tableau de synthèse** (`.normes-table-wrap`) qui reste exhaustif.
- **Réduis le nombre de cartes à environ 15–20** en ne gardant que les normes **critiques et emblématiques**, réparties par thème :
  - Sécurité électrique (NF C 15-100, IEC 62109, IEC 62477, NF C 15-712-1)
  - Modules photovoltaïques (IEC 61215, IEC 61730, IEC 62852)
  - Batterie GEL (IEC 60896-21/22, UN 2800)
  - Câbles & connectique PV (IEC 62930, EN 50262)
  - Accessibilité (NF P99-610, Arrêté 15 janv. 2007)
  - Compatibilité électromagnétique (EN 55032, EN 300 328)
  - Mécanique & matériaux (NF EN 581-1/3, EN 1995-1-1, EN ISO 12944)
  - Logiciel & données (RGPD, ISO/IEC 25010, licences open source)
  - Écoconduction (Directive ErP, ISO 14001)
  - Résistance mécanique (remplace `EN 1627` par `NF EN 13724` ou `NF P99-650` si disponible)
- **Supprime** les cartes qui ne sont pas adaptées à un banc public : `EN 1176` (aires de jeux), `EN 1627` (effraction pour portes/fenêtres). Si elles existent dans le tableau, elles y restent.
- **Ajoute** si nécessaire les normes suivantes (dans le tableau de synthèse et éventuellement en carte) :
  - `NF EN 13330` – Exigences générales de sécurité du mobilier urbain
  - `NF P99-610` – Accessibilité de la voirie
  - `NF P99-650` – Résistance aux chocs du mobilier urbain (optionnel)
- Le tableau de synthèse doit **contenir toutes les normes**, y compris celles retirées des cartes. Il ne doit pas perdre d’informations.

## 5. Légende de la galerie
- Dans la galerie, la vignette avec la légende "🌦️ Module météo — 98 villes en temps réel" est incohérente (le banc fonctionne hors-ligne).
- Remplace cette légende par : **"🌦️ Module météo — données locales statiques"**.

## 6. Liens sociaux du footer
- Les icônes "🐙" et "💼" pointent vers `#`. Supprime ces deux éléments (`.social-btn`) ou remplace-les par des liens inactifs avec `href="javascript:void(0)"` et `aria-hidden="true"`.

## 7. Optimisations optionnelles (si possible sans casser le reste)
- Ajoute `font-display: swap` dans l’URL de Google Fonts (dans la balise `link`).
- Dans le JavaScript, modifie le `setInterval` de mise à jour du tableau de bord (fonction `updateDashboard`) pour qu’il s’arrête lorsque la page n’est pas visible (Page Visibility API). Ce n’est pas obligatoire mais apprécié.

# Résultat attendu
- Un fichier HTML unique, prêt à être visualisé dans un navigateur.
- Toutes les fonctionnalités (thème clair/sombre, menu responsive, graphiques, etc.) doivent rester intactes.
- Le code doit être propre et bien indenté.

Merci de me fournir le code HTML final après application de ces modifications.