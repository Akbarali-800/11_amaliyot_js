const ism = prompt("Ismingizni kriting")
const backColor = prompt("Orqa fon rangini kriting")
const textColor = prompt("Text rangini kriting")

const newName = document.createElement("h1")

newName.textContent = ism;

document.body.style.backgroundColor = backColor;
document.body.style.color = textColor;


if (ism === "") {
    alert("Ismni kriting")
    // newName.textContent = ism
    // newName.textContent = "Ismingizni kriting"
    const ism = prompt("Ismingizni kriting")
    document.body.append(newName, ism);

}
else if (backColor === "") {
    alert("Orqa fon rangini kriting")
    newName.backColor = ("Orqa fon rang kiritmadingiz")
    const backColor = prompt("Orqa fon rangini kriting")
    newName.style.backgroundColor = backColor;
    document.body.style.backgroundColor = backColor;
}
else if (textColor === "") {
    alert("Text rangini kriting")
    newName.textColor = ("Text rang kiritmadingiz")
    const textColor = prompt("Text rangini kriting")
    newName.style.color = textColor;
    document.body.style.color = textColor;
}
else {
    document.body.appendChild(newName)
}


document.body.appendChild(newName);



