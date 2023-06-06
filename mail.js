const email = document.querySelector("#eeemail");
const name = document.querySelector("#nnname");
const primechanie = document.querySelector("#ppprimechanie");
const submit = document.querySelector("#sssubmit");

submit.addEventListener("click", () => {
  console.log("aaaaaaaa", email.value, name.value);
  fetch(`https://api.telegram.org/bot6181868823:AAGqJeAdoGpxkl65ZdXw7eue7CD2ENLJvfc/sendMessage?chat_id=-1001914563906&text=${encodeURI(`Имя: ${name.value}\nНомер телефона: ${email.value}\nПримечание: ${primechanie.value} `)}`)
});