void setup()
{
  // étape 1 : déterminer une taille et mettre une couleur de background
  size(800, 400);
  background(249, 218, 219); // <- le rose Ada
}

void draw()
{
  // étape 4 : c'est là que tout se passe, maintenant qu'on a créé nos 3 fonctions qui vont nous permettre de dessiner, il suffit de les utiliser pour placer chaque élément ou on veut
  // le premier a : un rond + une barre + un oeil
  rondRouge(150, 200);
  barreVerticale(250, 200, 150);
  oeil_qui_bouge(150, 200); // Le code s'éxecute dans l'ordre, ça veut dire que si j'apelle la fonction oeil() avant la fonction rondRouge(), ben le rond va se dessiner par dessus l'oeil, donc on le verra pas.
  
  // le d, un rond + une barre plus longue.
  rondRouge(400, 200);
  barreVerticale(500, 150, 250);
  
  // le deuxième a
  rondRouge(650, 200);
  barreVerticale(750, 200, 150);
  oeil(650, 200);
}


// étape 2 : créer une fonction qui dessine un rond rouge avec une taille, une épaisseur, et une couleur fixes
void rondRouge(int posX, int posY) // posX et posY sont les paramètres de la fonction, ils permettent de choisir sa position
{
  stroke(231, 79, 60); // le rouge Ada
  strokeWeight(25); // l'épaisseur
  fill(249, 218, 219); // l'intérieur (on peut préciser que la fonction stroke() détermine la couleur du contour et la fonction fill() celle de remplissage). 
  ellipse(posX, posY, 150, 150); // l'instruction qui dessine le rond en fonction des paramètres, visuellement ça peut être intéressant de faire une flèche entre les posX posY de cette ligne et ceux de la ligne 20. 
}

// étape 3 : un peu pareil que la 2, sauf que la la fonction dessine une barre verticale. 
void barreVerticale(int posX, int posY, int hauteur) // elle a un paramètre en plus par ce qu'on veut pouvoir augmenter sa hauteur (pour faire la barre du d)
{
  fill(231, 79, 60);// le rouge Ada
  noStroke(); // là on veut pas de bords, la barre est toute rouge
  rectMode(CENTER); // par défaut la position d'un rectangle est celle de son coin en haut à gauche, on peut utiliser rectMode() pour lui dire qu'on veut le placer par rapport à son centre, ce qui est beaucoup plus pratique ici
  rect(posX, posY, 25, hauteur); // l'instruction qui dessine le rectangle 
}

// étape 3 : une fonction qui dessine un oeil
void oeil(int posX, int posY) // même chose qu'avant, tous les paramètres de l'oeil sont fixes à part sa position
{
  fill(0); // le centre noir. 
  stroke(100, 100, 241); // les yeux bleus Isabelle a
  strokeWeight(10); // le tour des yeux
  ellipse(posX, posY, 25, 25); // et on le dessine
}

// étape 5 : faire varier la position des yeux en fonction de la souris : introduction à la fonction map(), très utilisée en processing et qui sert à faire beaucoup de choses. En gros il faut modifier la fonction oeil comme ça :
void oeil_qui_bouge(int posX, int posY) // même chose qu'avant, tous les paramètres de l'oeil sont fixes à part sa position
{
  fill(0); // le centre noir. 
  stroke(100, 100, 241); // les yeux bleus Isabelle a
  strokeWeight(10); // le tour des yeux
  ellipse(map(mouseX, 0, width, posX - 50, posX + 50), map(mouseY, 0, height, posY - 50, posY + 50), 25, 25); // et on le dessine
}

// là y'a les deux versions de la fonction oeil, celle qui bouge et celle qui bouge pas, le but dans l'exercice c'est de d'abord faire la première et ensuite de la modifier pour la deuxième, pas d'en avoir deux mais jpense que t'avais compris
// en tout cas il suffit de remplacer au moment ou tu les apelle dans la draw() pour voir la diff, mais au final il faut pas mettre les deux, c'est confusing. 
// la fonction map() permet de prendre une variable et de de changer son "échelle", voir la doc de map() (ça vaut le coup de mettre un lien vers la doc Processing de la fonction. Ici on veut que la position
// de la souris, qui varie normalement horizontalement entre 0 et width et verticalement entre 0 et height, nous donne un résultat qui reste dans les lettres (donc à peu près à 50 px du centre, d'ou posX - 50 comme 
// minimum et posX + 50 comme maximum, et pareil pour posY vu que les yeux sont ronds. 

// voilà. En gros cet exercice porte essentiellement sur la notion de fonction et de paramètres. Qu'est ce qu'on veut pouvoir choisir (la position des formes essentiellement, et la hauteur de la barre du d)
//et qu'est-ce qu'on veut toujours laisser pareil (les couleurs, les épaisseurs, la taille des yeux, des ronds) et qui donc n'ont pas besoin d'être des paramètres, on est bien contents que ça soit toujours les mêmes. 

// peut être qu'on peut rajouter la fonction map() comme un bonus à la fin, je me rends pas trop compte. 
