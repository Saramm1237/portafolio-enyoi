const projects = [
    {
        idProject: 1,
        imgProject: 'Resources/Images/Proyecto.jpeg',
        tittleProject: 'Automatización de procesos industriales',
        descriptionProject: 'Utiliza IA para optimizar los procesos de simulación en las áreas de ingenieríade productos industriales',
        linkProject: ''
    },
]

const references = [
    {
        name: 'David medina',
        ocupation: 'Senior software developer',
        phone: '3018800871',
        email: 'cdavidm@gmail.com'
    },
    {
        name: 'Emilcy Hernandez',
        ocupation: 'Coord. Ing. de sistemas UdeM',
        phone: '(604)5904500 Ext. 11321',
        email: 'ejhernandez@udemedellin.edu.co' 
    }
]

const experience = [
    {
        languageName: 'Python',
        percentProcess: 45,
        image: "python_logo.png"
    },
    {
        languageName: 'SQL',
        percentProcess: 50,
        imagen: "sql_logo.png"
    },
    {
        languageName: 'Javascript',
        percentProcess: 10,
        image: "javascript_logo.png"
    },
]

document.querySelectorAll('a[href^="#"]').forEach(ancho => {
    ancho.addEventListener('click', function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

loadSectionProjects()

function loadSectionProjects() {
    projects.forEach( project => createCardsProjects(project))
}

function createCardsProjects(project) {
    const cardProjet = document.createElement('div')
    cardProjet.classList.add('card-projects')

    const containerImg = document.createElement('div')
    containerImg.classList.add('container-img-card')

    const imgCard = document.createElement('img')
    imgCard.src = project.imgProject
    imgCard.alt = project.tittleProject

    const containerDescription = document('div')
    containerDescription.classList.add('container-description')

    const titleCard = document.createElement('h3')
    titleCard.textContent = project.tittleProject

    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = project.descriptionProject

    const goToProject = document.createElement('a')
    goToProject.href = project.linkProject

    goToProject.setAttribute('target', _blank)
    goToProject.textContent = 'Ir a proyecto'

    cardProjet.appendChild(containerImg)
    cardProjet.appendChild(containerDescription)

    containerImg.appendChild(imgCard)

    containerDescription.appendChild(titleCard)
    containerDescription.appendChild(descriptionCard)
    containerDescription.appendChild(goToProject)

    document.getElementById('section-projects').appendChild(cardProjet)
} 

loadSectionProjects()