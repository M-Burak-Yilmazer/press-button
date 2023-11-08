const par = document.createElement("p");
par.textContent =""
document.body.appendChild(par);

document.body.addEventListener("keyup", (e) => {
  console.log(e.target);
  const text = document.querySelector(".title");
  text.innerHTML = `You pressed ${e.key}`;
  
  par.textContent = e.keyCode;
  
});
