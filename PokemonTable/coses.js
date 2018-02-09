 console.log("detecta el js");


 var original_id = 549;

           /* function funcio_get(original_id) {*/
                $.get("https://www.pokeapi.co/api/v2/pokemon/" + original_id + "/", function(pokemon) {

                    var identifier = pokemon.id;
                    if (identifier == null) alert("The pokemon with the interested id does not exists.");
                    var img_norm = pokemon.sprites.front_default;
                    var img_norm2 = pokemon.sprites.back_default;
                    var img_shiny = pokemon.sprites.front_shiny;
                    var img_shiny2 = pokemon.sprites.back_shiny;
                    var nom = pokemon.name;
                    var tipos = pokemon.types;

                    $("#pkmid").html(identifier);
                    $("#img1").append('<img src="' + img_norm + '">');
                    $("#img12").append('<img src="' + img_norm2 + '">');
                    $("#img2").append('<img src="' + img_shiny + '">');
                    $("#img21").append('<img src="' + img_shiny2 + '">');
                    $("#nom").append(nom);
                    $("#tipus").html(tipos[0].type.name);
                    if(tipos.length >= 1) $("#tipus").html(tipos[0].type.name + " and " + tipos[1].type.name);

                }, "json" );
           /* }*/

           /* $("buttton").click(funcion() {
               /* original_id -= 1;*/
               /* if (class==pre) {
                    original_id -= 0;
                    funcio_get(original_id);
                    console.log(original_id);
                }
            }
            );/*
            $(".post").on("click", funcio_get(original_id+1) 
               /* original_id += 1;
            )*/