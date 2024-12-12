// API Relevant Data

let api = "https://api.github.com/users/";

let fetch = document.createElement("script");
fetch.src = `https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js`;

fetch.integrity = `ha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ==`;

fetch.crossOrigin = "anonymous";
document.head.appendChild(fetch);
let main = document.getElementById("main");
let inputForm = document.getElementById("userInput");
let inputBox = document.getElementById("inputBox");

const userGetFunction = (name) => {
    axios(api + name)
    .then((response) => {
        userCard(response.data);
        repoGetFuntion(name)
    }).catch((err) => {
        if(err.response.status == 404) {
            errorFunction("This user does not exist");
        }
    });
}

const getRepoFunction = () => {
    
}