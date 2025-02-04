const tasks = [
  {
    id: 1,
    title: "make bed",
    isCompleted: true,
  },
  {
    id: 2,
    title: "make breakfast",
    isCompleted: false,
  },
  {
    id: 3,
    title: "make coffee",
    isCompleted: true,
  },
];

tasks.map((task) => {
  console.log(task.title);
  let el = document.createElement("li");
  el.className = task.isCompleted ? "completed" : "notcompleted";
  el.innerHTML = task.title;
  document.getElementById("todo-list").appendChild(el);
});
