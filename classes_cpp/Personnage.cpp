#include "Personnage.hpp"

Personnage::Personnage()
{
    nom = "Porygon";
    points_de_vie = 100;
}

void Personnage::sePresenter()
{
    std::cout << "Je m'apelle " << nom << std::endl;
}


/*
Code ajouté mercredi mais non testé :

void Personnage::augmenterPointsDeVie()
{
    points_de_vie = points_de_vie + 100 ;
}


void Personnage::setName(std::string nouveauNom)
{
    // ici on pourrait vérifier si ce n'est pas injurieux ou autre critère sur le nom
    nom = nouveauNom ;
}*/
