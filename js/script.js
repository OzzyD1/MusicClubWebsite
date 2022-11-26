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

    $("#darkModeButton").click(function(){
        $("body, h1, .ui.header").toggleClass("darkMode");
        $("h1").css("background-color", "transparent");
    });
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

let wemcjson = {
    "totalEmployees": 3,
    "totalStudents": 8,
    "openStudios": 3,
    "classes": [
        "Music",
        "Mixing",
        "Mastering"
    ],
    "employees": [
        {
            "name": "Alex",
            "role": "Music Producer",
            "joined": 2018,
            "students": 5
        },
        {
            "name": "Martha",
            "role": "Mixing Engineer",
            "joined": 2016,
            "students": 8
        },
        {
            "name": "Mark",
            "role": "Mastering Engineer",
            "joined": 2014,
            "students": 2
        }
    ],
    "members": [
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