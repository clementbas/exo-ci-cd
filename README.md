# Exercice CI/CD - Master 1 2025/2026

Une API Express TypeScript avec une pipeline CI/CD complète, linting, formatting, tests unitaires, pre-commit hooks, et Docker. rajout test

## 📋 Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Scripts disponibles](#scripts-disponibles)
- [Structure du projet](#structure-du-projet)
- [Configuration](#configuration)
- [Tests](#tests)
- [Linting et Formatting](#linting-et-formatting)
- [Git Workflow](#git-workflow)
- [Docker](#docker)
- [Pipeline CI/CD](#pipeline-cicd)

## ✨ Fonctionnalités

### Requises
✅ **API minimale Node.js/Express** avec routes JSON
✅ **TypeScript** avec configuration stricte
✅ **ESLint** avec script `npm run lint`
✅ **Prettier** pour le formatting du code
✅ **Variables d'environnement** avec dotenv
✅ **Husky** avec pre-commit hooks
✅ **GitHub Actions** pour CI/CD
✅ **Jest** avec tests unitaires
✅ **Git workflow** avec branches (develop/staging/main)

### Bonus
✅ **Docker** pour l'API avec Dockerfile et docker-compose
✅ **Tests unitaires complets** avec supertest
✅ **Coverage** de tests intégré

## 🔧 Prérequis

- Node.js 18+ ou 20+
- npm 9+
- Git
- Docker (optionnel, pour la containerisation)

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/clementbas/exo-ci-cd.git
cd exo-ci-cd

# Installer les dépendances
npm install

# Initialiser Husky
npm run prepare

# Créer le fichier .env (basé sur .env.example)
cp .env.example .env
```

## 🚀 Scripts disponibles

```bash
# Développement
npm run dev              # Lancer le serveur en développement (ts-node)
npm run build           # Compiler TypeScript en JavaScript
npm start               # Lancer le serveur avec la version compilée

# Linting et Formatting
npm run lint            # Vérifier le code avec ESLint
npm run lint:fix        # Corriger automatiquement les erreurs ESLint
npm run prettier        # Formatter le code avec Prettier
npm run ts              # Vérifier TypeScript sans compiler

# Tests
npm test                # Lancer les tests Jest
npm run test:watch      # Lancer les tests en mode watch

# CI/CD
npm run prepare         # Initialiser Husky
```

## 📁 Structure du projet

```
exo-ci-cd/
├── src/
│   ├── index.ts        # Point d'entrée de l'application
│   └── app.ts          # Configuration Express
├── tests/
│   └── app.test.ts     # Tests unitaires
├── dist/               # Fichiers compilés (généré par npm run build)
├── .github/
│   └── workflows/
│       └── ci.yml      # Workflow GitHub Actions
├── .husky/
│   └── pre-commit      # Hook pre-commit
├── Dockerfile          # Configuration Docker
├── docker-compose.yml  # Configuration Docker Compose
├── .env                # Variables d'environnement
├── .env.example        # Template des variables d'environnement
├── .gitignore          # Fichiers à ignorer par Git
├── .prettierrc          # Configuration Prettier
├── eslint.config.js    # Configuration ESLint
├── jest.config.js      # Configuration Jest
├── tsconfig.json       # Configuration TypeScript
└── package.json        # Dépendances et scripts
```

## ⚙️ Configuration

### Variables d'environnement (.env)

```env
NODE_ENV=development
PORT=3000
API_VERSION=1.0.0
```

### Routes disponibles

- `GET /` - Message de bienvenue avec version API
- `GET /health` - Santé de l'application
- `GET /products` - Liste des produits
- `404` - Gestion des routes non trouvées

## 🧪 Tests

Les tests sont écrits avec **Jest** et **Supertest** pour les requêtes HTTP.

```bash
# Lancer tous les tests
npm test

# Lancer les tests en mode watch
npm run test:watch

# Les tests couvrent:
# ✓ GET / - Message de bienvenue
# ✓ GET /health - Status de santé
# ✓ GET /products - Liste des produits
# ✓ 404 - Gestion des erreurs
```

## 🔍 Linting et Formatting

### ESLint
- Configuration TypeScript complète
- Extend eslint:recommended et @typescript-eslint/recommended
- Validation stricte du code

```bash
npm run lint            # Vérifier
npm run lint:fix        # Corriger automatiquement
```

### Prettier
- Configuration standard
- Semi-colons activés
- Guillemets simples
- Largeur d'impression: 100

```bash
npm run prettier        # Formatter le code
```

## 🌳 Git Workflow

### Branches principales

- `main` - Production (protégée par les PRs)
- `staging` - Code destiné à la production
- `develop` - Développement

### Pre-commit Hooks (Husky)

Avant chaque commit, les actions suivantes s'exécutent automatiquement:
1. **ESLint** - Vérifie et corrige le code
2. **Prettier** - Formate le code

Configuration via `lint-staged` dans `package.json`.

## 🐳 Docker

### Build et run Docker

```bash
# Construire l'image
docker build -t exo-ci-cd .

# Lancer le conteneur
docker run -p 3000:3000 -e PORT=3000 exo-ci-cd

# Avec docker-compose
docker-compose up
```

### Features Docker

- ✅ Multi-stage build pour optimiser la taille
- ✅ Alpine Linux pour une image légère
- ✅ Healthcheck intégré
- ✅ Variables d'environnement configurables
- ✅ Production-ready

## 🔄 Pipeline CI/CD GitHub Actions

Automatisation complète avec GitHub Actions (`.github/workflows/ci.yml`):

### Triggers
- Pull Request vers `main` ou `staging`
- Push vers `main`, `develop`, ou `staging`

### Étapes CI
1. **Checkout** le code
2. **Setup Node.js** (18.x et 20.x)
3. **Installer** les dépendances (`npm ci`)
4. **ESLint** - Vérifier le linting
5. **TypeScript** - Compiler et vérifier les types
6. **Jest** - Lancer les tests avec coverage
7. **Build** - Compiler le projet
8. **Upload Coverage** - Vers Codecov

### Étapes Deploy (optionnel)
- Déclenché automatiquement sur PR vers main
- Build les artefacts
- Prêt pour déploiement sur Render/Vercel/Heroku

### Protection des branches

Pour activer la protection:
1. Allez dans Settings → Branches
2. Ajouter une règle pour `main`
3. Exiger que le workflow passe avant merge

## 📚 Dépendances principales

### Production
- **express** - Framework API
- **dotenv** - Gestion des variables d'environnement

### Développement
- **typescript** - Langage et compilation
- **ts-node** - Exécuter TypeScript directement
- **eslint** - Linting
- **prettier** - Code formatting
- **jest** - Framework de test
- **supertest** - Test des requêtes HTTP
- **husky** - Git hooks
- **lint-staged** - Linting sur les fichiers stagés
- **@typescript-eslint/** - Support TypeScript pour ESLint

## 🎯 Améliorations futures

- [ ] Déploiement automatique sur Render
- [ ] Authentification JWT
- [ ] Base de données (MongoDB/PostgreSQL)
- [ ] Documentation Swagger/OpenAPI
- [ ] E2E tests avec Cypress
- [ ] Performance monitoring

## 📝 Licence

MIT

## 👤 Auteur

Exercice CI/CD - Master 1 2025/2026
