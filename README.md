# Kasa - Refonte du site de location d’appartements

Bienvenue dans le projet de refonte du site Kasa, une entreprise leader dans la location d'appartements entre particuliers en France. Ce projet vise à moderniser le site web en utilisant une stack JavaScript complète avec React pour le front-end et NodeJS pour le back-end.

## Table des matières

- [Présentation](#présentation)
- [Installation](#installation)
- [Lancement du projet](#lancement-du-projet)
- [Spécifications des composants](#spécifications-des-composants)
- [Contraintes techniques](#contraintes-techniques)
- [Contraintes fonctionnelles](#contraintes-fonctionnelles)
- [Ressources](#ressources)

## Présentation

Le site actuel de Kasa a été codé il y a plus de 10 ans en ASP. NET. Une refonte totale est en cours pour passer à une stack JavaScript moderne. Vous êtes chargé de développer l'ensemble de l'application front-end en React, en suivant les maquettes Figma et en respectant les guidelines de Kasa.

## Installation

Pour installer et configurer le projet, suivez les étapes ci-dessous :

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/votre-utilisateur/kasa-refonte.git
    cd kasa-refonte
    ```

2. Installez les dépendances :
    ```bash
    npm install
    ```

## Lancement du projet

Pour démarrer le projet en mode développement, exécutez :
``` bash
npm start 
```
L'application sera accessible à l'adresse http://localhost:3000.

## Spécifications des composants

### Gallery

- **Défilement des photos** : Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
- **Affichage unique** : S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
- **Dimension fixe** : La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront coupées et centrées dans le cadre de l’image.

### Collapse

- **État initial** : Les Collapses sont fermés à l'initialisation de la page.
- **Comportement au clic** : Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer. Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Contraintes techniques

- Utilisation de **Create React App** pour créer l'application React, mais vous pouvez utiliser un autre bundler comme Vite si vous préférez.
- Respect des **coding guidelines** de Kasa.

## Contraintes fonctionnelles

- Les maquettes Figma sont responsives.
- Les animations des menus déroulants doivent correspondre aux prototypes disponibles sur Figma.

## Ressources

- [Maquettes Figma](URL des maquettes)
- [Prototypes Figma](URL des prototypes)
- Données JSON des annonces

## Contact

Pour toute question ou suggestion, n'hésitez pas à contacter :

- **Laura, CTO** : laura@kasa.com
- **Paul, Designer** : paul@kasa.com