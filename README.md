# Projet 001 : Mon CV avec React et Vite

## Qu'est-ce que Vite ?
Vite est un outil qui permet de créer et lancer rapidement un projet React.
c'est outil qui prepare et lance ton projet react .Il aide a assemble les fichers et affiche la page

## Étapes de réalisation

### 1. Vérifier Node.js
```bash
node -v
npm -v
```

### 2. Créer le projet
```bash
npm create vite@latest 001 -- --template react
create vite@latset :lance le vite
001 :le nom 
---template react:```pour utilise react en js
```
Choix faits : React, JavaScript, puis installation et lancement automatiques.

### 3. Lancer le projet
```bash
cd 001
npm install
npm run dev
```
Le site s'ouvre sur http://localhost:5173/

### 4. Nettoyer App.jsx
J'ai supprimé la page de démo pour repartir d'un composant simple.

### 5. Créer les composants
Dans `src/composants/`, j'ai créé :
- `infoperso.jsx` : informations personnelles
- `competence.jsx` : compétences
- `experiences.jsx` : expériences

### 6. Assembler le CV
Dans `App.jsx`, j'ai importé les trois composants et je les ai affichés avec `<InfoPerso />`, `<Competence />` et `<Experiences />`.

## Rôle des dossiers et fichiers indispensables

| Nom | Rôle |
|---|---|
|

| `src/App.jsx` | Composant principal qui assemble le CV |
| `src/composants/` | Les composants du CV |
| `src/App.css`, `src/index.css` | Le style |
| `vite.config.js` | Réglages de Vite |
| `README.md` | Ce fichier d'explications |