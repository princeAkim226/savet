# Instructions pour le logo SAVET

## Emplacement du logo

Placez votre fichier logo dans ce dossier (`public/`) avec le nom : **`logo-savet.png`**

## Formats acceptés

Le logo peut être dans l'un de ces formats :
- `logo-savet.png` (recommandé)
- `logo-savet.svg` (meilleure qualité)
- `logo-savet.jpg` ou `logo-savet.jpeg`
- `logo-savet.webp`

## Taille recommandée

- **Header** : Largeur minimale de 120px, hauteur automatique
- **Footer** : Largeur minimale de 140px, hauteur automatique
- Format : PNG avec fond transparent (si possible) ou SVG

## Après avoir ajouté le logo

1. Renommez votre fichier en `logo-savet.png` (ou l'extension appropriée)
2. Placez-le dans le dossier `public/`
3. Si vous utilisez une extension différente (svg, jpg, webp), modifiez l'extension dans :
   - `components/header.tsx` (ligne avec `src="/logo-savet.png"`)
   - `components/footer.tsx` (ligne avec `src="/logo-savet.png"`)

## Exemple

Si votre fichier s'appelle `savet-logo.svg`, modifiez dans les deux fichiers :
- `src="/logo-savet.png"` → `src="/savet-logo.svg"`

