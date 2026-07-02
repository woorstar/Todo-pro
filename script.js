const input = document.getElementById("taskInput");
const taskCount = document.getElementById("taskCount");
const button = document.getElementById("addButton");
const list = document.getElementById("taskList");

function updateTaskCount() {
    let allli = list.querySelectorAll("li");
    let count = 0;
    for (let i = 0; i < allli.length; i++) {
        let item = allli[i];
        if (!item.classList.contains("completed")) {
            count++;
        }
    }
    taskCount.innerText = `还有${count}项未完成`;
}

button.onclick = function () {

    // 获取输入框内容
    const text = input.value.trim();

    // 判断有没有输入
    if(text === ""){
        alert("请输入内容！");
        return;
    }

    // 创建新的li
    const li = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "删除";
   
    const finshButton = document.createElement("button");
    finshButton.innerText = "完成"; 

    
    deleteButton.onclick = function () {
    // 删除对应的li
        li.remove();
        updateTaskCount();
    }
    
     finshButton.onclick = function () {
        li.classList.toggle("completed");
        updateTaskCount();

    }

    // 设置文字
    li.innerText = text;

    // 放进列表
    li.appendChild(finshButton);
    li.appendChild(deleteButton);
    list.appendChild(li);
    // 清空输入框
    input.value = "";
    updateTaskCount();
};
updateTaskCount();
