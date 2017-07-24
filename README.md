### Pour développer
En local, le plus simple est de créer un serveur web qui sert le fichier index.html :
* Ouvrir un terminal dans le répertoire du repo git
* `python -m SimpleHTTPServer 8000`
* Naviguer sur `http://localhost:8000/`

### Pour déployer
Nous utilisons _github pages_, avec notre domaine alkeya.com branché dessus. https://help.github.com/articles/using-a-custom-domain-with-github-pages/.  
Chaque `git push` est donc un déployer en PROD automatiquement.

### Structure
* Template "one page" du site inspiré par : https://blackrockdigital.github.io/startbootstrap-scrolling-nav/  

### Sections
Une section représente une "page" du site, qui prend toute la hauteur de l'écran en affichage classique.
#### Références
* Carrousel de défilement des projets inspiré par: https://blog.madewithenvy.com/the-order-property-flexbox-carousels-87a168567820
* Les visuels font tous 834 x 626px (format 4:3)
