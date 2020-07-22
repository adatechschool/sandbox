async function starwars()
{
    let url = "https://swapi.dev/api/planets";
    let response = await fetch(url);
    let json = await response.json();
    let planets = json.results;
    console.log(json);
    let nom = []
    for (i in planets)
    {
        nom[i] = document.createElement("div");
        nom[i].innerHTML = planets[i].name;
        document.body.append(nom[i]);
    }

    // let name = new Vue 
    // ({
    //     el:"#nom",
    //     data:
    //     {
    //         nom:planets[0].name
    //     }
    // });
}

starwars();