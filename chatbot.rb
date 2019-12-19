#!/usr/bin/ruby
require 


def floBot


sleep(1)
	puts "je m'appelle Laure !"
sleep(1)
	puts "Laure.."
sleep(1.2)
	puts "..DINATEUR"
sleep(1)
	puts "HAHAHAHAHAHAHA"
sleep(1)
	puts "..."
sleep(1)
	puts "je suis si seul"
sleep(1.2)
	puts "Toi aussi ? dis moi, comment tu t'appelles ?"
	name = gets.strip!
sleep(1)
	puts "Salut " + name + " !"
sleep(2)
	puts name + "... ?"
sleep(1.5)
	puts "Tu veux être mon ami.e ?"
	answer = gets.strip!
	if answer == "oui" || answer == "ok"
sleep(0.5)
	puts "YOUPIIIIIII"
sleep(1)
	puts"bon, moi j'y vais, salut !"
sleep(1)
	exit
	elsif answer == "non" || answer == "no"
sleep(0.7)
	puts "va te faire foutre " + name
sleep(1)
	exit
	else
	puts "exprime toi plus clairement s'il te plait " + name
	end
	end

	puts "salut"
	prompt = gets.strip!

	until prompt == "salut" || prompt == "coucou" || prompt == "yo" do
	puts "Je n'ai pas compris, pouvez vous répéter"
	prompt = gets.strip!
	end
	floBot
