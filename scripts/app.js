const projects = [
    {
        idProject: 1,
        imgProject: '/assets/images/1 (4).jpeg',
        titleproject: 'chat Bidirecional',
        descriptionProject: 'Este es un chat trabajado con una herramienta llamda socket io',
        linkProject: 'https://firstwebproject2024criztheria.netlify.app'
    },
    {
        idProject: 2,
        imgProject: '/assets/images/1 (1).jpeg',
        titleproject: 'chat Bidirecional',
        descriptionProject: 'Este es un chat trabajado con una herramienta llamda socket io',
        linkProject: 'https://firstwebproject2024criztheria.netlify.app'
    },
    {
        idProject: 3,
        imgProject: '/assets/images/1 (2).jpeg',
        titleproject: 'chat Bidirecional',
        descriptionProject: 'Este es un chat trabajado con una herramienta llamda socket io',
        linkProject: 'https://firstwebproject2024criztheria.netlify.app'
    },
    {
        idProject: 4 ,
        imgProject: '/assets/images/1 (3).jpeg',
        titleproject: 'chat Bidirecional',
        descriptionProject: 'Este es un chat trabajado con una herramienta llamda socket io',
        linkProject: 'https://firstwebproject2024criztheria.netlify.app'
    },
]

const references = [
    {
        nombre:"Juan perez",
        cargo:"CEO",
        telefono: "555-555-555",
        correo: "juan.ceoapple@gmail.com"
    },
    {
        nombre:"Maria Gonzalez ",
        cargo:"Sub director",
        telefono: "890-555-555",
        correo: "maria.subapple@gmail.com"
    },
    {
        nombre:"Andrez lonbana",
        cargo:"data analist",
        telefono: "766-999-555",
        correo: "andres.lonb@gmail.com"
    },
    {
        nombre:"Carlos hernandez",
        cargo:"UI X designer",
        telefono: "123-455-588",
        correo: "carlos.hernandez@gmail.com"
    },
    
]

const experience = [
    {
        nombreLenguaje: "Java",
        progresoPorcentaje: 75,
        imagen: "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png"
    },
    {
        nombreLenguaje: "React",
        progresoPorcentaje: 80,
        imagen: "https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png"
    },
    {
        nombreLenguaje: "Nodejs",
        progresoPorcentaje: 90,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bSt16XVIR9526s9Rs6OUTds5FV8oZ_vX1w&s"
    },
    {
        nombreLenguaje: "Angular",
        progresoPorcentaje: 40,
        imagen: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/angular-512.png"
    }

]

// document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
//     anchor.addEventListener('click', function (event){
//         event.preventDefault();

//         const target = document.querySelector(this.getAtribute('href'));

//         if(target) {
//             window.scrollTo({
//                 top: target.offsetTop,
//                 behavior:'smooth' // Animacion de Desplazamiento suave
//             });
//         }
//     });
// });


function loadSectionProjects() {
    projects.forEach(project => createCardsProjects(project))
}

function createCardsProjects(proyectos){
    const cardProject = document.createElement('div')
    cardproject.classList.add('card.projects')

    const containerImg = document.createElement('div')
    containerImg.classList.add('container-img-card')

    const imgCard = document.createElement('img')
    imgCard.src = project.imgproject
    imgCard.alt = project.titleproject

    const containerDescription = document.createElement('div')
    containerDescription.classList.add('container-description-card')

    const tittlecard =document.createElement('h3')
    tittlecard.textcontent= project.titleproject

    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = project.descriptionProject

    const goToProject = document.createElement('a')
    goToProject.href = project.linkProject

    goToProject. setAttribute('target','_blank')
    goToProject.textContent = 'Ir a Proyecto'

    cardProject.appendChild(containerImg)
    cardProject.appendChild(containerDescription)

    containerImg.appendChild(imgCard)
    containerDescription.appendChild(tittlecard)
    containerDescription.appendChild(descriptionCard)
    containerDescription.appendChild(goToProject)

    document.querySelector('.container-cards').appendChild(cardProject)
}