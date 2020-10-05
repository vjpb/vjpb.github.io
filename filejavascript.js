const url =
  "https://vjpb-portfolio.000webhostapp.com/wp-json/wp/v2/posts?per_page=50";

fetch(url)
  .then(function (response) {
    return response.json();
  })

  .then((apicv) => {
    const skill = document.querySelector("#skills");
    const education = document.querySelector("#education");
    const work_experience = document.querySelector("#work-experience");
    const portfolio = document.querySelector("#portfolio-work-done");

    for (i = 0; i < apicv.length; i++) {
      userData = apicv[i];
      if (apicv[i].categories[0] === 3) {
        skill.insertAdjacentHTML(
          "beforeEnd",
          `<h4 class="progress-title"> 
                ${userData.title.rendered}
                </h4>
                <div class="skills">
                    <div class="progress-bars">
                        <div class="bars-level animation-bars"  style="width:${userData.porcent}%">    
                            <div class="bar-porcent" >
                            ${userData.porcent}%
                            </div>
                        </div>
                    </div>
                </div>`
        );
      }
      if (apicv[i].categories[0] === 2) {
        education.insertAdjacentHTML(
          "beforeEnd",
          `<div class="flip">
                    <div class="flip-inner">
                        <div class="flip-front">
                            <img src="Imagenes/Study.jpg" alt="Study icon">
                            <div>
                                <p class="centered-text">
                                    ${userData.university}
                                </p>
                                <p class="centered-text2">
                                    ${userData.degree}
                                </p>
                            </div>    
                        </div>
                        <div class="flip-back">
                            <div>
                                <p class="centered-text3"> 
                                    ${userData.start_study}
                                     - 
                                    ${userData.graduation_date}
                                </p>
                                <div class="centered-text4">
                                    ${userData.description}
                                </div>                                
                            </div>        
                        </div>
                    </div>
                </div>`
        );
      }
      if (apicv[i].categories[0] === 6) {
        work_experience.insertAdjacentHTML(
          "beforeEnd",
          `<div class="work-card-items">
                <h3> 
                ${userData.name_work}
                </h4>
                <h4> 
                ${userData.job}
                </h4>
                <div class="text-card">
                    <p>  
                    ${userData.start_date} - 
                    </p>
                    <p> 
                    ${userData.finish_date}
                    </p>
                    <p> 
                    ${userData.responsibility}
                    </p>
                </div>            
            </div>`
        );
      }
      if (apicv[i].categories[0] === 10) {
        portfolio.insertAdjacentHTML(
          "beforeEnd",
          `<div  class="portfolio-pictures">
                    <div id="modalPicture" onclick="openModal(${userData.id})" class="click-picture">
                        <img src="${userData.picture_1}" alt="job done">  
                        <div class="overlay">                        
                            <h4> 
                                ${userData.picture_title_1}
                            </h4>
                            <h5> 
                                ${userData.description_of_work_1}
                            </h5>
                        </div>
                    </div>                                  
                </div>`
        );
      }
    }
  });

/* ==== Start Go top up function === */

const mybutton = document.querySelector("#myBtn");
window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* ==== End Go top up function === */

/* ==== Start hightlight NavBar function === */

const links = document.querySelectorAll(".active-nav");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("highlight-nav"));
  links[index].classList.add("highlight-nav");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

/* ==== End hightlight NavBar function === */

/* ==== Start animation Bar progress View port function === */

var isOutOfViewport = function (elem) {
  // Get element's bounding
  var bounding = elem.getBoundingClientRect();

  // Check if it's out of the viewport on each side
  var out = {};
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom =
    bounding.bottom >
    (window.innerHeight || document.documentElement.clientHeight);
  out.right =
    bounding.right >
    (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;

  return out;
};

var elem = document.querySelector("#skills");
var logViewport = function () {
  var isOut = isOutOfViewport(elem);
  if (isOut.any) {
    elem.classList.remove("animation-progress");
  } else {
    elem.classList.add("animation-progress");
  }
};

logViewport();
window.addEventListener("scroll", logViewport, false);

/* ==== End animation Bar progress View port function === */
const jobModal = document.querySelector("#myModal");

function openModal(id) {
  const jobDone =
    "https://vjpb-portfolio.000webhostapp.com/wp-json/wp/v2/posts/" + id;

  fetch(jobDone)
    .then(function (response) {
      return response.json();
    })

    .then((data) => {
      const modal = document.querySelector("#data-modal");

      modal.insertAdjacentHTML(
        "afterbegin",
        `<div class="modal-content">
                <img class="modal-picture" src="${data.picture_1}" alt="job done">  
                <div class="modal-article">
                    <div class="article">
                        <h4> 
                            ${data.picture_title_1}
                        </h4>                           
                    </div> 
                    <p> 
                        ${data.text_description_1}
                    </p> 
                </div>                                       
                    <p class="tags">    
                        ${data.tags_1}
                    </p> 
                <div class="modal-footer">
                    <a href="${data.url_1}" target="_blank">${data.url_description_1}
                    </a>
                    <a href="${data.url_2}" target="_blank">${data.url_description_2}
                    </a>  
                    <span class="close" onclick="closeModal()"> &times</span>

                </div>    
            </div>`
      );

      jobModal.style.display = "block";
    });
}

function closeModal() {
  const newModal = document.querySelector("#data-modal");
  newModal.removeChild(newModal.lastChild);
  jobModal.style.display = "none";
  newModal.innerHTML = "";
}
window.onclick = function (event) {
  const outModal = document.querySelector("#data-modal");

  if (event.target == jobModal) {
    outModal.removeChild(outModal.lastChild);
    jobModal.style.display = "none";
    outModal.innerHTML = "";
  }
};

/* ==== End modal function === */
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;

  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
