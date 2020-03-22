let inputValue = document.getElementById("todoInput");
let todoList = [];
let isDone = false;
let undone = [];
let done = [];
let all = [];

let addItem = () => {
    let todoValue = inputValue.value;
    console.log(todoList);
    todoList.push({
        text: todoValue,
        isDone: false
    });
    all.push(inputValue.value);
    render();
}
let render = () => {
    let htmlToDoArr = todoList.map((todo, index) => {
        return `<li><button onclick = "toggleDone(${index})"></button>${todo.text}<button onclick = "removeItem(${index})">X</button></li>`
    }).join('');
    document.getElementById('resultArea').innerHTML = htmlToDoArr;
};

let removeItem = (index) => {
    todoList.splice(index, 1);
    console.log(todoList);
    render();
};

let toggleDone = (index) => {
    todoList[index].isDone = !(todoList[index].isDone);
}