document.addEventListener("DOMContentLoaded", function(){

    const enlacesSeccion=document.querySelectorAll('a[href^="#"]');
    
    enlacesSeccion.forEach(enlaceNavegacion=>{
        
        enlaceNavegacion.addEventListener("click", function(eventoClick){
            
            eventoClick.preventDefault();
            
            const idObjetivo=this.getAttribute("href");
            
            if(idObjetivo==="#"){
                return;
            }
            
            const elementoObjetivo=document.querySelector(idObjetivo);
            
            if(elementoObjetivo){
                
                window.scrollTo({
                    top: elementoObjetivo.offsetTop-80,
                    behavior: "smooth"
                });
                
                listaEnlacesNavegacion.classList.remove("active");
                document.body.style.overflow="auto";
            }
        });
    });

    const botonMenuHamburguesa=document.querySelector(".menuHamburguesa");
    const listaEnlacesNavegacion=document.querySelector(".listaNavegacion");
    const enlacesMenuNavegacion=document.querySelectorAll(".listaNavegacion li a");

    botonMenuHamburguesa.addEventListener("click", function(){
        listaEnlacesNavegacion.classList.toggle("active");
        document.body.style.overflow=listaEnlacesNavegacion.classList.contains("active")?"hidden":"auto";
        
        this.classList.toggle("active");
    });

    enlacesMenuNavegacion.forEach(enlaceMenu=>{
        
        enlaceMenu.addEventListener("click", function(){
            
            if(window.innerWidth<=768){
                listaEnlacesNavegacion.classList.remove("active");
                document.body.style.overflow = "auto";
                botonMenuHamburguesa.classList.remove("active");
            }
        });
    });

    window.addEventListener("scroll", function(){
        
        const barraNavegacionFija=document.querySelector(".barraNavegacion");
        
        if(window.scrollY>50){
            barraNavegacionFija.style.background="rgba(255, 255, 255, 0.98)";
            barraNavegacionFija.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)";
        } 
        else{
            barraNavegacionFija.style.background="var(--white)";
            barraNavegacionFija.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)";
        }
    });

    const aplicarAnimacionScroll=function(){
        
        const elementosAnimables=document.querySelectorAll(".tarjetaProyecto, .tarjetaTecnologia, .grupoFormulario");
        
        elementosAnimables.forEach(elementoAnimable=>{
            const posicionElementoPantalla=elementoAnimable.getBoundingClientRect().top;
            const umbralPantalla=window.innerHeight/1.3;
            
            if(posicionElementoPantalla<umbralPantalla){
                elementoAnimable.style.opacity="1";
                elementoAnimable.style.transform="translateY(0)";
            }
        });
    };

    const elementosAnimacionInicial=document.querySelectorAll(".tarjetaProyecto, .tarjetaTecnologia, .grupoFormulario");
    
    elementosAnimacionInicial.forEach(elemento=>{
        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(20px)";
        elemento.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    window.addEventListener("load", aplicarAnimacionScroll);
    window.addEventListener("scroll", aplicarAnimacionScroll);

    const formularioContactoPrincipal=document.querySelector(".formularioContacto");
    
    if(formularioContactoPrincipal){ 
        formularioContactoPrincipal.addEventListener("submit", function(eventoSubmit){
            eventoSubmit.preventDefault();
            alert("¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.");
            this.reset();
        });
    }

});
