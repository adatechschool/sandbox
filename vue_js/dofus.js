async function dofus_pets()
{
    let url = "https://fr.dofus.dofapi.fr/pets";
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    let numero = Math.floor(Math.random()*131);
    console.log(numero);

    let blaze = new Vue
    ({
        el: "#blaze",
        data:
        {
            nom: json[numero].name
        }
    });

    let iamg = new Vue
    ({
        el: "#image",
        data:
        {
            image: json[numero].imgUrl
        }
    });

    let description = new Vue
    ({
        el: "#description",
        data:
        {
            description: json[numero].description
        }
    });
}

dofus_pets();