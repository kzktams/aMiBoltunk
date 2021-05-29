window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("gomb").addEventListener("click", szamol, false);
}

