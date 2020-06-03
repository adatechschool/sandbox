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
