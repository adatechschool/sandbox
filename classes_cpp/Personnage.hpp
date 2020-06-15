#ifndef PERSONNAGE
#define PERSONNAGE
#include <iostream>
//#include <fstream>

class Personnage
{
    std::string nom;
    int points_de_vie;
    public:
        Personnage();
        void sePresenter();
        // déclarer un accesseur ("geter") pour le nom
        //déclarer un "seter" pour le nom
};

#endif