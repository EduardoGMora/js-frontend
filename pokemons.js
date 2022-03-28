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
        const typePokemonx = document.getElementById("type");
        const typePokemon1x = document.getElementById("type1");
        let types0 = data.types[0].type.name;
        pokeimage(pokeimg);
        console.log(pokeimg);
        pokepeso(peso);
        pokepaltura(altura);


        if(data.types.length==2){
            let types1 = data.types[1].type.name;
            poketipo(types0, types1)
            /*Colores de los tipos-----------------------------------------------------*/
            if(types0=="psychic"){
                typePokemonx.style.backgroundColor = "#FABAF2"
            }
            else if(types0=="flying"){
                typePokemonx.style.backgroundColor = "#B4CCF6"
            }
            else if(types0=="fighting"){
                typePokemonx.style.backgroundColor = "#D55729"
            }
            else if(types0=="electric"){
                typePokemonx.style.backgroundColor = "#FFDE00"
            }
            else if(types0=="water"){
                typePokemonx.style.backgroundColor = "#0089FF"
            }
            else if(types0=="ground"){
                typePokemonx.style.backgroundColor = "#725000"
            }
            else if(types0=="normal"){
                typePokemonx.style.backgroundColor = "#D09100"
            }
            else if(types0=="steel"){
                typePokemonx.style.backgroundColor = "#ABABAB"
            }
            else if(types0=="rock"){
                typePokemonx.style.backgroundColor = "#B29042"
            }
            else if(types0=="fire"){
                typePokemonx.style.backgroundColor = "#EB0000"
            }
            else if(types0=="grass"){
                typePokemonx.style.backgroundColor = "#009C0A"
            }
            else if(types0=="dark"){
                typePokemonx.style.backgroundColor = "#505A51"
            }
            else if(types0=="bug"){
                typePokemonx.style.backgroundColor = "#d7de89"
            }
            else if(types0=="poison"){
                typePokemonx.style.backgroundColor = "#B500E2"
            }
            else if(types0=="ghost"){
                typePokemonx.style.backgroundColor = "#763C84"
            }
            else if(types0=="fairy"){
                typePokemonx.style.backgroundColor = "#FC55F1"
            }
            else if(types0=="ice"){
                typePokemonx.style.backgroundColor = "#00E6FF"
            }
            else if(types0=="dragon"){
                typePokemonx.style.backgroundColor = "#A27BC3"
            }else{
                typePokemonx.style.backgroundColor = "#FFFFFF"
            }
            /*COLORES TIPO SECUN*/
            if(types1=="psychic"){
                typePokemon1x.style.backgroundColor = "#FABAF2"
            }
            else if(types1=="flying"){
                typePokemon1x.style.backgroundColor = "#B4CCF6"
            }
            else if(types1=="fighting"){
                typePokemon1x.style.backgroundColor = "#D55729"
            }
            else if(types1=="electric"){
                typePokemon1x.style.backgroundColor = "#FFDE00"
            }
            else if(types1=="water"){
                typePokemon1x.style.backgroundColor = "#0089FF"
            }
            else if(types1=="ground"){
                typePokemon1x.style.backgroundColor = "#725000"
            }
            else if(types1=="normal"){
                typePokemon1x.style.backgroundColor = "#D09100"
            }
            else if(types1=="steel"){
                typePokemon1x.style.backgroundColor = "#ABABAB"
            }
            else if(types1=="rock"){
                typePokemon1x.style.backgroundColor = "#B29042"
            }
            else if(types1=="fire"){
                typePokemon1x.style.backgroundColor = "#EB0000"
            }
            else if(types1=="grass"){
                typePokemon1x.style.backgroundColor = "#009C0A"
            }
            else if(types1=="dark"){
                typePokemon1x.style.backgroundColor = "#505A51"
            }
            else if(types1=="bug"){
                typePokemon1x.style.backgroundColor = "#d7de89"
            }
            else if(types1=="poison"){
                typePokemon1x.style.backgroundColor = "#B500E2"
            }
            else if(types1=="ghost"){
                typePokemon1x.style.backgroundColor = "#763C84"
            }
            else if(types1=="fairy"){
                typePokemon1x.style.backgroundColor = "#FC55F1"
            }
            else if(types1=="ice"){
                typePokemon1x.style.backgroundColor = "#00E6FF"
            }
            else if(types1=="dragon"){
                typePokemon1x.style.backgroundColor = "#A27BC3"
            }else{
                typePokemon1x.style.backgroundColor = "#FFFFFF"
            }
        }else{
            poketipo(types0);
            if(types0=="psychic"){
                typePokemonx.style.backgroundColor = "#FABAF2"
            }
            else if(types0=="flying"){
                typePokemonx.style.backgroundColor = "#B4CCF6"
            }
            else if(types0=="fighting"){
                typePokemonx.style.backgroundColor = "#D55729"
            }
            else if(types0=="electric"){
                typePokemonx.style.backgroundColor = "#FFDE00"
            }
            else if(types0=="water"){
                typePokemonx.style.backgroundColor = "#0089FF"
            }
            else if(types0=="ground"){
                typePokemonx.style.backgroundColor = "#725000"
            }
            else if(types0=="normal"){
                typePokemonx.style.backgroundColor = "#D09100"
            }
            else if(types0=="steel"){
                typePokemonx.style.backgroundColor = "#ABABAB"
            }
            else if(types0=="rock"){
                typePokemonx.style.backgroundColor = "#B29042"
            }
            else if(types0=="fire"){
                typePokemonx.style.backgroundColor = "#EB0000"
            }
            else if(types0=="grass"){
                typePokemonx.style.backgroundColor = "#009C0A"
            }
            else if(types0=="dark"){
                typePokemonx.style.backgroundColor = "#505A51"
            }
            else if(types0=="bug"){
                typePokemonx.style.backgroundColor = "#d7de89"
            }
            else if(types0=="poison"){
                typePokemonx.style.backgroundColor = "#B500E2"
            }
            else if(types0=="ghost"){
                typePokemonx.style.backgroundColor = "#763C84"
            }
            else if(types0=="fairy"){
                typePokemonx.style.backgroundColor = "#FC55F1"
            }
            else if(types0=="ice"){
                typePokemonx.style.backgroundColor = "#00E6FF"
            }
            else if(types0=="dragon"){
                typePokemonx.style.backgroundColor = "#A27BC3"
            }else{
                typePokemonx.style.backgroundColor = "#FFFFFF"
            }
        }
    })

}
fletchPokemon();

const pokeimage = (url) => {
    const pokeimage= document.getElementById("pokeimg");
    pokeimage.src = url;
}
const pokepeso = (peso1) =>{
    let weight=document.getElementById("peso");
    peso.innerHTML="Peso: "+peso1;
}
const pokepaltura = (altura1) =>{
    let height=document.getElementById("altura");
    altura.innerHTML="Altura: "+altura1;
}
const poketipo = (tipo1,tipo2) =>{
    let type1=document.getElementById("type");
    let type2=document.getElementById("type1")
    if(type2==undefined){
        type.innerHTML=tipo1;
        type1.innerHTML=" ";
    }else{
        type.innerHTML=tipo1;
        type1.innerHTML=tipo2;
        console.log(type.innerHTML=tipo1,type1.innerHTML=tipo2)
    }
}
const stats = (estadisticas) =>{
    let 
}