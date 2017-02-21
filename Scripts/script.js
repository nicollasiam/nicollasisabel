$(function () {

    

    /***************************************/
    /********** ACTIVE PROCEDURE ***********/
    /* Sets the .active class to the *******/
    /* correct navbar item *****************/
    /***************************************/

    //$("#nav-list a").on("click", function () {
    //    $("#nav-list").find(".active").removeClass("active");
    //    $(this).parent().addClass("active");
    //});

    

    

    

    var executeTransitions = function () {

        $("#page-header")[0].style.top = 0

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

        switch (location.pathname.split("/")[location.pathname.split("/").length - 1]) {
            case "index.html":
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

                /**********************************************/
                /* Make a transition at starting **************/
                /* text and image** ***************************/
                /**********************************************/
                $(".left")[0].style.left = 0;
                $(".right")[0].style.right = 0;
                break;
                break;

            case "about.html":
                /************************************************/
                /********** MOVE IMAGE TO THE RIGHT  ************/
                /* Set the image left prop. to 0 ****************/
                /* moving it from left to right *****************/
                /************************************************/
                $(window).scroll(function () {
                    if (($(window).scrollTop() + $(window).outerHeight()) >= ($("#random-facts img").offset().top + ($("#random-facts img").height() / 3))) { // Check if 1/3 of the image is in the viewport
                        $("#random-facts img")[0].style.left = 0;
                    }
                });

                /********************************************/
                /********** REMOVE HIGHLIGHT  ***************/
                /* Remove the highlitghted css **************/
                /* from skill-div ***************************/
                /********************************************/
                $("body").on("drop", function () {
                    document.getElementsByClassName("skill-label")[0].style.boxShadow = "inset 0 0 0 0 rgba(0,0,0,0)";
                });

                /**********************************************/
                /* Make a transition at starting **************/
                /* text and image** ***************************/
                /**********************************************/
                $(".left")[0].style.left = 0;
                $(".right")[0].style.right = 0;
                break;

            case "projects.html":
                break;

            case "contact.html":
                break;
        }
    }();
});

/*******************************************/
/********** SWAP WORDS PROCEDURE ***********/
/* Chage icons shown, according to the *****/
/* word placed in div **********************/
/*******************************************/

function dragWord(dragEvent) {
    dragEvent.dataTransfer.setData("text", dragEvent.target.textContent);

    document.getElementsByClassName("skill-label")[0].style.boxShadow = "inset 0 0 10px 5px rgba(21,119,40,0.1)";
}

function dropWord(dropEvent) {
    var dropData = dropEvent.dataTransfer.getData("text");

    // Check if the word droped is allowed to be dropped
    if (dropData.trim().toLowerCase() == "front end developer" ||
        dropData.trim().toLowerCase() == "cooking" ||
        dropData.trim().toLowerCase() == "video games" ||
        dropData.trim().toLowerCase() == "pokemon trainer") {

        document.getElementsByClassName("skill-label")[0].textContent = dropData;
    }
    

    // Check which word is placed in '.skill-label' div
    switch (document.getElementsByClassName("skill-label")[0].textContent.trim().toLowerCase()) {
        case "front end developer":
            ChangeSkillNames(frontend);
            AnimatePolygon(frontend);
            document.getElementsByClassName("skill1")[0].style.left = "140px";
            document.getElementsByClassName("skill4")[0].style.left = "140px";
            document.getElementsByClassName("skill5")[0].style.left = "-85px";
            break;

        case "cooking":
            ChangeSkillNames(cooking);
            AnimatePolygon(cooking);
            document.getElementsByClassName("skill1")[0].style.left = "95px";
            document.getElementsByClassName("skill4")[0].style.left = "130px";
            document.getElementsByClassName("skill5")[0].style.left = "-65px";
            break;

        case "video games":
            ChangeSkillNames(videogame);
            AnimatePolygon(videogame);
            document.getElementsByClassName("skill1")[0].style.left = "95px";
            document.getElementsByClassName("skill4")[0].style.left = "130px";
            document.getElementsByClassName("skill5")[0].style.left = "-35px";
            document.getElementsByClassName("skill6")[0].style.left = "-75px";
            break;

        case "pokemon trainer":
            ChangeSkillNames(pokemon);
            AnimatePolygon(pokemon);
            document.getElementsByClassName("skill1")[0].style.left = "105px";
            document.getElementsByClassName("skill5")[0].style.left = "-95px";
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
        document.getElementsByClassName("skill1")[0].innerHTML = abilityObject.skill1.name;
        document.getElementsByClassName("skill2")[0].innerHTML = abilityObject.skill2.name;
        document.getElementsByClassName("skill3")[0].innerHTML = abilityObject.skill3.name;
        document.getElementsByClassName("skill4")[0].innerHTML = abilityObject.skill4.name;
        document.getElementsByClassName("skill5")[0].innerHTML = abilityObject.skill5.name;
        document.getElementsByClassName("skill6")[0].innerHTML = abilityObject.skill6.name;
    }
}