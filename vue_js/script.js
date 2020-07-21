let cointoss = Math.random();
console.log(cointoss);

if (cointoss < 0.5)
{
    let bib = new Vue
    ({
        el: "#app",
        data:
        {
            pokemon: "Un jour je serais le meilleur dresseur"
        }
    });
}
else
{
    let bib = new Vue
    ({
        el: "#app",
        data:
        {
            pokemon: "attrapez les TOUS !"
        }
    });
}

let bulbe = new Vue
({
    el:"#bulbi",
    data:
    {
        bulbizarre: "https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png"
    }
});