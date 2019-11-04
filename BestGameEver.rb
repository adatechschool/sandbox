require 'colorize'
require 'juicy'

class Personnage
	
	def initialize(pv, attaque, defense)

	@pv_perso = pv
	@attaque_perso = attaque
	@defense_perso = defense

	end
	
	def pif(cible)
		cible.blessure(@attaque_perso)
	end

	def bloc
		@defense_perso = @defense_perso*2
		sleep(0.5)
		puts "Vous vous réfugiez courageusement derrière votre bouclier..."
	end
	def reset_defense(defense)

	@defense_perso = defense 

	end

	def super(cible)

	i = rand(2)
		if(i == 1)
		sleep(0.5)
			puts "Raté. Vous êtes bourré ou quoi ?".yellow
		else
			cible.megablessure(@attaque_perso)
		end
	end

	def blessure(degats)
		degats = degats - @defense_perso
		if degats <= 0
			degats = 1
		end
		@pv_perso = @pv_perso - degats
		sleep(0.5)
		puts "Vlan, vous perdez #{degats} pvs. Un pet de mouche...".red
	end

	def megablessure(degats)
		degats = degats - @defense_perso + rand(5)
		if degats <= 0
			degats = 1
		end
		@pv_perso = @pv_perso - degats
		sleep(0.5)
		puts "violent le bougre... #{degats} pv en moins et un t shirt ruiné".red
	end

	def getpv
		return @pv_perso
	end

	def getdef
		return @defense_perso
	end

	def soin
		@pv_perso = @pv_perso + 10
		puts "Vous avalez une potion de vie pour vous remettre de ce dur combat" + " +10 PV".green
	end

	def choice
		puts "Bravo aventurier ! Votre adresse au combat vous donne accès à un nouvel équipement, choisissez bien...(baton, epee, arc, cuillere) "
		sleep(0.7)
		nouveau_jouet = gets.chomp
		case nouveau_jouet
			when "baton"
				@pv_perso = @pv_perso + 20
				@attaque_perso = @attaque_perso + 5
				@defense_perso = @defense_perso + 2
			when "epee"
				@attaque_perso = @attaque_perso + 8
				@defense_perso = @defense_perso + 3

			when "arc"
				@pv_perso = @pv_perso + 10
				@attaque_perso = @attaque_perso + 10

			when "cuillere"
				@pv_perso = @pv_perso/2
				@attaque_perso = @attaque_perso*2
				@defense_perso = @defense_perso*2
		end
		puts "Un exellent choix, vos stats augmentées sont les suivantes : #{@pv_perso} pv, #{@attaque_perso} attaque et #{@defense_perso} defense, vous êtes prêt pour l'aventure !"
		sleep(0.5)
	end

	def loot
		if @pv_perso <= 30
			puts "Vous dropez une énorme potion de soin" + "+ 30 pv".green
			sleep(1)
			@pv_perso = @pv_perso + 30
		else 
			random = rand(1..3)
			if random == 1
				puts "La chance ! Une potion de robustesse" + "+ 1 defense".green
				@defense_perso = @defense_perso + 1
			else
				puts "Vous trouvez une potion du berserker" + "+ 1 en attaque".green 
			end
			sleep(1)
		end
	end
end


class Monster
	
	def initialize(pv = 0, attaque = 0, defense = 0)

		@pv_monster = pv
		@attaque_monster = attaque
		@defense_monster = defense 
		pv_courants = @pv_monster
	end

	def vlan(cible)
		cible.blessure(@attaque_monster)
	end

	def paf(cible)
		cible.megablessure(@attaque_monster)
	end

	def blessure(degats)
		degats = degats - @defense_monster
		@pv_monster = @pv_monster - degats
		sleep(0.5)
		puts "PIF ! le vilain monstre perd #{degats} points de vie !".green
	end

	def megablessure(degats)
		@pv_monster = @pv_monster - degats
		sleep(0.5)
		puts "Dans les dents ! #{degats} points de vie perdus!".green 
	end

	def getpv
		return @pv_monster
	end

	def getatq
		return @attaque_monster
	end

	def getdef
		return @defense_monster
	end

	def drop(cible)
		random = rand(1..2)
		if random == 1
			puts "les poches du monstre sont vides"
		else
			cible.loot
		end
			
	end
	
