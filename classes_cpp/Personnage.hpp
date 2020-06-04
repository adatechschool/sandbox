#ifndef PERSONNAGE
#define PERSONNAGE
#include <iostream>


class Personnage
{
    std::string nom;
    int points_de_vie;
    public:
        Personnage();
        void sePresenter();
};

#endif

/*
Code ajouté mercredi mais non testé :

class Personnage
{
    std::string nom;
    int points_de_vie;
    void augmenterPointsDeVie();
    public:
        Personnage();
        void sePresenter();
        void setName(std::string nouveauNom);
};

*/
