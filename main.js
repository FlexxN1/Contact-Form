const $form = document.getElementById("form");
const $buttonMailto = document.getElementById("trucazo");

$form.addEventListener("submit", function handleSubmit(event){
    event.preventDefault()

    const form = new FormData(this)

    $buttonMailto.setAttribute("href", `mailto:juandavidx40@gmail.com?subject=${form.get("name")} ${form.get("email")}&body=${form.get("message")}`);
    $buttonMailto.click()
});