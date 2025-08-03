const iput = document.getElementById("iput");
const btn = document.getElementById("btn");
const listul = document.getElementById("listul");

document.getElementById("todo-form").addEventListener("submit", function(e) {
  e.preventDefault();
});

btn.addEventListener('click', function () {
  if (iput.value === '') {
    alert("Write something to add todo!");
  } else {
   
    let li = document.createElement("li");

    
    let textSpan = document.createElement("span");
    textSpan.classList.add("task-text");
    textSpan.textContent = iput.value;
    li.appendChild(textSpan);

   
    let span = document.createElement("span");
    span.innerHTML = "X";
    span.className = "delete-btn";
    li.appendChild(span);

    listul.appendChild(li);
  }

  iput.value = "";
  save();
});

listul.addEventListener('click', function (e) {
  if (e.target.tagName === "SPAN" && e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    save();
  } else if (e.target.classList.contains("task-text")) {
    e.target.parentElement.classList.toggle("checked");
    save();
  }
});

function save() {
  localStorage.setItem("data", listul.innerHTML);
}

function reveltasks() {
  listul.innerHTML = localStorage.getItem("data");
}
reveltasks();
