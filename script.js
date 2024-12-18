const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener("click", function () {
    window.location.href = "index2.html"
});
const gitHubBtn = document.getElementById('gitHubBtn');
gitHubBtn.addEventListener("click", function () {
    window.location.href = "https://github.com/yasser8283?tab=repositories"
});
const linkedInBtn = document.getElementById('linkedInBtn');
linkedInBtn.addEventListener("click", function () {
    window.location.href = "https://www.linkedin.com/in/mohammed-yasser-shaikh-a71631260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
});
const bioData = document.getElementById('bioData');
bioData.addEventListener("click", function () {
    window.location.href = "biodata.html"
});
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".right-btn");
const prevButton = document.querySelector(".left-btn");

let currentSlideIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;

  prevButton.disabled = currentSlideIndex === 0;
  nextButton.disabled = currentSlideIndex === slides.length - 1;
}

prevButton.addEventListener("click", () => {
  currentSlideIndex = Math.max(0, currentSlideIndex - 1);
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentSlideIndex = Math.min(slides.length - 1, currentSlideIndex + 1);
  updateCarousel();
});
updateCarousel();
document.getElementById('copyEmail').addEventListener('click', function() {
    const emailID = document.getElementById('emailID').textContent;
    navigator.clipboard.writeText(emailID).then(function() {
        alert('Email copied to clipboard!');
    }).catch(function(err) {
        console.error('Error copying text: ', err);
    });
});
document.getElementById('copyNumber').addEventListener('click', function() {
    const PhoneNumber = document.getElementById('PhoneNumber').textContent;
    navigator.clipboard.writeText(PhoneNumber).then(function() {
        alert('Phone Number copied to clipboard!');
    }).catch(function(err) {
        console.error('Error copying text: ', err);
    });
});
$(document).ready(function () {
    $(".btns").hover(
        function () {
            // On mouse enter
            $(this).css({
                transform: "scale(1.2)", // Scale up
                backgroundColor: "#00796b" // Change background color
            });
        },
        function () {
            // On mouse leave
            $(this).css({
                transform: "scale(1)", // Scale back to normal
                backgroundColor: "teal" // Revert background color
            });
        }
    );
});
$(document).ready(function () {
    $(".btn").hover(
        function () {
            // On mouse enter
            $(this).css({
                transform: "scale(1.2)", // Scale up
                backgroundColor: "#00796b" // Change background color
            });
        },
        function () {
            // On mouse leave
            $(this).css({
                transform: "scale(1)", // Scale back to normal
                backgroundColor: "teal" // Revert background color
            });
        }
    );
});
$(document).ready(function () {
    $(".heading").animate(
        {
            backgroundColor: "#CCFF00" // Change to gold
        },
        2000 // Duration in milliseconds
    );
});
$(document).ready(function () {
    $("#photo").on("mouseover", function () {
        $(this).css("animation-play-state", "running");
    });

    $("#photo").on("mouseout", function () {
        $(this).css("animation-play-state", "paused");
    });
});






