//show menu
const navMenu= document.getElementById("nav-menu");
navToggle= document.getElementById("nav-toggle");
navClose= document.getElementById("nav-close");


// Menu show
//validate if constant exists

if(navToggle){
navToggle.addEventListener("click", () =>{
navMenu.classList.add("show-menu")
})
}

//Menu hidden
//validate if constant exists

if(navClose){
navClose.addEventListener("click", () =>{
navMenu.classList.remove("show-menu");
})
}

 //Remove Menu mobile

 const navLink = document.querySelectorAll(".nav__link")

 const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")
     //when we click on each nav__link , we remove the show-menu

     navMenu.classList.remove("show-menu")
 }
 navLink.forEach(n => n.addEventListener("click", linkAction))


//Add blur to header

const blurHeader= () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       :header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*--Email js--*/

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
      
    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_oieplow', 'template_2lri97i', '#contact-form', 'QGT8lbZZO0CVjgmJE')

    .then(() =>{
        //show sent message
        contactMessage.textContent = 'Message sent successfully 👍✅ '
         
        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()

    }, () =>{
        // show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })

}

contactForm.addEventListener('submit', sendEmail)

/*--Show scroll up--*/

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll','scrollUp')

/*====Scroll section Active link ====*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll','scrollActive')

/*----SCROLL REVEAL ANIMATION----*/

 const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true//
 })
 
 sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
 sr.reveal(`.home__image`, {origin: 'bottom'})
 sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
 sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
 sr.reveal(`.projects__card`, {interval: 100})