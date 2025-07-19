function customTask(message) {
  return `<div class="flex gap-3 w-full p-1 transition-colors items-center">
          <button class="bg-slate-100 w-10 h-10 rounded-full"> <i class="fa-solid fa-check text-xl"></i></button>
          <p class="grow">${message}</p>
          <div class="gap-1">
             <button class=" hover:bg-cyan-500 hover:text-white rounded-full w-10 h-10 text-cyan-600 border bg-white transition-colors "><i class="fa-solid fa-pen"></i></button>
           <button class=" hover:bg-cyan-500 hover:text-white rounded-full w-10 h-10 text-cyan-600 border bg-white transition-colors "><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>`;
}

function addTask() {
  const input = document.querySelector('input');
  const taskList = document.querySelector(".tasklist");
  taskList.innerHTML += customTask(input.value);
  input.value = '';
}
