function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('download-cv').onclick = function() {
  window.open('./images/Menna-radi (1).pdf');
};

document.getElementById('contact-info').onclick = function() {
  location.href = './#contact';
};

//travel project
document.getElementById('travelgit').onclick = function() {
  location.href = 'https://github.com/menna-radi/time-to-travel';
};
document.getElementById('traveldimo').onclick = function() {
  location.href = 'https://menna-radi.github.io/time-to-travel/';
};
//homz project
document.getElementById('homzgit').onclick = function() {
  location.href = 'https://github.com/menna-radi/Homz';
};
document.getElementById('homzdimo').onclick = function() {
  location.href = 'https://menna-radi.github.io/Homz/';
};
//pet project
document.getElementById('petgit').onclick = function() {
  location.href = 'https://github.com/menna-radi/pet-love';
};
document.getElementById('petdimo').onclick = function() {
  location.href = 'https://menna-radi.github.io/pet-love/';
};

document.getElementById('linkedin-profile').onclick = function() {
  location.href = 'https://www.linkedin.com/in/menna-radi-ewida?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bnrj919HrTI6bNceSs9%2BJuw%3D%3D';
};

document.getElementById('github-profile').onclick = function() {
  location.href='https://github.com/menna-radi'
};



document.getElementById('arrowexperience').onclick = () => location.href = './#experience';
document.getElementById('arrowproject').onclick = () => location.href = './#projects'; 
document.getElementById('arrowcontact').onclick = () => location.href = './#contact';
document.getElementById('arrowprofile').onclick = () => location.href = './#profile';
