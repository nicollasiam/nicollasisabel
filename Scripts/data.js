(function () {
    var frontend = {};
    var cooking = {};
    var videogame = {};
    var pokemon = {};
    var pics = {}

    // Start - Frontend skills
    frontend.skill1 = {
        name: "html",
        coord: "150,20"
    };
    frontend.skill2 = {
        name: "css",
        coord: "280,85"
    };
    frontend.skill3 = {
        name: "javascript",
        coord: "260,205"
    };
    frontend.skill4 = {
        name: "java",
        coord: "150,225"
    };
    frontend.skill5 = {
        name: "android",
        coord: "70,190"
    };
    frontend.skill6 = {
        name: "vb.net",
        coord: "70,110"
    };
    // End - Frontend skills

    // Start - Cooking skills
    cooking.skill1 = {
        name: "Dish Washing",
        coord: "150, 0"
    };
    cooking.skill2 = {
        name: "Meat",
        coord: "240, 105"
    };
    cooking.skill3 = {
        name: "Sweet",
        coord: "280, 215"
    };
    cooking.skill4 = {
        name: "Sauce",
        coord: "150, 265"
    };
    cooking.skill5 = {
        name: "Salad",
        coord: "70, 190"
    };
    cooking.skill6 = {
        name: "Pasta",
        coord: "120, 135"
    };
    // End - Cooking skills
    
    // Start - Video Gaming skills
    videogame.skill1 = {
        name: "rpg / mmorpg",
        coord: "150,35"
    };
    videogame.skill2 = {
        name: "moba",
        coord: "280,85"
    };
    videogame.skill3 = {
        name: "card game",
        coord: "280,215"
    };
    videogame.skill4 = {
        name: "action",
        coord: "150,215"
    };
    videogame.skill5 = {
        name: "fps",
        coord: "110,170"
    };
    videogame.skill6 = {
        name: "puzzle",
        coord: "40,95"
    };
    // End - Video Gaming skills

    // Start - Pokemon Trainer skills
    pokemon.skill1 = {
        name: "team work",
        coord: "150,30"
    };
    pokemon.skill2 = {
        name: "aim",
        coord: "240,105"
    };
    pokemon.skill3 = {
        name: "strenght",
        coord: "210,180"
    };
    pokemon.skill4 = {
        name: "luck",
        coord: "150,215"
    };
    pokemon.skill5 = {
        name: "charisma",
        coord: "20,215"
    };
    pokemon.skill6 = {
        name: "speed",
        coord: "120,135"
    };
    // End - Pokemon Trainer skills

    // Start - Pics
    pics = ["Resources/haunter.png", "Resources/kyogre.png", "Resources/lugia.png", "Resources/suicune.png"];
    // End - Pics

    // Set objects to the window
    window.frontend = frontend;
    window.cooking = cooking;
    window.videogame = videogame;
    window.pokemon = pokemon;
    window.pics = pics;

})();