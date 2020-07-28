async function Yolo()
{
    let url = "https://clublecture.herokuapp.com/api/users";
    let response = await fetch(url);
    let json = await response.json();
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

Yolo();