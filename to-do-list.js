const output = document.getElementById("outputText");
const input = document.getElementById("inputText");

function addTask() {
    if(input.value === ""){ // textboxが空欄の時、追加せずにalertを表示
        alert("Task is empty. Please fill in the blank.");
    }
    else{
        // elementをつくる/elementの中身を記述
        const outputElement1 = document.createElement("p");
        const outputElement2 = document.createElement("input");
        // element1にtextboxの内容をコピー
        outputElement1.textContent = "- " + input.value;
        // element2のinputがbuttonであることを定義
        outputElement2.setAttribute("type", "button");
        outputElement2.setAttribute("value", "Remove");
        outputElement2.setAttribute("id", "removeButton");
        // elementを置く場所（output）を指定し、引数にelementを入れる
        output.appendChild(outputElement1);
        output.appendChild(outputElement2);
        // addButtonを押した後にtextboxを空にする
        input.value = "";
    }
}

// task addition
const button1 = document.getElementById("addButton");
button1.addEventListener("click", addTask);

// task delete
const button2 = document.getElementById("deleteButton");


// task all delete
function deleteTask() {
    if(output.textContent === ""){ // Listに何もない時、alertを表示
        alert("The list is empty.");
    }
    else{ // comfirmでOKを選択した場合、listを空にする
        if(confirm("Are you sure you want to delete all tasks?") === true){
            output.textContent = "";
        }
    }
}
const button3 = document.getElementById("deleteAllButton");
button3.addEventListener("click", deleteTask);
