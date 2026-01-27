function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('download-cv').onclick = function() {
  window.open('./images/Menna_Radi (CV).pdf');
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
//Coffee project
document.getElementById('coffeegit').onclick = function() {
  location.href = 'https://drive.google.com/drive/folders/1YLMX_bsTcPoThb42ORKov9WIJy45cNHR?usp=sharing';
};
document.getElementById('coffeedimo').onclick = function() {
  location.href = 'https://drive.google.com/drive/folders/1lb3mgqb4tdkwiLt6AbpVN9Skjh0IPwbn?usp=sharing';
};
//Ception project
document.getElementById('ceptiongit').onclick = function() {
  location.href = 'https://drive.google.com/drive/folders/1MhDvdo4RpWkdAOi1ch26VG5HPw18Dfl8?usp=sharing';
};
document.getElementById('ceptiondimo').onclick = function() {
  location.href = 'https://drive.google.com/drive/folders/1l2e3hx6arrXJqEp8_NbDwq_8zYOZMicw?usp=sharing';
};
//3legant project
document.getElementById('3legantgit').onclick = function() {
  location.href = 'https://drive.google.com/file/d/1tKjM5s8Dbktt49EvtxLCRe9tWeklDl0r/view?usp=sharing';
};
document.getElementById('3legantdimo').onclick = function() {
  location.href = 'https://drive.google.com/file/d/1wj2KDirpVDCx9GgrApg7fRWfSl_5C6tQ/view?usp=sharing';
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
