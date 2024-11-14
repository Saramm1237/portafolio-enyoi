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

const projectsContainer = document.querySelector("#section-projects");

const projects = [
    {
        idProject: 1,
        imgProject: 'Resources/Images/Proyecto.jpeg',
        tittleProject: 'Automatización de procesos industriales',
        descriptionProject: 'Utiliza IA para optimizar los procesos de simulación en las áreas de ingeniería de productos industriales',
        linkProject: 'https://www.make.com/en'
    },
    {
        idProject: 2,
        imgProject: 'Resources/Images/recordatorios.jpg',
        tittleProject: 'App de Recordatorios Personalizados',
        descriptionProject: 'Notificaciones diarias con mensajes y tareas configurables.',
        linkProject: 'https://www.notion.com/'
    },
    {
        idProject: 3,
        imgProject: 'Resources/Images/trivia.jpg',
        tittleProject: 'Juego de Trivia',
        descriptionProject: 'Juego de preguntas con múltiples categorías y niveles de dificultad.',
        linkProject: 'https://preguntados.com/'
    },
    {
        idProject: 4,
        imgProject: 'Resources/Images/gastos.png',
        tittleProject: 'Control de Gastos',
        descriptionProject: 'Aplicación para registrar y visualizar gastos diarios en gráficos simples.',
        linkProject: 'https://www.fintonic.com/es-ES/inicio/'
    }
];

function renderProjects() {
    const container = document.createElement('div');
    container.classList.add('containerd-cards');
    
    projects.forEach(project => {
        // Crear la estructura de la tarjeta
        const card = document.createElement('div');
        card.classList.add('card-projects');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('container-img-card');

        const img = document.createElement('img');
        img.src = project.imgProject;
        img.alt = project.tittleProject;

        imgContainer.appendChild(img);

        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('container-description');

        const title = document.createElement('h3');
        title.textContent = project.tittleProject;

        const description = document.createElement('p');
        description.textContent = project.descriptionProject;

        const link = document.createElement('a');
        link.href = project.linkProject || '#';
        link.textContent = 'Ir a proyecto';

        descriptionContainer.appendChild(title);
        descriptionContainer.appendChild(description);
        descriptionContainer.appendChild(link);

        card.appendChild(imgContainer);
        card.appendChild(descriptionContainer);
        container.appendChild(card);
    });

    projectsContainer.appendChild(container);
}

renderProjects();

const referencesContainer = document.querySelector("#section-references");

const references = [
    {
        name: 'David medina',
        ocupation: 'Senior software developer',
        phone: '3018800871',
        email: 'cdavidm@gmail.com'
    },
    {
        name: 'Emilcy Hernandez',
        ocupation: 'Coord. Ing. Sistemas',
        phone: '(604)5904500',
        email: 'ejhernandez@gmail.com' 
    }
]


function renderReferences() {
    const container = document.createElement('div');
    container.classList.add('card-references');

    references.forEach(reference => {
        const card = document.createElement('div');
        card.classList.add('card-reference');

        const name = document.createElement('p');
        name.innerHTML = `Nombre: <span>${reference.name}</span>`;

        const ocupation = document.createElement('p');
        ocupation.innerHTML = `Cargo: <span>${reference.ocupation}</span>`;

        const phone = document.createElement('p');
        phone.innerHTML = `Teléfono: <span>${reference.phone}</span>`;

        const email = document.createElement('p');
        email.innerHTML = `Correo: <span>${reference.email}</span>`;

        card.appendChild(name);
        card.appendChild(ocupation);
        card.appendChild(phone);
        card.appendChild(email);

        container.appendChild(card);
    });

    referencesContainer.appendChild(container);
}

renderReferences();

const experienceContainer = document.querySelector("#section-experiences");

const experience = [
    {
        languageName: 'Python',
        percentProcess: 45,
        image: "Resources/Images/python_logo.png"
    },
    {
        languageName: 'SQL',
        percentProcess: 50,
        image: "Resources/Images/sql_logo.png"
    },
    {
        languageName: 'Javascript',
        percentProcess: 10,
        image: "Resources/Images/javascript_logo.png"
    },
    {
        languageName: 'HTML',
        percentProcess: 40,
        image: "Resources/Images/html.jpg"
    },
    {
        languageName: 'CSS',
        percentProcess: 40,
        image: "Resources/Images/css.png"
    }
];

function renderExperience() {
    const container = document.createElement('div');
    container.classList.add('container-experience');

    experience.forEach(skill => {
        const card = document.createElement('div');
        card.classList.add('card-experience');

        const img = document.createElement('img');
        img.src = skill.image;
        img.alt = skill.languageName;

        const progress = document.createElement('progress');
        progress.classList.add('progress-bar');
        progress.value = skill.percentProcess;
        progress.max = 100;

        const label = document.createElement('p');
        label.textContent = `${skill.languageName}: ${skill.percentProcess}%`;

        card.appendChild(img);
        card.appendChild(progress);
        card.appendChild(label);

        container.appendChild(card);
    });

    experienceContainer.appendChild(container);
}

renderExperience();

