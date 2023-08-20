const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.link');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  nav.classList.toggle('show-links');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    nav.classList.remove('show-links');
  });
});

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const span = document.querySelector('.span-btn');
function checkMail(mail) {
  if (mail.match(/^([a-z0-9.-]+)+@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/)) {
    return true;
  }
  return false;
}

// popup section

const portfolioData = [
  {
    title: 'Smart Saver',
    workDetails: ['Front-end', 'Back-end Dev', '2023'],
    image2: './Images/Buget app.jpg',
    description:
      'SmartSaver is a web-based budgeting application built using Ruby on Rails and PostgreSQL. With SmartSaver, users can effortlessly track their income and expenses, gaining full control over their finances. 💰💼',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    details2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    workTools: ['Ruby on rails', 'css', 'github', 'Render', 'Bootstrap'],
    liveIcon: './Images/live.svg',
    liveLink: 'https://smart-saver-8jc8.onrender.com/',

    sourceLink: 'https://github.com/monicah79/Smart-saver.git',
    sourceIcon: './Images/source.svg',
  },

  {
    title: 'Laptop Ecommerce',
    workDetails: ['Front-end', 'Back-end Dev', '2023'],
    image2: './images/port03.png',
    description:
      'Laptop E-commerce is a project built with Rails API to connect to the frontend react and redux. it is an application that allows only admins to add and delete laptops. And allows users to read and reserve the laptops of their choice.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['Ruby on Rails', 'React', 'Redux', 'APIs'],
    liveIcon: './Images/live.svg',
    liveLink: 'https://laptop-ecommerce.onrender.com/',

    sourceLink: 'https://github.com/monicah79/Final-capstone-backend.git',
    sourceIcon: './Images/source.svg',
  },

  {
    title: 'Metrics-webapp',
    workDetails: ['Front-end', '2023'],
    image2: './images/Capture.PNG',
    description:
      'It is about building a mobile web application to check a list of metrics (numeric values) that you will create making use of React and Redux.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['html', 'css', 'javaScript', 'github', 'API', 'Bootstrap'],
    liveIcon: './Images/live.svg',
    liveLink: 'https://metric-web-application.netlify.app/',

    sourceLink: 'https://github.com/monicah79/Metrics-webapp.git',
    sourceIcon: './Images/source.svg',
  },

  {
    title: 'MovieMax',
    workDetails: ['Front-end', '2023'],
    image2: './images/Capture-1.PNG',
    description:
      'In this task, you will be working with the real live data from the SpaceX API. I built a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['API', 'jest', 'javaScript', 'html', 'css', 'gitflow'],
    liveIcon: './Images/live.svg',
    liveLink: 'https://monicah-space-hub-project.netlify.app/',

    sourceLink: 'https://github.com/monicah79/space-hub.git',
    sourceIcon: './Images/source.svg',
  },
];

// ------------------------- Projects section --------------------//

