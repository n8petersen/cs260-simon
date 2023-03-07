function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("username", nameEl.value);
    window.location.href = "./html/play.html";
    console.log(nameEl.value);
  }
  