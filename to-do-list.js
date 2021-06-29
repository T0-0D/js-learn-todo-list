const input = document.getElementById("inputText");
const output = document.getElementById("outputText");

// task addition
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function() {
    if(input.value === ""){ // textboxが空欄の時、追加せずにalertを表示
        alert("Task is empty. Please fill in the blank.");
    }
    else{
        // elementをつくる/elementの中身を記述
        const outputP = document.createElement("p");
        // element1にtextboxの内容をコピー
        outputP.textContent = "- " + input.value;
        // elementを置く場所（output）を指定し、引数にelementを入れる
        output.appendChild(outputP);
        // addButtonを押した後にtextboxを空にする
        input.value = "";

        // task delete
        const deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "Delete";
        outputP.appendChild(deleteButton);
        deleteButton.addEventListener("click", function() {
            outputP.remove();
        })
    }
});

// task all delete
const button3 = document.getElementById("deleteAllButton");
button3.addEventListener("click", function() {
    if(output.textContent === ""){ // Listに何もない時、alertを表示
        alert("The list is empty.");
    }
    else{ // comfirmでOKを選択した場合、listを空にする
        if(confirm("Are you sure you want to delete all tasks?") === true){
            output.textContent = "";
        }
    }
});