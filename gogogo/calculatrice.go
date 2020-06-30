package main

import "fmt"
var resultat float32
var nombre1 float32
var nombre2 float32
var choice int

func main(){
	fmt.Println("Bonjour, veuillez entrez votre premier nombre")
	fmt.Scanf("%d", &nombre1)
	
	fmt.Println("Veuillez taper votre deuxieme nombre")
	fmt.Scanf("%d", &nombre2)

	fmt.Println("Que voulez vous faire ? (1: addition, 2:soustraction, 3:multiplication, 4:division)")
	fmt.Scanf("%d", &choice)
	switch choix:=choice; choix{ 
		case 1: 
		resultat = nombre1 + nombre2
		fmt.Println(resultat) 
		case 2: 
		resultat = nombre1 - nombre2
		fmt.Println(resultat)  
		case 3: 
		resultat = nombre1 * nombre2
		fmt.Println(resultat) 
		case 4: 
		resultat = nombre1/nombre2
		fmt.Println(resultat)  
		default:  
		fmt.Println("Je n'ai pas compris") 
	} 
	  
}