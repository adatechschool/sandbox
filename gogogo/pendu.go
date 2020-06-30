package main

import "fmt"
import "strings"

var mot string
var nb_chances int
var input string

func main(){
	nb_chances := 11
	fmt.Println("Joueur 1, entrez un mot : ")
	fmt.Scanf("%s", &mot)
	print_tirets()	
	fmt.Println("Joueur 2, à toi de jouer !")
	for true {
		fmt.Println("Choisissez une lettre")
		fmt.Scanf("%s", &input)
		lettre := input[0:1]
		fmt.Println(lettre)
		//vérifier qu'on a bien qu'une seule lettre (ou ne prendre que la première)
		if strings.Contains(mot, lettre){
			//remplacer l'* dans le résultat par la bonne lettre
			fmt.Println("Bien ouej")
			//condition de victoire
		} else {
			nb_chances--
			fmt.Println("Il te reste ", nb_chances, " chances")
		}
		if nb_chances == 0{
			fmt.Println("Pendu !")
			break
		}
	}
}

func print_tirets(){
	tirets := ""
	for i := 0; i < len(mot); i++{
		tirets += "*"
	}
	fmt.Println(tirets)	
}