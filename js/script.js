let context = {
    "totalEmployees": 3,
    "totalStudents": 8,
    "openStudios": 3,
    "classes": [
        "Music",
        "Mixing",
        "Mastering"
    ],
    "employee": [
        {
            "name": "Alex",
            "role": "Music Producer",
            "joined": 2018,
            "students": 5,
            "description": "Alex has been producing music since he was a teenager, now he has multuple albums streaming on Spotify.",
            "image": "images/alex.jpg"
        },
        {
            "name": "Martha",
            "role": "Mixing Engineer",
            "joined": 2016,
            "students": 8,
            "description": "Martha was born in Canada. She has been obsessed with her fathers records since she was a toddler. Now she is a professional Mixing Engineer with many albums under her belt.",
            "image": "images/sigmund1.jpg"
        },
        {
            "name": "Mark",
            "role": "Mastering Engineer",
            "joined": 2014,
            "students": 2,
            "description": "Mark has been mastering music for many years now and his name is on many records.",
            "image": "images/mark.jpg"
        }
    ],
    "member": [
        {
            "name": "John",
            "class": "Mixing", 
            "joined": 2020,
        },
        {
            "name": "Mary",
            "class": "Mastering",
            "joined": 2019,
        },
        {
            "name": "Jessie",
            "class": "Music",
            "joined": 2022,
        },
        {
            "name": "Jamie",
            "class": "Music",
            "joined": 2019,
        },
        {
            "name": "Aaron",
            "class": "Mastering",
            "joined": 2019,
        },
        {
            "name": "Shane",
            "class": "Mastering",
            "joined": 2018,
        },
        {
            "name": "Kevin",
            "class": "Mastering",
            "joined": 2021,
        },
        {
            "name": "Cezar",
            "class": "Music",
            "joined": 2018,
        },
    ]
}

$(document).ready(function() {
    $(".ui.toggle.button").click(function() {
        $(".mobile.only.grid .ui.vertical.menu").toggle(100);
    });

    $(".ui.dropdown").dropdown();

    $(".slide").slick({
        autoplay: true,
        dots: true,
        speed: 500
        });

    
    // Dark Mode
    $("#darkModeButton").click(function(){
        $("body, h1, .ui.header").toggleClass("darkMode");
        $("h1").css("background-color", "transparent");
        $(".ui.message, .ui.huge.button, .slick-dots, .active.item, .ui.inverted.segment").toggleClass("darkModeColour");
    });

    let template = Handlebars.compile($("#handlebars-demo").html())
    let output = template(context);
    $("#cards").append(output);
});

// Show/Hide Element
let showHide = () => {

    let showHideDiv = document.getElementById("showHide");

    if (showHideDiv.style.display === "block"){

        showHideDiv.style.display = "none";

    } else {

        showHideDiv.style.display = "block"
    }
};

let btn1 = document.getElementById("button1");
btn1.addEventListener("click", showHide);