end
pvMechant = rand(50..100)
atqMonstre = rand(3..7)
defMonstre = rand(2..4)
a = 100
b = 10
c = 4

system("clear")
system("cls")

Monstre = Monster.new(pvMechant, atqMonstre, defMonstre)
Heros = Personnage.new(a, b, c)

def combat(heros, monstre)

	pvMechant = monstre.getpv
	atqMonstre = monstre.getatq
	defMonstre = monstre.getdef
	if pvMechant < 65
		sleep(0.5)
		puts "Oh ! Un gobelin ! Qu'il est mignon..."
	elsif pvMechant >= 65 && pvMechant < 80
		sleep(0.5)
		puts "Un orc, basique et classique. il crie et il pue..."
	elsif pvMechant >= 80 && pvMechant < 98
		sleep(0.5)
		puts "Un Troll des cavernes ! Vous aimeriez qu'il rajuste son pagne... il faut corriger ce goujat"
	elsif pvMechant > 97 && pvMechant < 120
		puts "Une hydre des ténèbres, original."
	else
		sleep(0.5)
		puts "Le boss final, tout simplement. Fuyez pauvre fou..."
	end

	sleep(0.5)
	puts "La bête est formidable, #{pvMechant} points de vie, une force de frappe de #{atqMonstre} et #{defMonstre} de défense ! Il va falloir jouer serré...".green.bold

	defense_base = heros.getdef
	current_pv_monster = monstre.getpv
	current_pv_heros = heros.getpv

	until current_pv_monster == 0 || current_pv_heros == 0 
		puts "Quelle action choisir ? (paf, block, super)"
		action = gets.chomp
		until action == "paf" || action == "block" || action == "super"
			action = gets.chomp
		end
		if action == "paf" 
			heros.pif(monstre)
		elsif action == "block"
			heros.bloc
		elsif action == "super"
			heros.super(monstre)
		end

		sleep(0.5)
		puts "Le monstre s'énerve, attention..."
		sleep(0.5)
		j = rand(2)
		if j == 1
			monstre.vlan(heros)
		else
			monstre.paf(heros)
		end
		heros.reset_defense(defense_base)
		current_pv_monster = monstre.getpv
		if current_pv_monster < 0
			current_pv_monster = 0
		end
		current_pv_heros = heros.getpv
		if current_pv_heros < 0
			currrent_pv_heros = 0
		end
	
		puts "Il vous reste #{current_pv_heros} points de vie, le monstre en a #{current_pv_monster}"
		sleep(0.5)
		puts "Le combat continue !"
		sleep(0.5)
	end

	if current_pv_monster <= 0 
		sleep(0.5)
		puts "Gloire et honneur ! Vos ancètres sont fiers de vous...".green.bold
		sleep(1.5)
		monstre.drop(heros)
	elsif current_pv_heros <= 0
		sleep(0.5)
		puts "La bête a eu raison de vous, les ménestrels chanteront pendant bien longtemps votre courage... et votre stupidité".red.bold
	end
end

combat(Heros, Monstre)

system("clear")
system("cls")
Heros.soin
Heros.choice
pv_monstre2 = rand(75..125)
atq_monstre2 = rand(6..9)
def_monstre2 = rand(3..6)

sleep(1)
system("clear")
system("cls")

i = 1;

while Heros.getpv > 0
	i++
	sleep(1)
	system("clear")
	system("cls")
	puts "A peine remis de vos émotions, un autre monstre jaillit des ténèbres"
	sleep(0.5)
	pv_monstre = rand(75..125)
	atq_monstre = rand(3..7)
	def_monstre = rand(2..6)
	Monstre = Monster.new(pv_monstre, atq_monstre, def_monstre)	
	combat(Heros, Monstre)
	Heros.soin
end

