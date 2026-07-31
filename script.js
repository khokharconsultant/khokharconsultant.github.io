// English / Spanish Language Switch

const englishBtn = document.getElementById("englishBtn");
const spanishBtn = document.getElementById("spanishBtn");

englishBtn.addEventListener("click", function () {

document.getElementById("heroTitle").innerHTML =
"Professional Immigration & Business Consultancy in Spain";

document.getElementById("heroText").innerHTML =
"Visa, Immigration, Nationality, Business Registration, Tax, Accounting, Notary, Translation, Social Security & Legal Consultancy.";

document.getElementById("aboutTitle").innerHTML =
"About Khokhar Consultant";

document.getElementById("aboutText").innerHTML =
"Khokhar Consultant provides professional consultancy services for individuals and businesses across Spain. We help clients with immigration, visas, nationality, accounting, tax, business registration and legal documentation.";

document.getElementById("servicesTitle").innerHTML =
"Our Services";

});

spanishBtn.addEventListener("click", function () {

document.getElementById("heroTitle").innerHTML =
"Consultoría Profesional de Inmigración y Negocios en España";

document.getElementById("heroText").innerHTML =
"Visados, Inmigración, Nacionalidad, Creación de Empresas, Impuestos, Contabilidad, Notaría, Traducciones, Seguridad Social y Asesoría Jurídica.";

document.getElementById("aboutTitle").innerHTML =
"Sobre Khokhar Consultant";

document.getElementById("aboutText").innerHTML =
"Khokhar Consultant ofrece servicios profesionales de consultoría para personas y empresas en toda España. Ayudamos con inmigración, visados, nacionalidad, impuestos, contabilidad, creación de empresas y documentación legal.";

document.getElementById("servicesTitle").innerHTML =
"Nuestros Servicios";

});

// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        alert("Your message has been sent successfully.");
        form.reset();
    } else {
        alert("Something went wrong. Please try again.");
    }

});
// =========================
// Mobile Menu
// =========================

const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    document.querySelectorAll(".menu a").forEach(function(link){
        link.addEventListener("click", function(){
            menu.classList.remove("active");
        });
    });
