#include "Personnage.hpp"

Personnage::Personnage()
{
    nom = "Porygon";
    points_de_vie = 100;
}

void Personnage::sePresenter()
{
    //affiche "je m'apelle" et après tu mets mon nom steplait
    std::cout << "Je m'apelle " << nom << std::endl;
}
