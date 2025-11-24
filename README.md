# 🎮 **API Pokémon**

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Licence](https://img.shields.io/badge/License-MIT-green)

------------------------------------------------------------------------

## 📌 Description

Projet réalisé en cours pour apprendre **Node.js**, **Express** et
l'utilisation de **Docker**.\
Ce projet contient une API backend en Node/Express et un frontend
moderne utilisant un framework basé sur Vite.

------------------------------------------------------------------------

## ⚙️ **Prérequis**

Assurez-vous d'avoir les outils suivants installés :

``` bash
node --version
npm --version
docker --version
```

------------------------------------------------------------------------

## 🚀 **Installation & Lancement du projet**

### **1. Cloner le projet**

``` bash
git clone https://github.com/MartinChrrr/thomas-express
```

------------------------------------------------------------------------

### **2. Configuration du backend**

Aller dans le dossier **back** :

``` bash
cd back
```
Lancer l'installation des modules:

``` bash
npm install
```

Créer un fichier `.env` basé sur `.env_sample` :

``` bash
PORT=3000
MONGO_URI=mongodb://mongo:27017/mon_projet_db
```

------------------------------------------------------------------------

### **3. Lancer les containers Docker**

``` bash
docker compose up --build
```

------------------------------------------------------------------------

### **4. Remplir la base de données**

Entrer dans le container Node :

``` bash
docker exec -it <nom_container_node> sh
```

Exécuter le script de seed :

``` bash
npx tsx src/seed.ts
```

------------------------------------------------------------------------

### **5. Lancer le frontend**

En dehors du container :

``` bash
cd ../front
```

Installer les dépendances :

``` bash
npm install
```

Démarrer le serveur de développement :

``` bash
npm run dev
```

------------------------------------------------------------------------

## 🎉 Le projet est prêt !

Vous pouvez maintenant accéder au frontend via l'URL fournie par
`npm run dev`, et à l'API via `http://localhost:3000`.
