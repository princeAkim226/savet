# Données espace client

## Créer un utilisateur (après demande d'inscription)

Depuis la racine du projet :

```bash
node scripts/create-user.js "email@exemple.com" "Nom du client" "MotDePasseChoisi"
```

Exemple :

```bash
node scripts/create-user.js client@savet.com "Jean Dupont" MonMotDePasse123
```

Le fichier `users.json` est créé automatiquement. En production, définir la variable d'environnement `SAVET_SECRET` (même valeur pour le hash des mots de passe et la signature des sessions).

## Fichiers

- `registrations.json` : demandes de création de compte (rempli par le formulaire d'inscription).
- `users.json` : comptes activés (créés avec le script ci-dessus).

Ces fichiers sont ignorés par Git (données sensibles).
