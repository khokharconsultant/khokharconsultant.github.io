// =========================
// English / Spanish Language Switch
// =========================

const englishBtn = document.getElementById("englishBtn");
const spanishBtn = document.getElementById("spanishBtn");


// =========================
// FAQ Language
// =========================

function setFAQLanguage(language) {

    const faqTitle = document.getElementById("faqTitle");
    const faqItems = document.querySelectorAll(".faq-item");

    if (!faqTitle || faqItems.length === 0) {
        return;
    }

    const englishFAQ = [
        {
            question: "Do you provide Visa & Immigration consultancy?",
            answer: "Yes, we provide professional guidance for visa and immigration procedures in Spain."
        },
        {
            question: "Do you help with Spanish Nationality applications?",
            answer: "Yes, we assist clients with nationality documentation and application procedures."
        },
        {
            question: "Can you help with Business Registration in Spain?",
            answer: "Yes, we provide consultancy and administrative assistance related to business registration in Spain."
        },
        {
            question: "Do you provide Tax & Accounting services?",
            answer: "Yes, we provide accounting, tax and administrative consultancy services for individuals and businesses."
        },
        {
            question: "Do you assist with Pareja de Hecho?",
            answer: "Yes, we provide guidance regarding the documentation and administrative process."
        },
        {
            question: "How can I book a consultation?",
            answer: "You can contact Khokhar Consultant directly through WhatsApp using the consultation button on our website."
        }
    ];

    const spanishFAQ = [
        {
            question: "¿Ofrecen asesoría de Visados e Inmigración?",
            answer: "Sí, ofrecemos asesoramiento profesional sobre procedimientos de visado e inmigración en España."
        },
        {
            question: "¿Ayudan con solicitudes de Nacionalidad Española?",
            answer: "Sí, ayudamos a nuestros clientes con la documentación y los procedimientos para solicitar la nacionalidad española."
        },
        {
            question: "¿Ayudan con la Creación de Empresas en España?",
            answer: "Sí, ofrecemos asesoramiento y asistencia administrativa para la creación y registro de empresas en España."
        },
        {
            question: "¿Ofrecen servicios de Impuestos y Contabilidad?",
            answer: "Sí, ofrecemos servicios de asesoramiento en contabilidad, impuestos y gestión administrativa para particulares y empresas."
        },
        {
            question: "¿Ayudan con Pareja de Hecho?",
            answer: "Sí, ofrecemos orientación sobre la documentación y el procedimiento administrativo de Pareja de Hecho."
        },
        {
            question: "¿Cómo puedo reservar una consulta?",
            answer: "Puede contactar directamente con Khokhar Consultant a través de WhatsApp utilizando el botón de consulta de nuestra página web."
        }
    ];

    const faqData = language === "es" ? spanishFAQ : englishFAQ;

    faqTitle.innerText =
        language === "es"
        ? "Preguntas Frecuentes"
        : "Frequently Asked Questions";

    faqItems.forEach(function(item, index) {

        const questionButton = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer p");

        if (questionButton && answer && faqData[index]) {

            questionButton.innerHTML =
                faqData[index].question + '<span>+</span>';

            answer.innerText =
                faqData[index].answer;
        }

    });
}


// =========================
// English Button
// =========================

