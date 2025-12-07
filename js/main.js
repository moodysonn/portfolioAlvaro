document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll('a[href^="#"]').forEach(elm=>{
        
        elm.addEventListener("click", function(e){
            
            e.preventDefault();
            
            let targetId=this.getAttribute("href");
            
            if(targetId=="#"){
                return;
            }
            
            let targetElement=document.querySelector(targetId);
            
            if(targetElement){
                
                window.scrollTo({
                    top: targetElement.offsetTop-80,
                    behavior: "smooth"
                });
                
                navLinks.classList.remove("active");
                document.body.style.overflow="auto";
            }
        });
    });

    let hamburger=document.querySelector(".hamburger");
    let navLinks=document.querySelector(".nav-links");
    let navLinksItems=document.querySelectorAll(".nav-links li a");

    hamburger.addEventListener("click", function(){
        navLinks.classList.toggle("active");
        document.body.style.overflow=navLinks.classList.contains("active")?"hidden":"auto";
        
        this.classList.toggle("active");
    });

    navLinksItems.forEach(e=>{
        e.addEventListener("click", function(){
            
            if(window.innerWidth<=768){
                navLinks.classList.remove("active");
                document.body.style.overflow="auto";
                hamburger.classList.remove("active");
            }
        });
    });

    window.addEventListener("scroll", function(){
        let navbar=document.querySelector(".navbar");
        
        if(window.scrollY>50){
            navbar.style.background="rgba(255, 255, 255, 0.98)";
            navbar.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)";
        } 
        else{
            navbar.style.background="var(--white)";
            navbar.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)";
        }
    });

    let animateOnScroll=function(){
        let elements=document.querySelectorAll(".project-card, .tech-item, .form-group");
        
        elements.forEach(e=>{
            
            let elementPosition=e.getBoundingClientRect().top;
            let screenPosition=window.innerHeight/1.3;
            
            if(elementPosition<screenPosition){
                e.style.opacity="1";
                e.style.transform="translateY(0)";
            }
        });
    };

    let animateElements=document.querySelectorAll('.project-card, .tech-item, .form-group');
    animateElements.forEach(e=>{
        e.style.opacity="0";
        e.style.transform="translateY(20px)";
        e.style.transition="opacity 0.5s ease, transform 0.5s ease";
    });

    window.addEventListener("load", animateOnScroll);
    window.addEventListener("scroll", animateOnScroll);

    let contactForm=document.querySelector(".contact-form");
    
    if(contactForm){
        contactForm.addEventListener("submit", function(e){
            e.preventDefault();
            alert("¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.");
            this.reset();
        });
    }

});