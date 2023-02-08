const myData = [
  {
    image: './images/robert.jpeg',
    name: 'Robert McGovern',
    title: 'Software Engineer at Apple',
    about: 'A dabbler in code, occasional tech editor for articles & books, and long long ago a book writer.',
  },
  {
    image: './images/mahesh.jpeg',
    name: 'Mahesh Ruparel',
    title: 'MERN Stack Developer',
    about: 'He loves developing and designing front end web architecture and building interactive consumer data from multiple systems.',
  },
  {
    image: './images/mary.jpg',
    name: 'Mary Krill',
    title: 'Full Stack Developer',
    about: 'As a developer and a product manager,she loves learning new technologies,got best employee of the year award in their company last year.',
  },
  {
    image: './images/clay.jpeg',
    name: 'Clayton Derrick',
    title: 'Web Administrator',
    about: 'Full-time web administrator for the University Book Store,loves nature walk and sky diving at his spare time.He also developed the curriculum to nurture young aspiring developers.',
  },
  {
    image: './images/jul.jpg',
    name: 'Julie Smith',
    title: 'CEO and co-founder of AY Translation Co.',
    about: 'Enjoys reading novels,as a CEO,she oversees the translation of myriads of novel books to over 50 languages.',
  },
  {
    image: './images/son.png',
    name: 'Kelvin Son',
    title: 'Senior Data Scientist',
    about: 'Son helped greatly in implementing the dialogue feature of the chatGPT',
  },
];
  // get parent element
const getSpeaker = document.querySelector('.speaker-container');
function displaySpeaker(speakerList) {
  let displaySpeaker = speakerList.map((speaker) => `
      <div class="div-img"><img src=${speaker.image} alt=${speaker.title} class="speaker"/></div>
        <div class="speaker-bio">
        <p class="name">${speaker.name}</p>
            <p class="title"><i>${speaker.title}</i></p>
            <div class="hr"></div>
          <p class="title-descr">
           ${speaker.about}
          </p>
        </div> 
       `);
  displaySpeaker = displaySpeaker.join('');
  getSpeaker.innerHTML = displaySpeaker;//
}
window.addEventListener('DOMContentLoaded', () => {
  displaySpeaker(myData);
  // parse menu array
});

// set current year
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// display menu
const menuContainer = document.querySelector('.div-container');
const btnToggle = document.querySelector('.btn-toggle');
const btnClose = document.querySelector('.close-btn');
const Link = document.querySelector('.nav-link');

btnToggle.addEventListener('click', () => {
  menuContainer.classList.toggle('show-menu');
});
btnClose.addEventListener('click', () => {
  menuContainer.classList.toggle('show-menu');
});
Link.forEach((link) => {
  link.addEventListener('click', () => {
    menuContainer.classList.toggle('show-menu');
  });
});
