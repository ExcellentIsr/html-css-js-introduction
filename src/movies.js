import moviesObj from '../movies.json' assert {type: 'json'};
thumbnailsList.innerHTML = moviesObj.results.map(movie => {
    return `<li class="thumbnails-item">
                <a href="#" class="thumbnails-anchor"
                    data-details-image="${moviesObj.httpPrefix + movie.poster_path}" 
                    data-details-text="${movie.original_title.slice(0, 100)}">
                <img src="${moviesObj.httpPrefix + movie.poster_path}" 
                    class="thumbnails-image">
                <span class="thumbnails-title">${movie.overview}</span>
                </a>
            </li>`;
}).join('');

const detailsImageElement = document.querySelector(".details-image");
const detailsTitleElement = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumbnails-anchor");
const detailsSectionElement = document.querySelector(".details-section");
const POINT_CLASS = "is-point";
const mainSection = document.querySelector("main");
const HIDDEN = "hidden";

thumbnailsAnchors.forEach(anchor => anchor.addEventListener("click",
    setDetails.bind(undefined, anchor)));

function setDetails(anchor) {
    showDetails();
    detailsImageElement.src = anchor.getAttribute("data-details-image");
    detailsTitleElement.innerHTML = anchor.getAttribute("data-details-text");
    detailsSectionElement.classList.add(POINT_CLASS);
    setTimeout(function () {
        detailsSectionElement.classList.remove(POINT_CLASS);
    })
}
function showDetails() {
    mainSection.classList.remove(HIDDEN);
}
function hideDetails() {
    mainSection.classList.add(HIDDEN);
}