let menuVisible = false;
// FUNCION QUE OCULTA O MUESTRA EL MENU 
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // oculto el menu una vez que selecciono una opcion 
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

// FUNCION QUE APLICA LAS ANIMACIONES DE LAS HABILIDADES
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("kotlin");
        habilidades[5].classList.add("csharp");
        habilidades[6].classList.add("php");
        habilidades[7].classList.add("mysql");
        habilidades[8].classList.add("unity");
        habilidades[9].classList.add("androidstudio");
        habilidades[10].classList.add("blender");
        habilidades[11].classList.add("ai");
        habilidades[12].classList.add("arduino");
        habilidades[13].classList.add("nodejs");
        habilidades[14].classList.add("photoshop");
        habilidades[15].classList.add("illustrator");
    } 
}

// DETECTO EL SCROLLING PARA APLICAR LA ANIMACION DE LA BARRA DE HABILIDADES
window.onscroll = function(){
    efectoHabilidades();
}

