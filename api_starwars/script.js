async function starwars()
{
    let url = "https://swapi.dev/api/planets";
    let response = await fetch(url);
    let json = await response.json();
    let planets = json.results;
    console.log(planets);
    let i = Math.floor(Math.random()*10);
    let vue = new Vue 
    ({
        el:"#planete",
        data:
        {
            nom: planets[i].name,
            diametre: planets[i].diameter,
            climat: planets[i].climate,
            terrain: planets[i].terrain,
            habitants: planets[i].population
        }
    });
}

starwars();