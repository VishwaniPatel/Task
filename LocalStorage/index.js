//LocalStorage

//setItem
localStorage.setItem("isAuthenticate",false);

const login = document.getElementById("login");
const logout = document.getElementById("logout");

function onLogin() {    
    //setItem
    localStorage.setItem("isAuthenticate",true);
    logout.classList.remove("d-none")
    login.classList.add("d-none");
}

function onLogout() {
    //setItem
    localStorage.setItem("isAuthenticate",false);
    login.classList.remove("d-none");
    logout.classList.add("d-none");
}

localStorage.setItem("newkey",false);

//removeItem
//localStorage.removeItem("newkey");

//getItem
const value = localStorage.getItem("isAuthenticate");
console.log(value);

//clear 
//localStorage.clear();
