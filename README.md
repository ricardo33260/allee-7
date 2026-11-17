# Allée 7 · Test de décision cariste

Mises en situation de conduite de chariot élévateur, vues depuis le siège du cariste. Chaque test tire 7 situations au hasard parmi 20. Certaines continuent sous la pression d’un chef, d’un collègue ou d’un chauffeur. À la fin, un bilan s’affiche : score, accidents et incidents, résultat par compétence, capacité à tenir la règle sous pression, temps de décision et détail de chaque choix.

- **Entraînement** : la conséquence et la bonne pratique s’affichent après chaque décision.
- **Évaluation** : aucune correction pendant le test, bilan complet à la fin, à copier.
- **Temps pour décider** : Normal (30 s, réflexes 12 s), Étendu (60 s, réflexes 24 s) ou Sans limite.
- **Nom du candidat** facultatif : il apparaît seulement dans le bilan et n’est enregistré nulle part.

L’application fonctionne dans n’importe quel navigateur récent, sur ordinateur, tablette ou téléphone. Une fois ouverte une première fois, elle marche aussi sans connexion.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Le jeu complet : situations, graphismes, bilan |
| `manifest.webmanifest` | Permet d’installer l’application sur un téléphone ou une tablette |
| `sw.js` | Fait fonctionner l’application hors connexion |
| `icons/` | Icônes de l’application |
| `.nojekyll` | Indique à GitHub Pages de publier les fichiers tels quels |

## Mettre l’application en ligne avec GitHub Pages

Aucune installation n’est nécessaire, tout se fait sur le site de GitHub.

1. Connecte-toi sur github.com, clique sur **New repository**, nomme-le par exemple `allee7`, choisis **Public**, puis **Create repository**.
2. Sur la page du dépôt, clique sur **uploading an existing file**. Fais glisser **tout le contenu** de ce dossier (pas le dossier lui-même), y compris le dossier `icons`, puis clique sur **Commit changes**.
   Le fichier `.nojekyll` est masqué sur certains ordinateurs. S’il manque, l’application fonctionne quand même.
3. Va dans **Settings → Pages**. Dans **Build and deployment**, choisis **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
4. Attends une à deux minutes. L’adresse de l’application s’affiche en haut de la page **Pages**, sous la forme `https://ton-pseudo.github.io/allee7/`.

## Installer l’application sur un téléphone ou une tablette

- **Android (Chrome)** : ouvre l’adresse, puis menu **⋮ → Installer l’application** ou **Ajouter à l’écran d’accueil**.
- **iPhone ou iPad (Safari)** : ouvre l’adresse, bouton **Partager → Sur l’écran d’accueil**.

L’icône Allée 7 apparaît alors comme une application normale, en plein écran.

## Modifier les situations

Toutes les situations sont dans `index.html`, dans la liste `POOL`. Chacune contient :

- `title`, `comp` (Procédures, Maîtrise de la charge, Vigilance ou Réflexes), `t` (secondes pour décider), `place`, `alarm`, `text` ;
- `rule` : la bonne pratique affichée après la décision ;
- `choices` : quatre choix, dont un seul porte `ok:1`. Les autres ont `s:'incident'` ou `s:'grave'` et un texte de conséquence `x`.

Les libellés des choix sont réécrits plus bas, dans `RELABEL`, et les suites sous pression sont dans `FOLLOW`. Le nombre de situations par test se règle avec `const N=7`.

Pour publier une modification, dépose le nouveau `index.html` sur GitHub (**Add file → Upload files**). Pense aussi à changer `VERSION` en haut de `sw.js` (par exemple `allee7-v2`) pour que les appareils déjà installés récupèrent la nouvelle version.

## À savoir avant de l’utiliser pour recruter

- Le contenu n’a pas encore été validé par un formateur CACES R489. Fais relire les situations avant tout usage réel.
- En France, une méthode de recrutement doit avoir un lien direct avec le poste, et le candidat doit en être informé à l’avance (Code du travail, articles L1221-6 à L1221-9).
- L’application n’envoie ni ne stocke aucune donnée. Le bilan copié contient le nom du candidat s’il a été saisi : traite-le comme une donnée personnelle (RGPD), conservé le temps du recrutement seulement.
- Ce test aide à ouvrir la discussion. Il ne mesure pas à lui seul une aptitude à la conduite.
