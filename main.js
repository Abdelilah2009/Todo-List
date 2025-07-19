function customTask(message) {
  return `<div class="flex gap-3 w-full p-1 transition-colors items-center">
          <button onclick="markChecked(this)" class="bg-slate-100 w-10 h-10 rounded-full"> <i class="fa-solid fa-check text-xl text-slate-100"></i></button>
          <p class="grow">${message}</p>
          <div class="gap-1">
            <button onclick="updatTask(this)" class=" hover:bg-cyan-500 hover:text-white rounded-full w-10 h-10 text-cyan-600 border bg-white transition-colors "><i class="fa-solid fa-pen"></i></button>
           <button onclick="deleteTask(this)" class=" hover:bg-cyan-500 hover:text-white rounded-full w-10 h-10 text-cyan-600 border bg-white transition-colors "><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>`;
}

function addTask() {
  const input = document.querySelector("input");
  if (input.value == "") {
    alert("Please enter a task");
  } else {
    const taskList = document.querySelector(".tasklist");
    taskList.innerHTML += customTask(input.value);
    input.value = "";
  }
}

function deleteTask(target) {
  target.parentElement.parentElement.remove();
}

function updatTask(target) {
  const text = target.parentElement.previousElementSibling.innerText;

  target.parentElement.previousElementSibling.innerHTML = `<input type="text" class="update-input" onblur="saveInput(this)" value="${text}" />`;
}

function saveInput(target) {
  const newText = target.value;
  if (newText.trim() === "") {
    alert("Task cannot be empty");
    return;
  }
  target.parentElement.innerHTML = newText;
  target.remove();
}

function markChecked(target) {
  if (target.classList.contains("bg-slate-100")) {
    target.classList.remove("bg-slate-100");
    target.classList.add("bg-green-500");
    target.children[0].classList.remove("text-slate-100");
    target.children[0].classList.add("text-white");
  } else {
    target.classList.remove("bg-green-500");
    target.classList.add("bg-slate-100");
    target.children[0].classList.remove("text-white");
    target.children[0].classList.add("text-slate-100");
  }
}
