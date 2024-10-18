const data = document.getElementById("data");
const hora = document.getElementById("hora");
let atualizar = document.getElementById("atualizar");

const nowDate = new Date();

data.innerHTML = nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDay();

hora.innerHTML = nowDate.getHours() + ":" + nowDate.getMinutes() + ":" + nowDate.getSeconds();

atualizar.addEventListener("click", () =>{
    location.reload();
});