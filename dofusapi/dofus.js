async function commetuveux()
{
    let url = "https://fr.dofus.dofapi.fr/pets";
    let response = await fetch(url);
    let json = await response.json();
    let img = [];
    for (let i in json) // je viens de réaliser qu'on pouvait faire ça en JS... le "in"
    {
        img[i] = document.createElement("img");
        img[i].src  = json[i].imgUrl;
        document.body.append(img[i]);
    }
}

commetuveux();


