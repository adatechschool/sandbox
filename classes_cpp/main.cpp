#include <iostream>
#include "Personnage.hpp"

int main()
{
    Personnage monPersonnage;
    monPersonnage.sePresenter();
    return 0;
}

/*
Code ajouté mercredi mais non testé :

    std::string nouveauNom ;
    Personnage joueur1;
    Personnage joueur2;
    joueur1.sePresenter();
    joueur2.sePresenter();
    std::cout << "Veuillez entrer un nouveau nom pour notre personnage"
    std::cin >> nouveauNom ;
    joueur1.setName(nouveauNom) ;
    //monPersonnage.augmenterPointsDeVie();
    return 0;

*/
