const Nosotros = document.querySelector("#Nosotros")
const Nosotros2 = document.querySelector("#Nosotros2")

const Mision = document.querySelector("#Mision")
const Mision2 = document.querySelector("#Mision2")

Nosotros.addEventListener("click", (p)=>{
    p.preventDefault();

    const sectionN = document.querySelector(".Nosotros");
    sectionN.scrollIntoView({behavior: "smooth"});
  
})

Nosotros2.addEventListener("click", (p)=>{
    p.preventDefault();

    const sectionN = document.querySelector(".Nosotros2");
    sectionN.scrollIntoView({behavior: "smooth"});
  
})

Mision.addEventListener("click", (p)=>{
    p.preventDefault();

    const sectionN = document.querySelector(".Mision");
    sectionN.scrollIntoView({behavior: "smooth"});
  
})

Mision2.addEventListener("click", (p)=>{
    p.preventDefault();

    const sectionN = document.querySelector(".Mision2");
    sectionN.scrollIntoView({behavior: "smooth"});
  
})