const project = document.querySelector('.grid-container');
project.innerHTML = `<div class="card">
              <div class="row">
                <div class="work-1">
              
                   <a href="#"
                  ><img src="${portfolioData[0].image2}" class="desktop-only" alt="portfolio-1"
                /></a>
                
                </div>

                <div class="col-2">
                <a href="#"><h2>${portfolioData[0].title}</h2></a>
                <div class="work-details flex2">
                  <a href="#"><h3>${portfolioData[0].workDetails[0]}</h3></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[1]}</h4></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[2]}</h4></a>
                </div>
                <p>
                  ${portfolioData[0].description}
                </p>
                <ul>
                  <li class="work-tools">
                    <button type="button" class="tools">${portfolioData[0].workTools[0]}</button>
                    <button type="button" class="tools">${portfolioData[0].workTools[1]}</button>
                    <button type="button" class="tools">${portfolioData[0].workTools[2]}</button>
                  </li>
                </ul>
                <div class="sub-btn-cnt">
                  <button type="button" class="sub-btn">
                  <a href="${portfolioData[0].liveLink}" target="_blank"><img src="${portfolioData[0].liveIcon}" class="desktop-only" alt="portfolio-1"
                  /></a>See Live
                  </button>

                  <button type="button" class="sub-btn">
                  <a href="${portfolioData[0].sourceLink}" target="_blank"><img src="${portfolioData[0].sourceIcon}" class="desktop-only" alt="portfolio-1"
                  /></a>See Source
                  </button>
                </div>
              </div>
              </div>
            </div>

            <!-- portfolio - 3 -->
            <div class="card">
              <div class="row">
                

                <div class="col-2" >
                <a href="#"><h2>${portfolioData[2].title}</h2></a>
                <div class="work-details flex2">
                  <a href="#"><h3>${portfolioData[2].workDetails[0]}</h3></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[2].workDetails[1]}</h4></a>
                  
                </div>
                <p>
                  ${portfolioData[2].description}
                </p>
                <ul>
                  <li class="work-tools">
                    <button type="button" class="tools">${portfolioData[0].workTools[0]}</button>
                    <button type="button" class="tools">${portfolioData[0].workTools[1]}</button>
                  </li>
                </ul>
                <div class="sub-btn-cnt">
                  <button type="button" class="sub-btn">
                  <a href="${portfolioData[0].liveLink}" target="_blank"><img src="${portfolioData[0].liveIcon}" class="desktop-only" alt="portfolio-1"
                  /></a>See Live
                  </button>

                  <button type="button" class="sub-btn">
                  <a href="${portfolioData[0].sourceLink}" target="_blank"><img src="${portfolioData[0].sourceIcon}" class="desktop-only" alt="portfolio-1"
                  /></a>See Source
                  </button>
                </div>
              </div>

              <div class="work-1">

                 <a href="#"
                  ><img src="${portfolioData[2].image2}" class="desktop-only" alt="portfolio-3"
                /></a>
                
                </div>
              </div>
            </div>
            
            <!-- portfolio - 2 -->
            <div class="card">
              <div class="row ">
                <div class="work-1">

                <a href="#"
                  ><img src="${portfolioData[1].image2}" class="desktop-only" alt="portfolio-2"
                /></a>

                </div>

                <div class="col-2">
                <a href="#"
                  ><h2>${portfolioData[1].title}</h2></a>

                  
                <div class="work-details flex2">
                  <a href="#"><h3>${portfolioData[0].workDetails[0]}</h3></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[1]}</h4></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[2]}</h4></a>
                </div>
                <p>
                  ${portfolioData[1].description}
                </p>
                <ul>
                  <li class="work-tools">
                    <button type="button" class="tools">${portfolioData[1].workTools[0]}</button>
                    <button type="button" class="tools">${portfolioData[1].workTools[1]}</button>
                    <button type="button" class="tools">${portfolioData[1].workTools[2]}</button>
                    <button type="button" class="tools">${portfolioData[1].workTools[3]}</button>
  
                  </li>
                </ul>
                <div class="sub-btn-cnt">
                  <button type="button" class="sub-btn">
                  <a href="${portfolioData[0].liveLink}" target="_blank"><img src="${portfolioData[0].liveIcon}" class="desktop-only" alt="portfolio-1"
                  /></a>See Live
                  </button>

                  <button type="button" class="sub-btn">
                  <a href="${portfolioData[0].sourceLink}" target="_blank"><img src="${portfolioData[0].sourceIcon}" class="desktop-only" alt="portfolio-1"
                  /></a>See Source
                  </button>
                </div>
              </div>
              </div>
                </div>

            <!-- portfolio - 4 -->
            <div class="card">
              <div class="row ">
               
                <div class="col-2">
                <a href="#"
                  ><h2>${portfolioData[3].title}</h2></a>

                  
                <div class="work-details flex2">
                  <a href="#"><h3>${portfolioData[3].workDetails[0]}</h3></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[3].workDetails[1]}</h4></a>
                 
                </div>

                <p>
                    ${portfolioData[3].description}
                </p>
                <ul>
                  <li class="work-tools">
                     <button type="button" class="tools">${portfolioData[3].workTools[0]}</button>
                    <button type="button" class="tools">${portfolioData[3].workTools[1]}</button>
                    <button type="button" class="tools">${portfolioData[3].workTools[2]}</button>
                    <button type="button" class="tools">${portfolioData[3].workTools[3]}</button>
                    <button type="button" class="tools">${portfolioData[3].workTools[4]}</button>
                  </li>
                </ul>
                <div class="sub-btn-cnt">
                  <button type="button" class="sub-btn">
                  <a href="${portfolioData[0].liveLink}" target="_blank"><img src="${portfolioData[0].liveIcon}" class="desktop-only" alt="portfolio-1"
                  /></a>See Live
                  </button>

                  <button type="button" class="sub-btn">
                  <a href="${portfolioData[0].sourceLink}" target="_blank"><img src="${portfolioData[0].sourceIcon}" class="desktop-only" alt="portfolio-1"
                  /></a>See Source
                  </button>
                </div>
              </div>
              <div class="work-1">

              <a href="#"
            ><img src="${portfolioData[3].image2}" class="desktop-only" alt="portfolio-4"
          /></a>

          </div>
              </div>
                </div>`;

form.addEventListener('submit', (e) => {
  if (!checkMail(email.value)) {
    e.preventDefault();
    span.innerText = 'please enter valid email address';
  } else {
    span.innerText = '';
  }
});
