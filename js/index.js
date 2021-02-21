// APIREST Wordpress
const url =
  "https://vjpb-portfolio.000webhostapp.com/wp-json/wp/v2/posts?per_page=50";

fetch(url)
  .then(function (response) {
    if (response === 404) {
      document.querySelectorAll(
        ".loader-skills, .loader-education, .loader-work-experience, .loader-portfolio-work-done"
      ).style.display = "block";
    }
    return response.json();
  })

  .then((apicv) => {
    const skill = document.querySelector("#skills");
    const education = document.querySelector("#education");
    const work_experience = document.querySelector("#work-experience");
    const portfolio = document.querySelector("#portfolio-work-done");

    for (i = 0; i < apicv.length; i++) {
      userData = apicv[i];
      // Se espera que la categoria sea Skills
      if (apicv[i].categories[0] === 3) {
        skill.insertAdjacentHTML(
          "beforeEnd",
          `<h4 class="progress-title">
            ${userData.title.rendered}
          </h4>
          <div class="skills">
            <div class="progress-bars">
              <div class="bars-level animation-bars"  style="width:${userData.porcent}%">
                <div class="bar-porcent">
                  ${userData.porcent}%
                </div>
              </div>
            </div>
          </div>`
        );
        document.querySelector(".loader-skills").style.display = "none";
      }
      // Se espera que la categoria sea Education
      if (apicv[i].categories[0] === 2) {
        education.insertAdjacentHTML(
          "beforeEnd",
          `<div class="flip">
          <div class="flip-inner">
            <div class="flip-front">
              <img src="images/education.jpg" class="studyIcon" alt="Study icon">
              <img src="images/rotationCircle.png" class="arrow" alt="arrow icon">
              <div>
                <p class="title-university-text">
                  ${userData.university}
                </p>
                <p class="degree-text">
                  ${userData.degree}
                </p>
              </div>
            </div>
            <div class="flip-back">
              <div>
                <p class="start-study-data-text">
                  ${userData.start_study}
                    - 
                  ${userData.graduation_date}
                </p>
                <div class="description-text">
                  ${userData.description}
                </div>
              </div>
            </div>
          </div>
        </div>`
        );
        document.querySelector(".loader-education").style.display = "none";
      }
      // Se espera que la categoria sea Work Experience
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
        document.querySelector(".loader-work-experience").style.display =
          "none";
      }
      // Se espera que la categoria sea Portfolio (My job)
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
        document.querySelector(".loader-portfolio-work-done").style.display =
          "none";
      }
    }
  });
