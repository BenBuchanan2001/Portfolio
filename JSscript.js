document.addEventListener("DOMContentLoaded", function() {
  var skillsHeader = document.getElementById("skills-title");
  var arrowButton = document.querySelector(".arrow-button a");
  var topHalf = document.querySelector(".top-half-of-page");

  arrowButton.addEventListener("click", function(event) {
    event.preventDefault();
    skillsHeader.scrollIntoView({ behavior: "smooth" });
  });

  window.addEventListener("scroll", function() {
    var skillsHeaderRect = skillsHeader.getBoundingClientRect();
    if (skillsHeaderRect.top <= 0) {
      topHalf.classList.add("visible");
    } else {
      topHalf.classList.remove("visible");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var introHeader = document.getElementById("about-me-header");
  var arrowButton2 = document.querySelector(".arrow-button-2 a");

  arrowButton2.addEventListener("click", function(event) {
    event.preventDefault();

    introHeader.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const skillBars = document.querySelectorAll(".skill-bar");

  skillBars.forEach(skillBar => {
    const skillLevel = skillBar.querySelector(".skill-level");
    const initialWidth = parseFloat(skillLevel.style.width);

    skillBar.addEventListener("mouseover", function() {
      const targetWidth = parseFloat(skillLevel.dataset.width);
      skillLevel.style.width = targetWidth + "%";
    });

    skillBar.addEventListener("mouseout", function() {
      skillLevel.style.width = initialWidth + "%";
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var arrowButton3 = document.querySelector(".arrow-button-3 a");

  arrowButton3.addEventListener("click", function(event) {
    event.preventDefault();
    var experienceEducation = document.getElementById("experience-education");
    window.scrollTo({
      top: experienceEducation.offsetTop,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var experienceEducation = document.getElementById("experience-education");
  var arrowButton4 = document.querySelector(".arrow-button-4 a");

  arrowButton4.addEventListener("click", function(event) {
    event.preventDefault();
    experienceEducation.scrollIntoView({ behavior: "smooth" });
  });
});
