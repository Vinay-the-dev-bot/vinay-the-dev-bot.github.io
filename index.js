document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    var pdfUrl =
      "https://drive.google.com/uc?export=download&id=1_mkqc9sIlVvbEcl_KCoejgaOvJ6JXVw6";
    // "https://drive.google.com/uc?export=download&id=1FA864u-SOaS4ASNt0-59XR8UpnqSXy7P";

    var link = document.createElement("a");

    link.setAttribute("download", "Vinayagoud_Meti_Resume.pdf");
    link.href = pdfUrl;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  });
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
});
const cont = document.getElementById("container");
cont.addEventListener("click", () => {
  const bar1 = document.getElementsByClassName("bar1")[0];
  const bar2 = document.getElementsByClassName("bar2")[0];
  const bar3 = document.getElementsByClassName("bar3")[0];
  // console.log("Before", bar1, bar2, bar3);
  bar1.classList.toggle("change");
  bar2.classList.toggle("change");
  bar3.classList.toggle("change");
  // console.log("After", bar1, bar2, bar3);

  let menu = document.getElementsByClassName("menu")[0];
  if (!menu.style.display || menu.style.display == "none") {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.alignItems = "center";
  } else {
    // menu.style.display = "none";
    // console.log("jdjskdsbv");
    // console.log(screen.width);
    if (screen.width > 1007) {
      menu.style.display = "row";
    } else {
      menu.style.display = "none";
    }
  }

  let navLeft = document.getElementsByClassName("navLeft")[0];
  if (!navLeft.style.flexDirection || navLeft.style.flexDirection == "row") {
    document.getElementById("namelogo").style.paddingLeft = "50px";
    navLeft.style.display = "flex";
  } else {
    navLeft.style.display = "flex";
  }
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    cont.classList.toggle("open");
    const bar1 = document.getElementsByClassName("bar1")[0];
    const bar2 = document.getElementsByClassName("bar2")[0];
    const bar3 = document.getElementsByClassName("bar3")[0];
    // console.log("Before", bar1.classList.contains("change"));
    if (bar1.classList.contains("change")) {
      bar1.classList = "bar1";
    }
    if (bar2.classList.contains("change")) {
      bar2.classList = "bar2";
    }
    if (bar3.classList.contains("change")) {
      bar3.classList = "bar3";
    }
    // console.log("After", bar1.classList.contains("change"));
    const menu = document.getElementsByClassName("menu")[0];
    console.log(screen.width);
    if (screen.width > 1007) {
      menu.style.display = "row";
    } else {
      menu.style.display = "none";
    }
  });
});

window.addEventListener("scroll", function () {
  var goToTop = document.querySelector(".goToTop");
  if (window.pageYOffset > 500) {
    goToTop.style.opacity = "1";
  } else {
    goToTop.style.opacity = "0";
  }
});