if (englishBtn) {

    englishBtn.addEventListener("click", function () {

        // Hero
        document.getElementById("heroTitle").innerHTML =
            "Professional Immigration & Business Consultancy in Spain";

        document.getElementById("heroText").innerHTML =
            "Visa, Immigration, Nationality, Business Registration, Tax, Accounting, Notary, Translation, Social Security & Legal Consultancy.";


        // About
        document.getElementById("aboutTitle").innerHTML =
            "About Khokhar Consultant";

        document.getElementById("aboutText").innerHTML =
            "Khokhar Consultant provides professional consultancy services for individuals and businesses across Spain. We help clients with immigration, visas, nationality, accounting, tax, business registration and legal documentation.";


        // Services
        document.getElementById("servicesTitle").innerHTML =
            "Our Services";

        document.getElementById("service1").innerHTML =
            "Visa & Immigration";

        document.getElementById("service2").innerHTML =
            "Student Visa";

        document.getElementById("service3").innerHTML =
            "Nationality";

        document.getElementById("service4").innerHTML =
            "Arraigo & Renewal";

        document.getElementById("service5").innerHTML =
            "Business Registration";

        document.getElementById("service6").innerHTML =
            "Accounting Services";

        document.getElementById("service7").innerHTML =
            "Tax & Hacienda";

        document.getElementById("service8").innerHTML =
            "Social Security";

        document.getElementById("service9").innerHTML =
            "Notary Services";

        document.getElementById("service10").innerHTML =
            "Official Translation";

        document.getElementById("service11").innerHTML =
            "Pareja de Hecho";

        document.getElementById("service12").innerHTML =
            "Family Benefits";

        document.getElementById("service13").innerHTML =
            "Property Buying & Selling";

        document.getElementById("service14").innerHTML =
            "Mortgage Assistance";

        document.getElementById("service15").innerHTML =
            "Debt Cancellation";

        document.getElementById("service16").innerHTML =
            "Legal Consultancy";

        document.getElementById("service17").innerHTML =
            "VTC Electric License";


        // Why Choose
        document.getElementById("whyTitle").innerHTML =
            "Why Choose Khokhar Consultant?";

        document.getElementById("why1Title").innerHTML =
            "Experienced Consultants";

        document.getElementById("why1Text").innerHTML =
            "Professional guidance for immigration, visas, accounting and business services.";

        document.getElementById("why2Title").innerHTML =
            "Fast & Reliable Service";

        document.getElementById("why2Text").innerHTML =
            "Quick processing with transparent communication throughout your case.";

        document.getElementById("why3Title").innerHTML =
            "Trusted Support";

        document.getElementById("why3Text").innerHTML =
            "Committed to providing honest, reliable and client-focused consultancy across Spain.";


        // Contact
        document.getElementById("contactTitle").innerHTML =
            "Contact Us";

        document.getElementById("phoneLabel").innerHTML =
            "Phone:";

        document.getElementById("emailLabel").innerHTML =
            "Email:";

        document.getElementById("addressLabel").innerHTML =
            "Address:";

        document.getElementById("metroLabel").innerHTML =
            "Metro:";

        document.getElementById("whatsappText").innerHTML =
            "Contact us on WhatsApp";

        document.getElementById("nameInput").placeholder =
            "Your Name";

        document.getElementById("emailInput").placeholder =
            "Your Email";

        document.getElementById("messageInput").placeholder =
            "Write your message";

        document.getElementById("sendButton").innerHTML =
            "Send Message";


        // Footer
        document.getElementById("footerTitle").innerHTML =
            "Khokhar Consultant";

        document.getElementById("footerText").innerHTML =
            "Professional Immigration & Business Consultancy in Barcelona, Spain";

        document.getElementById("footerServices").innerHTML =
            "Visa • Immigration • Nationality • Business Registration • Tax • Accounting • Legal Consultancy";

        document.getElementById("footerLocation").innerHTML =
            "Barcelona, Spain";

        document.getElementById("footerCopyright").innerHTML =
            "©️ 2026 Khokhar Consultant. All Rights Reserved.";


        // FAQ
        setFAQLanguage("en");

    });

}


// =========================
// Spanish Button
// =========================

