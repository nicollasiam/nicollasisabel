$(function () {

    /************************************************/
    /********** COLLAPSE NAVBAR PROCEDURE ***********/
    /* Collapses the navbar when its focus **********/
    /* is lost **************************************/
    /************************************************/

    $("#navbarButton").blur(function (event) {
        if (window.innerWidth < 768) {
            $("#collapse-options").collapse('hide');
        }
    });

    /***************************************/
    /********** ACTIVE PROCEDURE ***********/
    /* Sets the .active class to the *******/
    /* correct navbar item *****************/
    /***************************************/

    $("#nav-list a").on("click", function () {
        $("#nav-list").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    /************************************************/
    /********** ALTERNATE IMAGE PROCEDURE ***********/
    /* Sets the first image and then ****************/
    /* changes randomly to other images *************/
    /************************************************/
    $("#photo").attr("src", "Resources/haunter.png");
    window.setInterval(function () {
        $("#photo").fadeOut(2000, "swing", function () {
            $("#photo").attr("src", pics[Math.floor(Math.random() * pics.length)]);
            $("#photo").fadeIn(1000, "swing");
        });
    }, 7000);    
});

/*******************************************/
/********** SWAP WORDS PROCEDURE ***********/
/* Chage icons shown, according to the *****/
/* word placed in #box1 ********************/
/*******************************************/

function dragWord(dragEvent) {
    dragEvent.dataTransfer.setData("text/html", dragEvent.target.textContent + "|" + dragEvent.target.parentNode.id);
}

function dropWord(dropEvent) {
    var dropData = dropEvent.dataTransfer.getData("text/html");
    var dropItems = dropData.split("|");
    var prevElem = document.getElementById(dropItems[1]);

    // Remove spaces so I can edit properly
    // depending on the place taken/droped
    var switchedWord = dropEvent.target.textContent.trim();
    var dropedWord = dropItems[0].trim();

    // Check the place where the word will be droped
    // to properly edit the word
    switch (dropEvent.target.parentNode.id) {
        case "box2":
        case "box3":
        case "box5":
            dropedWord = "&nbsp;" + dropedWord;
            break;

        case "box1":
        case "box4":
            dropedWord = "&nbsp;" + dropedWord + "&nbsp;";
            break;
    }

    // Check the place where the word was taken from
    // to properly edit the word
    switch (prevElem.id) {
        case "box2":
        case "box3":
        case "box5":
            switchedWord = "&nbsp;" + switchedWord;
            break;

        case "box1":
        case "box4":
            switchedWord = "&nbsp;" + switchedWord + "&nbsp;";
            break;
    }

    // Insert switched word in origin node
    prevElem.getElementsByTagName("div")[0].innerHTML = switchedWord;
    // Insert droped word in target node
    document.getElementById(dropEvent.target.id).innerHTML = dropedWord;
    dropEvent.preventDefault();

    // Check which word is placed in '#box1' div
    switch (document.getElementById("box1").getElementsByTagName("div")[0].textContent.trim().toLowerCase()) {        
        case "front end developer":
            ChangeSkillNames(frontend);
            AnimatePolygon(frontend);
            document.getElementById("skill1").style.left = "150px";
            document.getElementById("skill5").style.left = "-75px";
            break;

        case "technology":            
            document.getElementById("secondDiv").style.backgroundColor = "#00ff00";
            break;

        case "cooking":
            ChangeSkillNames(cooking);
            AnimatePolygon(cooking);
            document.getElementById("skill1").style.left = "110px";
            document.getElementById("skill5").style.left = "-45px";
            break;

        case "video games":
            ChangeSkillNames(videogame);
            AnimatePolygon(videogame);
            document.getElementById("skill1").style.left = "115px";
            document.getElementById("skill5").style.left = "-35px";
            break;

        case "pokémon trainer":
            ChangeSkillNames(pokemon);
            AnimatePolygon(pokemon);
            document.getElementById("skill1").style.left = "120px";
            document.getElementById("skill5").style.left = "-75px";
            break;
    }

    // Method to execute the polygons' animation
    function AnimatePolygon (abilityObject) {
        var myPolygon = d3.select(document.getElementById("skills-polygon"));

        myPolygon
          .transition()
          .duration(2500)
          .ease("elastic")
          .attr("points", abilityObject.skill1.coord + " " +
                          abilityObject.skill2.coord + " " +
                          abilityObject.skill3.coord + " " +
                          abilityObject.skill4.coord + " " +
                          abilityObject.skill5.coord + " " +
                          abilityObject.skill6.coord);
    }

    // Method to change skill names
    function ChangeSkillNames(abilityObject) {
        document.getElementById("skill1").innerHTML = abilityObject.skill1.name;
        document.getElementById("skill2").innerHTML = abilityObject.skill2.name;
        document.getElementById("skill3").innerHTML = abilityObject.skill3.name;
        document.getElementById("skill4").innerHTML = abilityObject.skill4.name;
        document.getElementById("skill5").innerHTML = abilityObject.skill5.name;
        document.getElementById("skill6").innerHTML = abilityObject.skill6.name;
    }
}