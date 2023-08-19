const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("listcontainer");

function addtask() {
  if (inputbox.value === "") {
    alert("you must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  save();
}

listcontainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      save();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      save();
    }
  },
  false
);

function save() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

showdata();

function showdata() {
  listcontainer.innerHTML = localStorage.getItem();
}
