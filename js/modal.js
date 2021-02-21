const jobModal = document.querySelector("#myModal");
let isOpen = false;
function openModal(id) {
  if (!isOpen) {
    isOpen = true;
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
        jobModal.style.display = "flex";
      });
  }
  return;
}

function closeModal() {
  const newModal = document.querySelector("#data-modal");
  newModal.removeChild(newModal.lastChild);
  jobModal.style.display = "none";
  newModal.innerHTML = "";
  isOpen = false;
}
window.onclick = function (event) {
  const outModal = document.querySelector("#data-modal");
  if (event.target == jobModal) {
    outModal.removeChild(outModal.lastChild);
    jobModal.style.display = "none";
    outModal.innerHTML = "";
    isOpen = false;
  }
};
