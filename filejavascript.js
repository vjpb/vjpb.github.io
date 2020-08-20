


const url = "http://localhost:8888/cv_vjpb/wp-json/wp/v2/posts?per_page=50";

fetch(url)
.then(function (response) {
    return response.json();
})
.then((apicv) => { 
    
    const skill = document.getElementById("skills");
    const education = document.getElementById("education"); 
    const work_experience = document.getElementById("work-experience"); 
    const portfolio = document.getElementById("portfolio-pictures"); 
    
    for (i = 0; i < apicv.length; i++) {
        userData = apicv[i];
        if (apicv[i].categories[0] === 3) {
            skill.insertAdjacentHTML(
                "beforeEnd",
                `<h4 class="progress-title"> 
                        ` + apicv[i].title.rendered +`
                </h4>
                <div class="skills">
                    <div class="progress-bars">
                        <div class="bars-level animation-bars"  style="width:` + apicv[i].porcent +`%">    
                            <div class="bar-porcent" >
                            `+ apicv[i].porcent +`%
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
                                    ${ userData.university}
                                </p>
                                <p class="centered-text2">
                                    ${ userData.degree}
                                </p>
                            </div>    
                        </div>
                        <div class="flip-back">
                            <div>
                                <p class="centered-text3"> 
                                    ${ userData.start_study}
                                     - 
                                    ${ userData.graduation_date}
                                </p>
                                <div class="centered-text4">
                                    ${ userData.description}
                                </div>                                
                            </div>        
                        </div>
                    </div>
                </div>`
            );   
        }
        if (apicv[i].categories[0] === 6 ) {
            work_experience.insertAdjacentHTML(
            "beforeEnd",
            `<div class="work-card-items">
                <h3> 
                ` + apicv[i].name_work +`
                </h4>
                <h4> 
                ` + apicv[i].job + `
                </h4>
                <div class="text-card">
                    <p>  
                    ` + apicv[i].start_date + ` - 
                    </p>
                    <p> 
                    ` + apicv[i].finish_date + `
                    </p>
                    <p> 
                    ` + apicv[i].responsibility + `
                    </p>
                </div>            
                
            </div>`            
            );   
        }
        if (apicv[i].categories[0] === 10 ) {
            portfolio.insertAdjacentHTML(
                "beforeEnd",
                `<div class="portfolio-pictures">
                    <h4> 
                        ` + apicv[i].picture_title_1 +`
                    </h4>
                    <img src="` + apicv[i].picture_1 + `" alt="job done">  
                    <h4> 
                    ` + apicv[i].description_of_work_1 +`
                    </h4>
                    <p> 
                    ` + apicv[i].text_description_1 + `
                    </p> 
                    <p> 
                    ` + apicv[i].tags_1 + ` 
                    </p> 
                    <a href="` + apicv[i].url_1 + `" target="_blank">` + apicv[i].url_description_1 + `
                    </a>
                    <a href="` + apicv[i].url_2 + `" target="_blank">` + apicv[i].url_description_2 + `
                    </a>  
                </div>`
            );   
        }
    }
    });  

/* ==== Start Go top up function === */

const mybutton = document.querySelector("#myBtn");
window.onscroll = function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* ==== End Go top up function === */


/* ==== Start hightlight NavBar function === */

const links = document.querySelectorAll('.active-nav');
const sections = document.querySelectorAll('section');

function changeLinkState() {
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    links.forEach((link) => link.classList.remove('highlight-nav'));
    links[index].classList.add('highlight-nav');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

/* ==== End hightlight NavBar function === */

/* ==== Start animation Bar progress View port function === */

var isOutOfViewport = function (elem) {

	// Get element's bounding
	var bounding = elem.getBoundingClientRect();

	// Check if it's out of the viewport on each side
	var out = {};
	out.top = bounding.top < 0;
	out.left = bounding.left < 0;
	out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
	out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
	out.any = out.top || out.left || out.bottom || out.right;

	return out;

};

var elem = document.querySelector('#skills');
console.log(elem);
var logViewport = function () {
	var isOut = isOutOfViewport(elem);
	if (isOut.any) {
		elem.classList.remove('animation-progress');
	} else {
		elem.classList.add('animation-progress');
	}
};

logViewport();
window.addEventListener('scroll', logViewport, false);

/* ==== End animation Bar progress View port function === */
