//variables usadas  
const boton = document.querySelector('#boton');
const btn_menu = document.querySelector('.btn-menu');
const btn_contact = document.querySelector('#make_contact');
const side_bar = document.querySelector('.sidebar')
const image = document.querySelector('#profile_image');
const name = document.querySelector('#name');
const title = document.querySelector('#title');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone_num');
const street = document.querySelector('#street_name');
const birth_day = document.querySelector('#birth');
const about_me = document.querySelector('#about_me');
const face = document.querySelector('#facebook_info');
const twitter = document.querySelector('#twitter_info');
const youtube = document.querySelector('#youtube_info');
const linkedin = document.querySelector('#linkedin_info');

const runGenerator = async() => {
   try{
    const url = 'https://randomuser.me/api/';
    const res = await fetch(url);
    const { results } = await res.json();   
    const data = results[0];

    var first_name = data.name.first;
    var short_mail = data.email;
    var birthday = (data.dob.date).slice(0, 10)

    if (short_mail.length > 20) {
      new_mail = first_name+'@'+'example.com';
      short_mail = new_mail;
    } 
    
    var nro = Math.floor(Math.random() * (professions.length - 1));

    image.src = data.picture.large;
    name.textContent  = data.name.last + ' ' + first_name;
    title.textContent = professions[ nro ][0];
    about_me.textContent = professions[ nro ][1];
    email.textContent = short_mail;
    phone.textContent = data.phone;
    street.textContent = data.location.street.name +"\n" + data.location.country;
    birth_day.textContent = birthday;
    face.textContent = first_name + '@facebook';
    twitter.textContent = first_name + '@twitter';
    youtube.textContent = first_name + '@youtube';
    linkedin.textContent = first_name + '@linkedin';

   } catch (error) {
    console.error(error);
   } 
}

//https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyname/
let tooltips = document.querySelectorAll("[id='tooltip-text']")

const reading = document.getElementById('reading')
reading.onmouseover = function() {mouseOver(0)};
reading.onmouseout = function() {mouseOut(0)};

const gaming = document.getElementById('gaming')
gaming.onmouseover = function() {mouseOver(1)};
gaming.onmouseout = function() {mouseOut(1)};

const music = document.getElementById('music')
music.onmouseover = function() {mouseOver(2)};
music.onmouseout = function() {mouseOut(2)};

const travel = document.getElementById('travel')
travel.onmouseover = function() {mouseOver(3)};
travel.onmouseout = function() {mouseOut(3)};


function mouseOver(x) {
 if(tooltips[x].onmouseover = true) {
    tooltips[x].style.display = 'block'
 }
}

function mouseOut(x) {
 if(tooltips[x].onmouseout = true) {
    tooltips[x].style.display = 'none'
 }
}



boton.onmouseover = function() {boton.innerHTML = 'Presiona para cargar un nuevo curriculum.'}
boton.onmouseout = function() {boton.innerHTML = '&#8250'}

document.addEventListener('DOMContentLoaded', runGenerator);  
btn_menu.addEventListener('click', function () {
    console.log('en exopand')
    side_bar.classList.toggle("expand")
})
boton.addEventListener('click', runGenerator);



professions = [
    ["Academic librarian", "Academic librarian who loves to help people find the information they need. I am passionate about helping students and researchers find the resources they need to do their work. I love spending time in her library, reading and researching new books and materials."],
    ["Accountant","Numbers are my passion, and I make sure that everything is in order so that businesses can run smoothly. I'm always looking for ways to make things easier for my clients, and my goal is helping them grow and succeed."],
    ["Nurse","I'm a nurse, and I love caring for people. I enjoy working with patients of all ages and helping them get the best possible care. I'm passionate about my work and I enjoy helping people feel better. I've worked as a nurse for many years now, and I know that "],
    ["Aeronautical engineer","I'm an aeronautical engineer and I love everything about planes! I've been obsessed with them since I was a kid and I'm so excited to be able to work on them now. I want to make sure that everyone can experience the joy of flight, and I'm always working to make planes more efficient and safe. I design and build airplanes and helicopters."],
    ["Aid worker/humanitarian worker","I am an aid worker who helps people in need. I have worked in many different countries and have seen firsthand the difference that aid can make. I am committed to helping those who need it most and making a difference in the world."],
    ["Architect","I'm an architect. I design buildings and spaces. I'm interested in how people interact with their environment. I want to create spaces that are efficient and beautiful. Every project is an opportunity to create something special that meets the needs of my clients."],
    ["Architectural technologist","I am an architectural technologist and I specialize in the design and construction of buildings. I have a passion for the built environment and I am always striving to create the best possible designs for my clients. I am a creative problem solver and I thrive in a challenging work environment. I am always looking for new ways to improve my skills and to expand my knowledge."],
    ["Armed forces officer","Armed Forces Officer. I am an active duty United States Army Officer. I have served for over 20 years in various leadership positions. I am a graduate of the United States Military Academy at West Point and have a master's degree in business administration from Harvard University."],
    ["Computer scientist"," Computer scientist who loves to solve difficult problems. Always looking to learn new things and to explore new ways of thinking. I am always looking for new ways to improve the way people use computers. I am also a musician and a dancer. I love to perform music and dance"],
    ["Conference organiser","Conference organizer with a passion for making events that bring people together and foster community. Experienced in all stages of planning and execution, from logistics to marketing."],
    ["Cyber security specialist","Cyber security specialist who has been working in the field for over 10 years. I have experience with a wide range of cyber security solutions, and I'm passionate about helping companies protect their data and networks from attack. I'm also an expert in malware analysis and reverse engineering."],
    ["Dance movement therapist","I am a professional dance movement therapist. I help people heal and grow through the power of dance and movement. I believe that everyone has the ability to heal and connect with their deepest selves through movement. I am passionate about helping people feel more alive, connected, and whole."],
    ["Data analyst","I'm a data analyst who helps companies make better decisions by extracting value from data. I have a strong background in statistics and mathematics, and I love finding new ways to use data to improve business outcomes."],
    ["Equality and diversity officer","I'm an Equality and Diversity Officer who is passionate about social justice and creating an inclusive society. I work to promote equal rights and opportunities for everyone, and challenge discrimination and prejudice."],  
    ["Museum education officer","Museum education officer who strives to provide engaging and educational experiences for all visitors. Passionate about making museums accessible and inclusive for everyone."],
    ["Prison officer","I work as a prison officer. I am responsible for the safety and security of the inmates under my care. I work to maintain order and discipline in the prison, and to rehabilitate the inmates so that they can re-enter society as productive citizens."],
    ["Video game developer","I'm a video game developer. I've been making games for over 10 years, and I love it. I've worked on AAA games and small indie projects, and I'm always looking for new challenges. If you're looking for someone to make your game idea a reality, I'm your person. Let's make some great games together!"],
    ["Water engineer","I am a water engineer. I have devoted my career to improving water quality and water quantity for communities around the world. I have worked on projects large and small, from designing water treatment plants to developing new water recycling technologies. I am passionate about water and its importance to our planet and our health, and I am committed to finding innovative ways to protect and enhance our most precious resource."],
    ["Web developer", "I'm a web developer specializing in e-commerce. I have experience with a variety of programming languages and platforms. I'm always looking to learn new technologies and expand my skills."],
    ["Welfare rights adviser","Welfare rights adviser who is passionate about fighting for the rights of those who need assistance. I believe that everyone deserves a fair chance, and I will continue to fight for what is right."]
];