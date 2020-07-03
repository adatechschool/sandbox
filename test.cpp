#include <iostream>

//using namespace std;


int main ()
{
  std::cout << "Bonjour, monde !" << std::endl;
  return 0;
}


class Personnage_principal()
{
public:
    int getValue() const;
    void setValue(int value);
private:
    int value;
};