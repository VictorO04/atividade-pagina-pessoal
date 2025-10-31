const botao = document.getElementById("btn-tema");
const body = document.body;

botao.addEventListener("click", () => {
    if (body.classList.contains("claro")) {
        body.classList.replace("claro", "escuro");
        botao.textContent = "🌙";
    } else {
        body.classList.replace("escuro", "claro");
        botao.textContent = "☀️";
    }
});