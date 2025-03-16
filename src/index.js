function add(){
    document.getElementById("result").innerText = "Result: " + 
        `${(
            parseFloat(document.getElementById("num1").value) + 
            parseFloat(document.getElementById("num2").value)
        )}`;
}

function subtract(){
    document.getElementById("result").innerText = "Result: " + 
        `${(
            parseFloat(document.getElementById("num1").value) - 
            parseFloat(document.getElementById("num2").value)
        )}`;
}


function resetFields(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result: ";
}

