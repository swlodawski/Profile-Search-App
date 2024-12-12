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

const getRepoFunction = (name) => {
    axios(api + name + '/repos?sort=created')
    .then((response) => {
        repoCardFunction(response.data);
    }).catch((err) => {
        errorFunction("Could not fetch repo");
    });
}

const userCard = (user) => {
    let id = user.name || user.login;
    let info = user.bio ? `<p>${user.bio}</p>` : "";
    let cardElement = 
    <div class="card">
        <div>
            <img src="${user.avatar_url}" 
            alt="{user.name}"
            class="{}avatar"></img>
        </div>

        <div class="user-info">
            <h2>${id}</h2>${info}<ul>
                <li>${user.followers}<strong>Following</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>;
    main.innerHTML = cardElement
}