if (spanishBtn) {

    spanishBtn.addEventListener("click", function () {

        // Hero
        document.getElementById("heroTitle").innerHTML =
            "Consultoría Profesional de Inmigración y Negocios en España";

        document.getElementById("heroText").innerHTML =
            "Visados, Inmigración, Nacionalidad, Creación de Empresas, Impuestos, Contabilidad, Notaría, Traducciones, Seguridad Social y Asesoría Jurídica.";


        // About
        document.getElementById("aboutTitle").innerHTML =
            "Sobre Khokhar Consultant";

        document.getElementById("aboutText").innerHTML =
            "Khokhar Consultant ofrece servicios profesionales de consultoría para personas y empresas en toda España. Ayudamos con inmigración, visados, nacionalidad, impuestos, contabilidad, creación de empresas y documentación legal.";


        // Services
        document.getElementById("servicesTitle").innerHTML =
            "Nuestros Servicios";

        document.getElementById("service1").innerHTML =
            "Visados e Inmigración";

        document.getElementById("service2").innerHTML =
            "Visado de Estudiante";

        document.getElementById("service3").innerHTML =
            "Nacionalidad";

        document.getElementById("service4").innerHTML =
            "Arraigo y Renovación";

        document.getElementById("service5").innerHTML =
            "Creación de Empresas";

        document.getElementById("service6").innerHTML =
            "Servicios de Contabilidad";

        document.getElementById("service7").innerHTML =
            "Impuestos y Hacienda";

        document.getElementById("service8").innerHTML =
            "Seguridad Social";

        document.getElementById("service9").innerHTML =
            "Servicios Notariales";

        document.getElementById("service10").innerHTML =
            "Traducción Oficial";

        document.getElementById("service11").innerHTML =
            "Pareja de Hecho";

        document.getElementById("service12").innerHTML =
            "Prestaciones Familiares";

        document.getElementById("service13").innerHTML =
            "Compra y Venta de Propiedades";

        document.getElementById("service14").innerHTML =
            "Asistencia Hipotecaria";

        document.getElementById("service15").innerHTML =
            "Cancelación de Deudas";

        document.getElementById("service16").innerHTML =
            "Asesoría Jurídica";

        document.getElementById("service17").innerHTML =
            "Licencia VTC Eléctrica";


        // Why Choose
        document.getElementById("whyTitle").innerHTML =
            "¿Por qué elegir Khokhar Consultant?";

        document.getElementById("why1Title").innerHTML =
            "Consultores con Experiencia";

        document.getElementById("why1Text").innerHTML =
            "Asesoramiento profesional en inmigración, visados, contabilidad y servicios empresariales.";

        document.getElementById("why2Title").innerHTML =
            "Servicio Rápido y Fiable";

        document.getElementById("why2Text").innerHTML =
            "Gestión rápida y comunicación transparente durante todo el proceso.";

        document.getElementById("why3Title").innerHTML =
            "Asistencia de Confianza";

        document.getElementById("why3Text").innerHTML =
            "Comprometidos a ofrecer una asesoría honesta, fiable y centrada en las necesidades del cliente en toda España.";


        // Contact
        document.getElementById("contactTitle").innerHTML =
            "Contacte con Nosotros";

        document.getElementById("phoneLabel").innerHTML =
            "Teléfono:";

        document.getElementById("emailLabel").innerHTML =
            "Correo electrónico:";

        document.getElementById("addressLabel").innerHTML =
            "Dirección:";

        document.getElementById("metroLabel").innerHTML =
            "Metro:";

        document.getElementById("whatsappText").innerHTML =
            "Contactar por WhatsApp";

        document.getElementById("nameInput").placeholder =
            "Su nombre";

        document.getElementById("emailInput").placeholder =
            "Su correo electrónico";

        document.getElementById("messageInput").placeholder =
            "Escriba su mensaje";

        document.getElementById("sendButton").innerHTML =
            "Enviar mensaje";


        // Footer
        document.getElementById("footerTitle").innerHTML =
            "Khokhar Consultant";

        document.getElementById("footerText").innerHTML =
            "Consultoría Profesional de Inmigración y Negocios en Barcelona, España";

        document.getElementById("footerServices").innerHTML =
            "Visados • Inmigración • Nacionalidad • Creación de Empresas • Impuestos • Contabilidad • Asesoría Jurídica";

        document.getElementById("footerLocation").innerHTML =
            "Barcelona, España";

        document.getElementById("footerCopyright").innerHTML =
            "©️ 2026 Khokhar Consultant. Todos los derechos reservados.";


        // FAQ
        setFAQLanguage("es");

    });

}


// =========================
// Contact Form
// =========================

const form = document.querySelector("form");

if (form) {

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

}


// =========================
// Mobile Menu
// =========================

const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", function () {

        menu.classList.toggle("active");

    });

    document.querySelectorAll(".menu a").forEach(function(link) {

        link.addEventListener("click", function() {

            menu.classList.remove("active");

        });

    });

}


// =========================
// FAQ Accordion
// =========================

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const faqItem =
            question.parentElement;

        faqItem.classList.toggle("active");

    });

});
