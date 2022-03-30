const fletchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeinput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
    fetch(url).then((res) =>{
        if (res.status != "200"){
            console.log(res)
            pokeimage("/images/triste.jpg")
        }
        else{
            return res.json();
        }
    }).then((data) =>{
        console.log(data);
        let pokeimg = data.sprites.other.home.front_default;
        let peso=data.weight;
        let altura=data.height;

        let tipoPok1;
        let tipoPok2;

        if(data.types.length==2)
        {
            tipoPok1 = data.types[0].type.name;
            tipoPok2 = data.types[1].type.name;
        }
        else
        {
            tipoPok1 = data.types[0].type.name; 
            tipoPok2 = "";
        }
        
        let pokeVida = data.stats[0].base_stat;
        let pokeAtack = data.stats[1].base_stat;
        let pokeDefensa = data.stats[2].base_stat;
        let pokeAtaqueespecial= data.stats[3].base_stat;
        let pokeDefensaespecial = data.stats[4].base_stat;
        let pokeVelocidad = data.stats[5].base_stat;

        console.log("Este es el primer tipo: " + tipoPok1);
        console.log("Este es el segundo tipo: " + tipoPok2);
        pokeimage(pokeimg);
        pokepeso(peso);
        pokepaltura(altura);
        poketipo(tipoPok1, tipoPok2);
        stats(pokeVida,pokeAtack,pokeDefensa,pokeAtaqueespecial,pokeDefensaespecial,pokeVelocidad);
    })

}
fletchPokemon();

const pokeimage = (url) => {
    const pokeimage= document.getElementById("pokeimg");
    pokeimage.src = url;
}
//muestra el peso
const pokepeso = (peso1) =>{
   // let weight=document.getElementById("peso");
    peso.innerHTML="Peso: "+peso1;
}
//muestra la altura
const pokepaltura = (altura1) =>{
    let height=document.getElementById("altura");
    altura.innerHTML="Altura: "+altura1;
}
const poketipo = (tipo1,tipo2) =>{
    type1.innerHTML = "Tipo 1: " + tipo1;
    type2.innerHTML = "Tipo 2: " + tipo2;
}    
const stats = (vida,ataque,defensa,ataqueesp,defensaesp,velocidad) =>{
    hp.innerHTML="hp: "+ vida;
    attack.innerHTML="ataque: "+ataque;
    defense.innerHTML="defensa: "+ defensa;
    special_at.innerHTML="Ataque especial: " + ataqueesp;
    special_def.innerHTML="Defensa especial: "+ defensaesp;
    speed.innerHTML="Velocidad: "+velocidad;
}
