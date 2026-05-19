# QR Code d'appel — Le coin d'Anna

Projet complet : un générateur de QR codes + une page qui lance un appel
téléphonique automatiquement quand le QR est scanné.

## Contenu du dossier

- `index.html` — le générateur de QR codes (page d'accueil du site)
- `appel.html` — la page de redirection : quand on la visite, le téléphone
  compose le numéro automatiquement
- `README.md` — ce fichier

## Les deux modes du générateur

### Mode « Dynamique » (recommandé)
Le QR code pointe vers ta page `appel.html`. Pour changer le numéro plus tard,
tu modifies UNE ligne dans `appel.html` et tu redéploies — tous les QR codes
déjà imprimés appelleront le nouveau numéro, sans réimpression.

### Mode « Appel direct »
Le QR encode directement `tel:0751379244`. Simple, mais figé : changer le
numéro oblige à régénérer et réimprimer le QR.

## Changer le numéro de téléphone

Ouvre `appel.html` et modifie cette ligne :

    const NUMERO = "0751379244";

Remplace par le nouveau numéro, sauvegarde, redéploie. C'est tout.

## Déployer sur Vercel

### Méthode simple (glisser-déposer)
1. Va sur vercel.com et connecte-toi
2. Clique sur « Add New » puis « Project »
3. Fais glisser ce dossier entier dans la zone de dépôt
4. Le site est en ligne en moins d'une minute

Tu obtiens deux pages :
- `ton-projet.vercel.app`         → le générateur
- `ton-projet.vercel.app/appel`   → la page d'appel

### Méthode GitHub (pour modifier facilement plus tard)
1. Crée un dépôt GitHub et ajoute les fichiers du dossier
2. Dans Vercel : « Add New » → « Project » → importe le dépôt
3. Chaque modification poussée sur GitHub redéploie le site

## Étapes pour créer ton QR code final

1. Déploie le projet sur Vercel
2. Note l'adresse de ta page d'appel : `ton-projet.vercel.app/appel`
3. Ouvre le générateur (`ton-projet.vercel.app`)
4. Garde le mode « Dynamique » et colle l'adresse de ta page d'appel
5. Choisis tes couleurs, ajoute le logo « Le coin d'Anna »
6. Clique sur « Générer », puis télécharge en PNG ou SVG
7. Imprime le QR — au scan, il lancera l'appel vers ton numéro

Note : pour l'impression, le format SVG est préférable (qualité parfaite à
toute taille).
