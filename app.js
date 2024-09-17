// no reload pages | active page | transition //

document.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById('content');
  const links = document.querySelectorAll('nav a');
  const defaultPage = 'about';

  links.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); 

          const page = event.target.getAttribute('data-page');
          loadPage(page);

          links.forEach(a => a.classList.remove('active'));
          event.target.classList.add('active');
      });
  });

  function loadPage(page) {
      contentDiv.classList.add('fade-out');

      setTimeout(() => {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', `${page}.html`, true);

          xhr.onload = () => {
              if (xhr.status === 200) {
                  contentDiv.innerHTML = xhr.responseText;
              } else {
                  contentDiv.innerHTML = '<p>Page not found.</p>';
              }

              contentDiv.classList.remove('fade-out');
              contentDiv.classList.add('fade-in');

              setTimeout(() => {
                  contentDiv.classList.remove('fade-in');
              }, 500);
          };

          xhr.onerror = () => {
              contentDiv.innerHTML = '<p>There was an error loading the page.</p>';
              contentDiv.classList.remove('fade-out');
              contentDiv.classList.add('fade-in');

              setTimeout(() => {
                  contentDiv.classList.remove('fade-in');
              }, 200);
          };

          xhr.send();
      }, 200);
  }

  loadPage(defaultPage);
  document.querySelector(`nav a[data-page="${defaultPage}"]`).classList.add('active');
});


//-- drop down --//

var currentState = 0;

function rotateAngledown() {
  if (currentState === 0) {
    currentState = 180;
    document.querySelector(".fa-chevron-down").style.transform =
      "rotate(180deg)";
  } else {
    currentState = 0;
    document.querySelector(".fa-chevron-down").style.transform = "rotate(0deg)";
  }
}


//-- light mode / dark mode --//

let darkmode = localStorage.getItem("light-mode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("light-mode");
  localStorage.setItem("light-mode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("light-mode");
  localStorage.setItem("light-mode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("light-mode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

