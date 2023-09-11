/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

async function fetchUsers() {
  try {
      const response = await fetch(ENDPOINT);
    if (response.ok) {
      const users = await response.json();
      //   console.log(users);
      users.forEach((user) => {
          generateUser(user);
        });
    } else {
        alert("Failed to fetch");
    }
} catch (error) {
    alert("Something went wrong");
}
}


function generateUser (user) {
    
    const card = document.createElement ("div");
    card.style.border = "1px solid #646464";
    card.style.borderRadius = "5px";
    card.style.padding = "5px";
    card.style.textAlign = "center"
    card.style.backgroundColor = "#F1F1F1"
    card.style.width = "35%"
    card.style.margin = "auto";
    card.style.marginBottom = "15px";


    const output = document.getElementById ("output")


    const loginElement = document.createElement ("h3")
    loginElement.textContent = user.login;

        
    const avatar = document.createElement ("img");
    avatar.src = user.avatar_url;
    avatar.style.width = "200px"
    avatar.style.padding = "20px"
    
    card.append (loginElement, avatar);
    output.append (card);
};

const button = document.getElementById("btn");


button.addEventListener("click", () => {
document.getElementById("output").textContent = "";

fetchUsers()
  
});

