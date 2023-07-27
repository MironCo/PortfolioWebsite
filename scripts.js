const textLength = 20;
const nameLength = 14;
const typeSpeed = 185;

var textIndex = 0;
var nameTemp = "";

function generateRandomText(id) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';

    for (let i = 0; i < textLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    document.getElementById(id).innerHTML = result;
}

function generateNameText() {
    const name = " Miron Sulicz ";
    let nameElement = document.getElementById('title2');

    start = (textLength - nameLength) / 2;
    end = textLength - start;

    let newText = nameElement.textContent.toString();

    if (textIndex < name.length) {
        nameTemp += name.charAt(textIndex);

        nameElement.innerHTML = newText.substring(0, start);

        let nameSpan = document.createElement("span");
        nameSpan.innerText = nameTemp;
        nameElement.appendChild(nameSpan);

        nameElement.innerHTML += newText.substring(start+textIndex+1);

        textIndex ++;

        setTimeout(generateNameText, typeSpeed);
    }
}