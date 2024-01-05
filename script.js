// Set initial value for skills-distance-from-top when page is loaded
document.addEventListener("DOMContentLoaded", pauseAndUpdateDistancesFromTop);

// Update when the page is scrolled
document.addEventListener("scroll", pauseAndUpdateDistancesFromTop);

// Update when the window is resized
window.addEventListener("resize", pauseAndUpdateDistancesFromTop);

// Update when any details element is clicked
document.addEventListener("click", function (event) {
    var clickedDetails = event.target.closest('details');
    if (clickedDetails) {
        pauseAndUpdateDistancesFromTop()
    }
});

function pauseAndUpdateDistancesFromTop() {
    setTimeout(updateDistancesFromTop, 8);
}

function updateDistancesFromTop() {
    var bodyElement = document.getElementsByTagName("body")[0];
    var skillsElement = document.getElementById("skills");
    var footerElement = document.getElementsByTagName("footer")[0];

    var bodyDistanceFromTop = bodyElement.getBoundingClientRect().bottom;
    var skillsDistanceFromTop = skillsElement.getBoundingClientRect().bottom;

    document.documentElement.style.setProperty('--body-distance-from-top', bodyDistanceFromTop + 'px');
    document.documentElement.style.setProperty('--skills-distance-from-top', skillsDistanceFromTop + 'px');

    // Calculate the desired top margin for the footer
    var desiredTopMargin;
    if (bodyDistanceFromTop - skillsDistanceFromTop >= 52) {
        desiredTopMargin = bodyDistanceFromTop - skillsDistanceFromTop - 52;
    } else {
        desiredTopMargin = 98;
    }

    // Apply the calculated top margin to the footer
    footerElement.style.marginTop = desiredTopMargin + 'px';
    document.documentElement.style.setProperty('--footer-top-margin', desiredTopMargin + 'px');

}

function getRootProperties() {
    // Get the root element
    var root = document.documentElement;

    // Get the computed style of the root element
    var rootStyles = getComputedStyle(root);

    // Log the value of --body-distance-from-top
    console.log("--body-distance-from-top: " + rootStyles.getPropertyValue('--body-distance-from-top'));

    // Log the value of --skills-distance-from-top
    console.log("--skills-distance-from-top: " + rootStyles.getPropertyValue('--skills-distance-from-top'));

    // Log the value of --skills-distance-from-top
    console.log("--footer-top-margin: " + rootStyles.getPropertyValue('--footer-top-margin'));
}