function toggleSkills() {
  hideAllContainersExcept("skills");
}

function toggleProject() {
  hideAllContainersExcept("project");
}

function toggleAbout() {
  hideAllContainersExcept("about");
}

function toggleHobby() {
  hideAllContainersExcept("hobby");
}

function hideAllContainersExcept(containerId) {
  var containers = ["skills", "project", "about", "hobby"];
  containers.forEach(function (container) {
    var currentContainer = document.getElementById(container);
    if (container === containerId) {
      currentContainer.style.display =
        currentContainer.style.display === "none" ? "block" : "none";
    } else {
      currentContainer.style.display = "none";
    }
  });
}

function openLink(link) {
  window.open(link, "_blank");
}
