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
              }, 0);
          };

          xhr.send();
      }, 0);
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

const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
} else {
    document.body.classList.add('light-mode');
}

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

//-- icon change --//

function changeFavicon() {
    var favicon = document.getElementById('dynamic-favicon');
    var currentHour = new Date().getHours();

    if (currentHour >= 3 && currentHour < 4) {
        favicon.href = 'img/icon/3-4.png';
    } 
    else if (currentHour >= 4 && currentHour < 6) {
        favicon.href = 'img/icon/4-6.png';
    } 
    else if (currentHour >= 6 && currentHour < 10) { 
        favicon.href = 'img/icon/6-10.png';
    }
    else if (currentHour >= 10 && currentHour < 15) {
        favicon.href = 'img/icon/10-15.png';
    }
    else if (currentHour >= 15 && currentHour < 16) {
        favicon.href = 'img/icon/15-16.png';
    }
    else if (currentHour >= 16 && currentHour < 17) { 
        favicon.href = 'img/icon/16-17.png';
    }
    else if (currentHour >= 17 && currentHour < 19) {
        favicon.href = 'img/icon/17-19.png';
    }
    else if (currentHour >= 19 && currentHour < 21) { 
        favicon.href = 'img/icon/19-21.png';
    }
    else if ((currentHour >= 21 && currentHour < 24) || (currentHour >= 0 && currentHour < 3)) {
        favicon.href = 'img/icon/21-3.png';
    }
}

window.onload = changeFavicon;
